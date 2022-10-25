import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [url])
  return data
}
