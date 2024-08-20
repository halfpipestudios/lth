/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ytlam6752zr5d46");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ytlam6752zr5d46",
    "created": "2024-08-06 13:58:08.474Z",
    "updated": "2024-08-06 15:27:21.335Z",
    "name": "Header",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vomwbe5q",
        "name": "Lenguage",
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
        "id": "ki5ovtvj",
        "name": "Name",
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
        "id": "mjqolfgr",
        "name": "Text",
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
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
