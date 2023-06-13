export default function () {
  const jobList = useJobs()
  const loading = ref(false)
  const jobs = ref({})
  const createImage = async (config) => {
    loading.value = true
    const fetch_response = await fetch('/api/img', {
      method: 'POST',
      body: JSON.stringify({
        config
      })
    })
    const json = await fetch_response.json()
    jobList.value.push(json.job)
    localStorage.setItem('jobs', JSON.stringify(jobList.value))
    loading.value = false
  }

  const getJobs = async (jobId) => {
    loading.value = true
    let status = false
    while (!status) {
      const fetch_response = await fetch(`/api/img?jobId=${jobId}`)
      const json = await fetch_response.json()
      status = json.status === 'succeeded'
      if (!status) {
        await delay(3000)
      } else {
        jobs.value = json
      }
    }

    loading.value = false
  }

  return {
    createImage,
    loading,
    getJobs,
    jobs
  }
}

const delay = (time) => {
  return new Promise(function(resolve) { 
    setTimeout(resolve, time)
  })
}