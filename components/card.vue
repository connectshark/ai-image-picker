<template>
<div class=" w-full rounded-xl aspect-square bg-center bg-contain cursor-pointer" :style="`background-image: url(${props.job.image_url});`" @click="show = true">
</div>
<Modal v-model:show="show" v-if="show">
<figure class="mb-10 aspect-square" :class="{ 'blur-xl': !loaded }">
  <img @load="loaded = true" class=" rounded-xl aspect-square" :src="props.job.image_url" alt="ai image">
</figure>
<div class=" grid grid-cols-3 gap-2">
  <button @click.stop="deleteImage" type="button" class="transition-transform hover:-translate-y-1 col-start-3 rounded-lg p-3 bg-secondary-button">
    <i class='bx bx-trash bx-sm'></i>
  </button>
  <div v-if="loading" class=" text-center">
    <i class='bx bx-loader-circle bx-spin bx-sm' ></i>
  </div>
  <a v-else :href="downloadUrl" download class="col-span-full transition-transform hover:-translate-y-1 bg-primary text-white text-center p-3 rounded-lg">
    <i class='bx bx-download bx-sm' ></i>
  </a>
</div>
</Modal>
</template>

<script setup>
const props = defineProps({
  job: Object,
  delete: Function
})

const loaded = ref(false)

const {
  loading,
  downloadUrl,
  fetchImage
} = useDownloadHelper()

const show = ref(false)

watch(show, value => {
  if (!value) {
    loaded.value = false
  }
})

const stop = watch(show, value => {
  if (value) {
    fetchImage(props.job.image_url)
    stop()
  }
})

const deleteImage = async () => {
  await props.delete({
    jobId: props.job.id
  })
  show.value = false
}

</script>