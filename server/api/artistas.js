import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const record = await pb.collection('Artistas').getFullList({
        sort: 'created',
    });

    for (let artist of record) {
        artist["image"] = pb.getFileUrl(artist, artist["Imagen"]);
    }

    return record;
});