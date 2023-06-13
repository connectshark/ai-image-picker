export default defineEventHandler(async (event) => {
  const { jobId } = getQuery(event)
  const { API_KEY, API_DOMAIN, API_VERSION } = useRuntimeConfig()
  const fetch_response = await fetch(API_DOMAIN + '/' + API_VERSION + `/job/${jobId}` , {
    headers: {
      'X-Prodia-Key': API_KEY,
      'content-type': 'application/json'
    }
  })
  return await fetch_response.json()
})