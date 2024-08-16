/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1lpw196kybos34d",
    "created": "2024-08-16 18:29:29.583Z",
    "updated": "2024-08-16 18:29:29.583Z",
    "name": "Carrusel_Servicios",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bytpxs3d",
        "name": "Image",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1lpw196kybos34d");

  return dao.deleteCollection(collection);
})
