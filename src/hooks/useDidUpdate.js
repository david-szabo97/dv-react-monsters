import { useEffect, useRef } from "react"

const useDidUpdate = (callback, deps) => {
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    callback()
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useDidUpdate
