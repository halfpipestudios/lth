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
        card["image"] = `http://154.38.163.72:8090/api/files/${image["Imagen"]}`;
    }

    return record;

});