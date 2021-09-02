import {ApiError} from '../lib/api-error'

type Method = 'get' | 'post' | 'put' | 'delete'

export type Options = Omit<
  RequestInit,
  'body' | 'method' | 'headers' | 'credentials'
> & {
  id?: string | number
  search?: string | Record<string, string | number | boolean>
  method?: Method
  body?: object
  asForm?: boolean
  files?: Record<string, File | FileList | null>
}

type GetOptions = Omit<Options, 'method' | 'body'>
type PostOptions = Omit<Options, 'method' | 'body'> & { body: object }
type PutOptions = Omit<Options, 'id' | 'method' | 'body'> & {
  id: string | number
  body: object
}
type DeleteOptions = Omit<Options, 'id' | 'method' | 'body'> & {
  id: string | number
}

const api = async (
    path: string,
    {id, search, body, files, asForm, ...rest}: Readonly<Options> = {},
) => {
  let uri = `${window.location.protocol}//${process.env.REACT_APP_API_HOST
    || window.location.host
  }/api/v1${path}`

  if (id) uri += `/${id}`

  if (search) {
    const coerced =
      typeof search === 'object'
        ? Object.entries(search)
            .filter(([k, v]) => v !== '' && v != null)
            .flatMap(([k, v]) =>
            Array.isArray(v)
              ? v.map((x) => [k, x.toString()])
              : [[k, v.toString()]],
            )
        : search

    uri += `?${new URLSearchParams(coerced).toString()}`
  }

  const init: RequestInit = rest

  init.headers = {}
  init.credentials = 'same-origin'

  if (process.env.NODE_ENV === 'development') init.credentials = 'include'

  if (files) {
    init.body = new FormData()

    init.body.append(
        'request',
        new Blob([JSON.stringify(body)], {type: 'application/json'}),
    )

    for (const [key, value] of Object.entries(files)) {
      if (value == null) continue

      if (value instanceof Blob) {
        init.body.append(key, value)

        continue
      }

      for (let index = 0; index < value.length; index++) {
        const file = value.item(index)

        if (file) init.body.append(`${key}[${index}]`, file)
      }
    }
  } else if (asForm && body != null) {
    init.body = new FormData()

    for (const [key, value] of Object.entries(body)) {
      init.body.set(key, value)
    }
  } else if (body) {
    init.body = JSON.stringify(body)
    init.headers['Content-Type'] = 'application/json'
  }

  let response: Response

  try {
    response = await fetch(uri, init)
  } catch (error) {
    if (error.name === 'AbortError') return

    throw error
  }

  const payload = await (isJson(response)
    ? response.json()
    : isText(response)
      ? response.text()
      : response.blob())

  if (!response.ok) throw new ApiError(response, payload)

  return payload
}

api.get = (path: string, options: Readonly<GetOptions> = {}) =>
  api(path, {...options, method: 'get'})

api.post = (path: string, options: Readonly<PostOptions>) =>
  api(path, {...options, method: 'post'})

api.put = (path: string, options: Readonly<PutOptions>) =>
  api(path, {...options, method: 'put'})

api.delete = (path: string, options: Readonly<DeleteOptions>) =>
  api(path, {...options, method: 'delete'})

export {api}

const isContent = (type: string) => (response: Response) =>
  response.headers.get('Content-Type')?.includes(type) ?? false

const isJson = isContent('application/json')
const isText = isContent('text/plain')
