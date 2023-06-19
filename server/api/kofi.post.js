export default defineEventHandler(async (event) => {
  const { KOFI_TOKEN } = useRuntimeConfig()
  const { data } = await readBody(event)
  const message = JSON.parse(data)
  if (message.verification_token !== KOFI_TOKEN) return { msg: 'not' }
  return { msg: 'ok' }
})