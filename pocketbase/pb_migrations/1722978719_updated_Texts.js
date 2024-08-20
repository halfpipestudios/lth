/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6eeigzoe1vade8")

  collection.name = "Textos"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nbf13cxy",
    "name": "Texto",
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
  const collection = dao.findCollectionByNameOrId("i6eeigzoe1vade8")

  collection.name = "Texts"

  // remove
  collection.schema.removeField("nbf13cxy")

  return dao.saveCollection(collection)
})
