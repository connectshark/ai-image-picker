<template>
<div>
  <p>{{ props.jobId }}</p>
  <div v-if="loading">
    <i class='bx bx-loader-circle'></i>
  </div>
  <figure v-else>
    <img :src="jobs.imageUrl" alt="">
  </figure>
</div>
</template>

<script setup>
const props = defineProps({
  jobId: String
})

const {
  getJobs,
  loading,
  jobs
} = useImages()

getJobs(props.jobId)
watch(jobs, value => {
  if (value.status !== 'succeeded') {
    setTimeout(async () => {
      await getJobs(props.jobId)
    }, 3000)
  }
})
</script>