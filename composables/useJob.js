export default function () {
  const list = ref([])
  const loading = ref(false)
  const client = useSupabaseClient()
  const user = useSupabaseUser()
  
  const getAllJobs = async () => {
    let { data: job, error } = await client.from('job').select('*').eq('owner_id', user.value.id)
    list.value = job.sort((a, b) => a.created_at < b.created_at ? 1 : -1)
  }

  const addJob = async ({ jobId, image_url }) => {
    await client.from('job').insert([{
      id: jobId,
      owner_id: user.value.id,
      image_url
    }])
    await getAllJobs()
  }

  const updateJob = async ({ jobId, updateObject }) => {
    await client.from('job').update(updateObject).eq('id', jobId)
    await getAllJobs()
  }

  const deleteJob = async ({ jobId }) => {
    await client.from('job').delete().eq('id', jobId)
    await getAllJobs()
  }

  getAllJobs()

  return {
    list,
    loading,
    updateJob,
    addJob,
    deleteJob
  }
}