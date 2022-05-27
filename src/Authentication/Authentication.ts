import { Request, Response } from "express";
import fetch from "node-fetch";
import { HandleError } from "../HandleError";

import {
  FacialAuthenticationStatus,
  MapToFacialAuthenticationResult,
} from "./FacialAuthenticationStatus";


function checkSelphIdSDKVersion(authorization) {
  if (!authorization) { return "v1" }

  var decode = require('jwt-claims');
  
  var token = authorization.split('Bearer ')[1]

  if (!token) { return "v1" }

  var claims = decode(token);

  if (!claims['http://facephi/identity/claims/selphid_sdk']) { return "v1" }

  return claims['http://facephi/identity/claims/selphid_sdk']  
}



export const AuthenticateFacialImages = async (
  request: Request,
  response: Response
) => {

  const url = 'http://selphid-sdk/api/selphid/authenticate-facial/images'

  const confPost = {
    method: "POST",
    body: JSON.stringify(request.body),
    headers: {
      "Content-Type": "application/json",
      Authorization: request.headers.authorization,
      selphid_sdk: checkSelphIdSDKVersion(request.headers.authorization),
    }
  }

  try {
    const res = await fetch(url, confPost)
    const data = await res.json()

    const dataResponse = {
      similarity: data.similarity,
      authStatusValue: FacialAuthenticationStatus[data.authStatus],
      authStatus: MapToFacialAuthenticationResult[data.authStatus],
    };

    if (!!data.status) 
      HandleError(data, response);
    else 
      response.status(200).json(dataResponse);
  }
  catch(error) {
      console.error(error);
      response.status(500).json(error);
  }
};
