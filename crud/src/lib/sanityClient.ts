import { createClient } from "next-sanity";

export const client = createClient({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn:false,
    apiVersion:"v2023-10-19"
})