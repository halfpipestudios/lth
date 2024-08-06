import pb from "../utils/pocketbase"

export default defineEventHandler(async (event) => {
    
    const texts = await pb.collection('Header').getFullList({
        filter: `Lenguage = "ENG"`
    }); 
    
    const payload = {};

    for(const text of texts) {
        payload[text.Name] = text.Text;
    }

    return payload;
});