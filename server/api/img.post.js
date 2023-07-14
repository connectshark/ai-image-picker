import prodiai from '../../utils/prodia'

export default defineEventHandler(async (event) => {
  const { config } = await readBody(event)
  const json = await prodiai.createJob(config)
  return json
})