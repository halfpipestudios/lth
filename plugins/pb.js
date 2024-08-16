import PocketBase from 'pocketbase';

export default defineNuxtPlugin((nuxtApp) => {

  const language = useState("language");
  const pb = new PocketBase('http://127.0.0.1:8090');
  pb.autoCancellation(false);

  function translate(cards) {
    for (let card of cards) {
      card["title"] = card["Nombre_" + language.value];
      card["text"] = card["Texto_" + language.value];
      card["image"] = pb.getFileUrl(card, card["Imagen"]);
    }
    return cards;
  }

  pb.get_images_carrousel_servicios = async (carrousel) => {
    const record = await pb.collection(carrousel).getList(1, 50);
    let result = [];
    for (const image of record.items) {
      result.push({ image: pb.getFileUrl(image, image["Imagen"]) });
    }
    return result;
  };

  pb.get_cards_for_tattoo = async (interval) => {
    const record = await pb.collection('Seminarios').getList(interval.start, interval.end);
    const result = translate(record.items);
    return result;
  };

  pb.get_cards_for_slider = async (database, interval) => {
    const record = await pb.collection(database).getList(interval.start, interval.end);
    const result = translate(record.items);
    return result;
  };

  return {
    provide: {
      pb
    },
  };
});
