import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const database = query.database;

    const record = await pb.collection(database).getList(1, 50, {
        sort: '-created',
    });

    let result = [];
    for (const image of record.items) {
        result.push({ image: pb.getFileUrl(image, image["Imagen"]) });
    }
    return result;

});