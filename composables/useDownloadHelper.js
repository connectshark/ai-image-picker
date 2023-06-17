export default function () {
  const loading = ref(false)
  const downloadUrl = ref('')

  const fetchImage = async (imageUrl) => {
    loading.value = true
    const fetch_response = await fetch(imageUrl)
    const blob = await fetch_response.blob()
    const url = URL.createObjectURL(blob)
    downloadUrl.value = url
    loading.value = false
  }

  return {
    fetchImage,
    loading,
    downloadUrl
  }
}