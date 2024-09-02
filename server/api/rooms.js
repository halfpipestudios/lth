import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const record = await pb.collection('Habitaciones').getFullList({
        sort: '-created',
    });

    for (let room of record) {
        room["image"] = pb.getFileUrl(room, room["Imagen"]);
    }

    return record;

});