<template>
<div class=" w-full rounded-xl aspect-square bg-center bg-contain cursor-pointer" :style="`background-image: url(${props.job.image_url});`" @click="show = true">
</div>
<Modal v-model:show="show" v-if="show">
<figure class="aspect-square" :class="{ 'blur-xl': !loaded }">
  <img @load="loaded = true" class="aspect-square" :src="props.job.image_url" alt="ai image">
</figure>
<div class=" p-3">
  <div v-if="!loading">
    <h3 class="font-bold">正面提詞 
      <button @click="copy(jobDetail.params.prompt)" type="button">
        <i class='bx bxs-copy-alt bx-sm' v-if="copied"></i>
        <i class='bx bx-copy-alt bx-sm' v-else ></i>
      </button>
    </h3>
    <p class="text-xs line-clamp-1">{{ jobDetail.params.prompt }}</p>
    <h3 class="font-bold">負面提詞 
      <button @click="negCopy(jobDetail.params.prompt)" type="button">
        <i class='bx bxs-copy-alt bx-sm' v-if="negCopied"></i>
        <i class='bx bx-copy-alt bx-sm' v-else ></i>
      </button>
    </h3>
    <p class="text-xs line-clamp-1">{{ jobDetail.params.negative_prompt }}</p>
  </div>
  <div class=" grid grid-cols-3 gap-2">
    <button @click.stop="deleteImage" type="button" class="transition-transform hover:-translate-y-1 col-start-3 rounded-lg p-3 bg-secondary-button">
      <i class='bx bx-trash bx-sm'></i>
    </button>
    <a :href="props.job.image_url" target="_blank" rel="noopener noreferrer" class="col-span-full transition-transform hover:-translate-y-1 bg-primary text-white text-center p-3 rounded-lg">
      <i class='bx bx-download bx-sm' ></i>
    </a>
  </div>
</div>
</Modal>
</template>

<script setup>
const props = defineProps({
  job: Object,
  delete: Function
})

const {
  copy: negCopy,
  copied: negCopied
} = useClipboard({
  copiedDuring: 500
})

const {
  copy,
  copied
} = useClipboard({
  copiedDuring: 500
})

const show = ref(false)
const loaded = ref(false)

const deleteImage = async () => {
  await props.delete({
    jobId: props.job.id
  })
  show.value = false
}

const {
  getDetail,
  loading,
  jobDetail
} = useImages()
getDetail(props.job.id)

</script>