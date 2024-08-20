/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kgq5egbamwzlacl",
    "created": "2024-08-06 21:09:30.977Z",
    "updated": "2024-08-06 21:09:30.977Z",
    "name": "Lenguajes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "km3jrrhy",
        "name": "Tag",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "w0z5bwqo",
        "name": "Flag",
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
  const collection = dao.findCollectionByNameOrId("kgq5egbamwzlacl");

  return dao.deleteCollection(collection);
})
