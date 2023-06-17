<template>
<NuxtLayout>
  <section class="bg-main-black/5">
    <form @submit.prevent="submitHandler" class="w-11/12 mx-auto py-8 grid gap-2 md:gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div class=" col-span-full xl:col-span-2">
        <label for="prompt">正面提詞</label>
        <textarea required class="w-full resize-none p-4 rounded bg-white" name="prompt" id="prompt" cols="30" rows="3" v-model="formData.prompt" placeholder="提詞"></textarea>
      </div>
      <div class="col-span-full xl:col-span-2">
        <label for="negative_prompt">負面提詞</label>
        <textarea class="w-full resize-none p-4 rounded bg-white" name="negative_prompt" id="negative_prompt" cols="30" rows="3" v-model="formData.negative_prompt" placeholder="負面提詞"></textarea>
      </div>
      <div>
        <label for="model">模型</label>
        <select class="w-full p-2 rounded bg-white" name="model" id="model" v-model="formData.model">
          <option v-for="model in models" :value="model.id">{{ model.name }}</option>
        </select>
      </div>
      <div>
        <label for="steps">繪圖步數</label>
        <select class="w-full p-2 rounded bg-white" name="steps" id="steps" v-model.number="formData.steps">
          <option v-for="item in 30" :value="item">{{ item }}</option>
        </select>
      </div>
      <div>
        <label for="cfg_scale">CFG Scale</label>
        <select class="w-full p-2 rounded bg-white" name="cfg_scale" id="cfg_scale" v-model.number="formData.cfg_scale">
          <option v-for="item in 20" :value="item">{{ item }}</option>
        </select>
      </div>
      <div>
        <label for="sampler">取樣器</label>
        <select class="w-full p-2 rounded bg-white" name="sampler" id="sampler" v-model.number="formData.sampler">
          <option v-for="sampler in samplers" :value="sampler">{{ sampler }}</option>
        </select>
      </div>
      <div class=" text-right col-span-full">
        <button :disabled="loading" class="transition-transform hover:-translate-y-1 p-3 disabled:bg-primary/80 rounded-lg bg-primary text-white" type="submit">產生</button>
      </div>
    </form>
  </section>
  <section class="py-20">
    <div class="w-5/6 mx-auto">
      <h2 class="mb-4 text-3xl font-bold">Gallery</h2>
      <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
        <div v-if="loading" class="w-full rounded-xl aspect-square bg-accent/5 flex items-center justify-center">
          <i class='bx bx-loader-circle bx-spin bx-md' ></i>
        </div>
        <Card v-for="item in list" :job="item" :key="item.id" :delete="deleteJob"/>
      </div>
    </div>
  </section>
</NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})

const loading = ref(false)

const {
  jobDetail,
  createNewImage
} = useImages()

const {
  list,
  addJob,
  deleteJob
} = useJob()

const models = [
  {
    id: 'analog-diffusion-1.0.ckpt [9ca13f02]',
    name: 'Analog V1'
  },
  {
    id: 'anythingv3_0-pruned.ckpt [2700c435]',
    name: 'Anything V3'
  },
  {
    id: 'anything-v4.5-pruned.ckpt [65745d25]',
    name: 'Anything V4.5'
  },
  {
    id: 'anythingV5_PrtRE.safetensors [893e49b9]',
    name: 'Anything V5'
  },
  {
    id: 'AOM3A3_orangemixs.safetensors [9600da17]',
    name: 'AbyssOrangeMix V3'
  },
  {
    id: 'deliberate_v2.safetensors [10ec4b29]',
    name: 'Deliberate V2'
  },
  {
    id: 'dreamlike-diffusion-1.0.safetensors [5c9fd6e0]',
    name: 'Dreamlike V1'
  },
  {
    id: 'dreamlike-diffusion-2.0.safetensors [fdcf65e7]',
    name: 'Dreamlike V2'
  },
  {
    id: 'dreamshaper_5BakedVae.safetensors [a3fbf318]',
    name: 'Dreamshaper 5 Baked Vae'
  },
  {
    id: 'dreamshaper_6BakedVae.safetensors [114c8abb]',
    name: 'Dreamshaper 5 Baked Vae'
  },
  {
    id: 'elldreths-vivid-mix.safetensors [342d9d26]',
    name: `Elldreth's Vivid`
  },
  {
    id: 'lyriel_v15.safetensors [65d547c5]',
    name: 'Lyriel V1.5'
  },
  {
    id: 'lyriel_v16.safetensors [68fceea2]',
    name: 'Lyriel V1.6'
  },
  {
    id: 'meinamix_meinaV9.safetensors [2ec66ab0]',
    name: 'MeinaMix Meina V9'
  },
  {
    id: 'openjourney_V4.ckpt [ca2f377f]',
    name: 'Openjourney V4'
  },
  {
    id: 'portrait+1.0.safetensors [1400e684]',
    name: 'Portrait V1'
  },
  {
    id: 'Realistic_Vision_V1.4-pruned-fp16.safetensors [8d21810b]',
    name: 'Realistic Vision V1.4'
  },
  {
    id: 'Realistic_Vision_V2.0.safetensors [79587710]',
    name: 'Realistic Vision v2'
  },
  {
    id: 'revAnimated_v122.safetensors [3f4fefd9]',
    name: 'Rev Animated V1.22'
  },
  {
    id: 'riffusion-model-v1.ckpt [3aafa6fe]',
    name: 'Riffusion V1'
  },
  {
    id: 'sdv1_4.ckpt [7460a6fa]',
    name: 'SD v1.4'
  },
  {
    id: 'v1-5-pruned-emaonly.ckpt [81761151]',
    name: 'SD V1.5'
  },
  {
    id: 'shoninsBeautiful_v10.safetensors [25d8c546]',
    name: `Shonin's Beautiful People V10`
  },
  {
    id: 'theallys-mix-ii-churned.safetensors [5d9225a4]',
    name: `TheAlly's Mix II`
  },
  {
    id: 'timeless-1.0.ckpt [7c4971d4]',
    name: 'Timeless V1'
  }
]

const samplers = [
  'Euler',
  'Euler a',
  'Heun',
  'DPM++ 2M Karras',
  'DDIM'
]

const formData = reactive({
  prompt: '',
  negative_prompt: '',
  steps: 25,
  cfg_scale: 7,
  sampler: 'DPM++ 2M Karras',
  model: 'analog-diffusion-1.0.ckpt [9ca13f02]'

})
const submitHandler = async () => {
  loading.value = true
  await createNewImage(formData)
  await addJob({
    jobId: jobDetail.value.job,
    image_url: jobDetail.value.imageUrl
  })
  loading.value = false
}
</script>