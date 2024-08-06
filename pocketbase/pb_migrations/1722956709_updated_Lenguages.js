/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7b3vb4sx3flj996")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "diokqpih",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7b3vb4sx3flj996")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
