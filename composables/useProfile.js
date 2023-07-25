export default function () {
  const client = useSupabaseClient()
  const user = useUser()
  const loading = ref(false)
  const profile = ref({})

  const getProfile = async () => {
    loading.value = true
    const { data } = await client.from('profiles')
      .select('id, email')
      .match({ 'id': user.value.id })
      .single()
    profile.value = data
    loading.value = false
  }

  onMounted(getProfile)

  return {
    loading,
    profile
  }
}