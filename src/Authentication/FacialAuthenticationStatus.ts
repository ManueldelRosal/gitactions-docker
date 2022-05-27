export enum FacialAuthenticationStatus {
  None = 0,
  Negative = 1,
  Uncertain = 2,
  Positive = 3,
  NoneBecausePoseExceed = 4,
  NoneBecauseInvalidExtractions = 5,
}

export enum MapToFacialAuthenticationResult {
  None = "NONE",
  Negative = "NEGATIVE",
  Uncertain = "UNCERTAIN",
  Positive = "POSITIVE",
  NoneBecausePoseExceed = "NONE_BECAUSE_POSE_EXCEED",
  NoneBecauseInvalidExtractions = "NONE_BECAUSE_INVALID_EXTRACTIONS",
}
