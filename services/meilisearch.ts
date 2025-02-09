import {MeiliSearch} from 'meilisearch'
export const searchClient = new MeiliSearch({
    host :"http://localhost:7700",
    apiKey :"masterkey"
})