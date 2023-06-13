export default defineEventHandler(async (event) => {
  const { config } = await readBody(event)
  const { API_KEY, API_DOMAIN, API_VERSION } = useRuntimeConfig()
  const fetch_response = await fetch(API_DOMAIN + '/' + API_VERSION + '/job' , {
    method: 'POST',
    headers: {
      'X-Prodia-Key': API_KEY,
      accept: 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(config)
  })
  return await fetch_response.json()
})