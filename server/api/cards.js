import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const database = query.database;
    const interval = {
        start: query.start,
        end: query.end,
    };

    const record = await pb.collection(database).getList(interval.start, interval.end, {
        sort: '-created',
    });

    for (let card of record.items) {
        card["image"] = pb.getFileUrl(card, card["Imagen"]);
    }

    return record;

});