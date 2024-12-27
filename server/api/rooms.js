import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const record = await pb.collection('Habitaciones').getFullList({
        sort: '-created',
    });

    for (let room of record) {
        room["image"] = pb.getFileUrl(room, room["Imagen"]);
        const room_service_images = []
        
        for(let service_id of room["Servicios"]) {
            const service = await pb.collection('Servicios').getFirstListItem(`id="${service_id}"`)
            room_service_images.push(pb.getFileUrl(service, service["Imagen"]));
        }

        room["services"] = room_service_images;
    }

    return record;

});