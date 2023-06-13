<template>
  <NuxtLayout>
    <div class=" w-11/12 mx-auto bg-slate-300 p-10 grid grid-cols-2 gap-4">
      <JobComponents v-for="job in jobs" :jobId="job"/>
    </div>
    <form @submit.prevent="submitHandler" class=" w-11/12 mx-auto bg-slate-300 p-10 flex flex-col gap-8">
      <div>
        <label for="prompt">正面提詞</label>
        <input required class="w-full p-4 rounded bg-white" type="text" name="prompt" id="prompt" v-model="formData.prompt" placeholder="提詞">
      </div>
      <div>
        <label for="negative_prompt">負面提詞</label>
        <input class="w-full p-4 rounded bg-white" type="text" name="negative_prompt" id="negative_prompt" v-model="formData.negative_prompt" placeholder="負面提詞">
      </div>
      <div>
        <label for="model">模型</label>
        <select class="w-full p-4 rounded bg-white" name="model" id="model" v-model="formData.model">
          <option v-for="model in models" :value="model.id">{{ model.name }}</option>
        </select>
      </div>
      <div>
        <label for="steps">繪圖步數</label>
        <select class="w-full p-4 rounded bg-white" name="steps" id="steps" v-model.number="formData.steps">
          <option v-for="item in 30" :value="item">{{ item }}</option>
        </select>
      </div>
      <div>
        <label for="cfg_scale">CFG Scale</label>
        <input class="w-full p-4 rounded bg-white" type="tel" name="cfg_scale" id="cfg_scale" v-model.number="formData.cfg_scale">
      </div>
      <div>
        <label for="sampler">取樣器</label>
        <select class="w-full p-4 rounded bg-white" name="steps" v-model.number="formData.sampler">
          <option v-for="sampler in samplers" :value="sampler">{{ sampler }}</option>
        </select>
      </div>
      <div>
        <button class=" p-4 rounded bg-white" type="submit">產生</button>
      </div>
    </form>
  </NuxtLayout>
</template>

<script setup>


const {
  loading,
  createImage
} = useImages()

const jobs = useJobs()

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
  await createImage(formData)
}

</script>