import createProdiaAI from 'prodia-ai'

const config = useRuntimeConfig()
const prodiai = createProdiaAI(config.API_KEY)

export default prodiai