export const useJobs = () => useState('job', () => {
  if(!process.client) return
  return JSON.parse(localStorage.getItem('jobs') || '[]')
})