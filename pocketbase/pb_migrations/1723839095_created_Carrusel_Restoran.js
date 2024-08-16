/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vujeabmodl2eeyr",
    "created": "2024-08-16 20:11:35.924Z",
    "updated": "2024-08-16 20:11:35.924Z",
    "name": "Carrusel_Restoran",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zdwgh6fb",
        "name": "Imagen",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vujeabmodl2eeyr");

  return dao.deleteCollection(collection);
})
