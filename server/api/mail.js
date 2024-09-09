import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const category = query.category;

    return await pb.collection('Contacto').getFirstListItem(`Categoria="${category}"`);

});