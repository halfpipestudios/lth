import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const category = query.category;
    const interval = {
        start: query.start,
        end: query.end,
    };

    const record = await pb.collection("Blogs").getList(interval.start, interval.end, {
        filter: `Categoria = "${category}"`,
        sort: '-created'
    });

    for (let blog of record.items) {
        blog["image"] = pb.getFileUrl(blog, blog["Imagen"]);
    }

    return record;

});