/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "r32w6xyuv2ggnbk",
    "created": "2024-08-16 20:04:56.686Z",
    "updated": "2024-08-16 20:04:56.686Z",
    "name": "Carrusel_Excursiones",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ou4ncaau",
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
  const collection = dao.findCollectionByNameOrId("r32w6xyuv2ggnbk");

  return dao.deleteCollection(collection);
})
