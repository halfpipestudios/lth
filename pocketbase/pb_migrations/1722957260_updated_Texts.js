/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ytlam6752zr5d46")

  collection.name = "Header"

  // remove
  collection.schema.removeField("jutaxk58")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ytlam6752zr5d46")

  collection.name = "Texts"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jutaxk58",
    "name": "Type",
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
