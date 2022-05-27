import { Request, Response } from "express";
import fetch from "node-fetch";
import { HandleError } from "../HandleError";

import {
  FacialLivenessDiagnostic,
  MapToFacialLivenessResult,
} from "./FacialLivenessDiagnostic";


function checkSelphIdSDKVersion(authorization) {
  if (!authorization) { return "v1" }

  var decode = require('jwt-claims');
  
  var token = authorization.split('Bearer ')[1]

  if (!token) { return "v1" }

  var claims = decode(token);

  if (!claims['http://facephi/identity/claims/selphid_sdk']) { return "v1" }

  return claims['http://facephi/identity/claims/selphid_sdk']  
}



export const EvaluatePassiveLiveness = async (
  request: Request,
  response: Response
) => {
  
  const url = 'http://selphid-sdk/api/selphid/passive-liveness/evaluate'

  const confPost = {
    method: "POST",
    body: JSON.stringify(request.body),
    headers: {
      "Content-Type": "application/json",
      Authorization: request.headers.authorization,
      selphid_sdk: checkSelphIdSDKVersion(request.headers.authorization),
    },
  }

  try {
    const res = await fetch(url, confPost)
    const data = await res.json()

    const dataResponse = {
      diagnostic: MapToFacialLivenessResult[data.diagnostic],
      diagnosticValue: FacialLivenessDiagnostic[data.diagnostic],
      diagnosticDescription: data.diagnosticDescription,
    };

    if (!!data.status) 
      HandleError(data, response);
    else 
      response.status(200).json(dataResponse)
  }
  catch (error) {
    console.log(error)
    response.status(500).json(error);
  }

};
