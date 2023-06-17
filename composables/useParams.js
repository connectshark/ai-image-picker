export default function () {
  const data = ref({})
  const loading = ref(false)
  const client = useSupabaseClient()
  
  const addParams = async ({ config }) => {
    const { data, error } = await client.from('params').insert([config])
  }

  const getParams = async ({ jobId }) => {
    loading.value = true
    const { data:params } = await client.from('params').select('*').eq('job_id', jobId).single()
    data.value = params
    loading.value = false
  }

  const updateParams = async ({ config, jobId }) => {
    const { data:params } = await client.from('params').update(config).eq('job_id', jobId)
  }

  const deleteJob = async ({ jobId }) => {
    const { error } = await client.from('params').delete().eq('job_id', jobId)
  }

  return {
    loading,
    data,
    getParams
  }
}