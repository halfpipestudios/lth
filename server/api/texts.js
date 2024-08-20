import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {
    const texts = await pb.collection('Textos').getFullList();
    return texts;
});