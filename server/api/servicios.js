import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const record = await pb.collection('Servicios').getFullList({
        sort: 'created',
    });

    for (let service of record) {
        service["image"] = pb.getFileUrl(service, service["Imagen"]);
    }

    return record;
});