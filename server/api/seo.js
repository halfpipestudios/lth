import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const layout = query.layout;

    const result = await pb.collection('SEO').getFirstListItem(`Layout="${layout}"`);
    result["image"] = pb.getFileUrl(result, result["Imagen"]);

    return result
});