export default function () {
  const loading = ref(false)
  const jobDetail = ref({})
  
  const createImage = async (config) => {
    const fetch_response = await fetch('/api/img', {
      method: 'POST',
      body: JSON.stringify({
        config
      })
    })
    const json = await fetch_response.json()
    return json
  }

  const getDetail = async (jobId) => {
    let status = false
    while (!status) {
      const fetch_response = await fetch(`/api/img?jobId=${jobId}`)
      const json = await fetch_response.json()
      status = json.status === 'succeeded'
      if (!status) {
        await delay(3000)
      } else {
        jobDetail.value = json
      }
    }
  }

  const createNewImage = async (config) => {
    loading.value = true
    const json = await createImage(config)
    await getDetail(json.job)
    loading.value = false
  }

  return {
    createNewImage,
    loading,
    jobDetail
  }
}

const delay = (time) => {
  return new Promise(function(resolve) { 
    setTimeout(resolve, time)
  })
}