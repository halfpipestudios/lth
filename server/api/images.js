import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const name = query.name;
    const record = await pb.collection('Images').getFirstListItem(`Nombre="${name}"`);

    const result = pb.getFileUrl(record, record["Imagen"]);
    return result;

});