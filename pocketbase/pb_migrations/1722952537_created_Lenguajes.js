/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "c2cah3v0myb3qlh",
    "created": "2024-08-06 13:55:37.403Z",
    "updated": "2024-08-06 13:55:37.403Z",
    "name": "Lenguajes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ryg24ecd",
        "name": "Flag",
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
  const collection = dao.findCollectionByNameOrId("c2cah3v0myb3qlh");

  return dao.deleteCollection(collection);
})
