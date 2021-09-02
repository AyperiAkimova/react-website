type ErrorResponse<T> = {
  status: number
  message?: string
  payload?: T
}

export class ApiError<T = never> extends Error {
  readonly response: Response
  readonly payload: ErrorResponse<T>

  constructor(response: Response, payload: ErrorResponse<T>) {
    const message =
      payload?.message || response.statusText || response.status.toString()

    super(message)

    this.response = response
    this.payload = payload
  }
}
