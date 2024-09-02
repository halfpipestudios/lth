import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const animation = query.animation;

    const record = await pb.collection("Animaciones").getFullList({
        filter: `Nombre = "${animation}"`,
    });

    const anim = record[0];

    let result = {
        frames: [],
        frame_time: 0.3,
    };

    result.frame_time = record[0]["frame_time"];

    for (let frame of anim.field) {
        result.frames.push(pb.getFileUrl(record[0], frame));
    }

    return result;

});