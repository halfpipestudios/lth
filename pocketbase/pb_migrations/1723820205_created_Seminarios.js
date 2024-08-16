/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "suctyyugn4bneok",
    "created": "2024-08-16 14:56:45.348Z",
    "updated": "2024-08-16 14:56:45.348Z",
    "name": "Seminarios",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bdxyfjr8",
        "name": "Nombre_es",
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
        "id": "6ogmmlfo",
        "name": "Nombre_en",
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
        "id": "i0wojcbt",
        "name": "Nombre_pt",
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
  const collection = dao.findCollectionByNameOrId("suctyyugn4bneok");

  return dao.deleteCollection(collection);
})
