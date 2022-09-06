const fetcher = async (url: string) => {
  const res = await fetch(url)
  const resJson = res.json()
  return resJson
}

export default fetcher
