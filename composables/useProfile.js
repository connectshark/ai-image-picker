export default function () {
  const client = useSupabaseClient()
  const user = useSupabaseUser()
  const loading = ref(false)
  const profile = ref({})

  const getProfile = async () => {
    const { data } = await client.from('profiles').select('id, email').eq('id', user.value.id).single()
    profile.value = data
  }

  getProfile()

  return {
    loading,
    profile
  }
}