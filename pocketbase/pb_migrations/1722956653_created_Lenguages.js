/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7b3vb4sx3flj996",
    "created": "2024-08-06 15:04:13.149Z",
    "updated": "2024-08-06 15:04:13.149Z",
    "name": "Lenguages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "diokqpih",
        "name": "FLAG",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("7b3vb4sx3flj996");

  return dao.deleteCollection(collection);
})
