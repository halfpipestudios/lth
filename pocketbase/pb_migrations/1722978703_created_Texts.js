/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i6eeigzoe1vade8",
    "created": "2024-08-06 21:11:43.739Z",
    "updated": "2024-08-06 21:11:43.739Z",
    "name": "Texts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ac5cigzd",
        "name": "Nombre",
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
  const collection = dao.findCollectionByNameOrId("i6eeigzoe1vade8");

  return dao.deleteCollection(collection);
})
