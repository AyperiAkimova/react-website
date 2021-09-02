import type {Options as ApiOptions} from './api'
import {api} from './api'

type SortDirection = 'ASC' | 'DESC'

type Request<Filter, SortBy extends string | undefined> = {
  filter?: Filter
  pagination?: {
    limit?: number
    page?: number
  }
  sorting?: {
    sortBy?: SortBy
    sortDirection?: SortDirection
  }
}

export type SearchResponse<T> = {
  content: T[]
  page: number
  totalElements: number
  totalPages: number
}

type Options = Omit<Parameters<typeof api.post>[1], 'body'>

export const createSearchApi = <
  Result,
  Filter extends {} | undefined = undefined,
  SortBy extends string | undefined = undefined
> (
    path: string,
    method: 'get' | 'post',
  ) => (search: Request<Filter, SortBy> = {}, options: Options = {}) => {
    const apiOptions: ApiOptions = {
      method,
      body:
      method === 'post'
        ? {
          filter: search.filter
            ? typeof search.filter === 'string'
              ? {searchParameter: search.filter}
              : search.filter
            : undefined,
          sorting: search.sorting,
          pageRequest: {
            limit: search.pagination?.limit ?? 10,
            page: search.pagination?.page ?? 0,
          },
        }
        : undefined,
      search:
      method === 'get'
        ? {
          sortBy: search.sorting?.sortBy ?? 'ID',
          sortDirection: search.sorting?.sortDirection ?? 'ASC',
          limit: search.pagination?.limit ?? 10,
          page: search.pagination?.page ?? 0,
          ...search.filter,
        }
        : undefined,
      ...options,
    }

    return api(path, apiOptions) as Promise<SearchResponse<Result>>
  }
