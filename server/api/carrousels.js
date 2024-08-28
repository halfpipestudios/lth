import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const category = query.category;
    const interval = {
        start: query.start,
        end: query.end,
    };

    const record = await pb.collection("Carrusel").getList(interval.start, interval.end, {
        filter: `Categoria = "${category}"`,
        sort: '-created'
    });

    for (let image of record.items) {
        image["image"] = pb.getFileUrl(image, image["Imagen"]);
    }

    return record;

});