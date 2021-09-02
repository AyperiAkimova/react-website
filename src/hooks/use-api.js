import {useEffect, useMemo, useRef} from 'react'

export const useApi = () => {
  const controller = useRef()
  useEffect(() => () => controller.current?.abort(), [])

  return useMemo(() => {
    const withSignal = (realApi) => (...p) => {
      if (!p[1]?.signal) {
        con
      }
    }
  })
}
