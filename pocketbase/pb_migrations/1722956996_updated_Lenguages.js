/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7b3vb4sx3flj996")

  // remove
  collection.schema.removeField("ia22pnws")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ujlxqaif",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ia22pnws",
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
  }))

  // remove
  collection.schema.removeField("ujlxqaif")

  return dao.saveCollection(collection)
})
