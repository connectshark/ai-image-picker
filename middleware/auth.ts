export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useUser()
  if (!user.value.id) {
    return navigateTo('/login')
  }
})