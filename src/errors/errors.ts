export class RequiredParamaterError extends Error {
  constructor(paramName: string) {
    super(`Please, ${paramName} must be provided.`);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequiredParamaterError);
    }
  }
}

export class InvalidPropertyError extends Error {
  constructor(msg: string) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidPropertyError);
    }
  }
}

export class DatabaseError extends Error {
  constructor(msg: string) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DatabaseError);
    }
  }
}
