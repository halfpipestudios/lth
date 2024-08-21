import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const database = query.database;

    const record = await pb.collection(database).getList(1, 50, {
        sort: '-created',
    });

    let result = [];
    for (const image of record.items) {
        result.push({ image: `http://154.38.163.72:8090/api/files/${image["Imagen"]}` });
    }
    return result;

});