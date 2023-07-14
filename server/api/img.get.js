import prodiai from '../../utils/prodia'

export default defineEventHandler(async (event) => {
  const { jobId } = getQuery(event)
  const json = await prodiai.getJob(jobId)
  return json
})