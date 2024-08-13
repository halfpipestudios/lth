import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {
    const interval = useState("card_interval");
    const result = await pb.collection('Cards').getList(interval.start, interval.end);
    return result;
});