/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11ut63zg8lrjw2f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nbn05mvd",
    "name": "Categoria",
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
  const collection = dao.findCollectionByNameOrId("11ut63zg8lrjw2f")

  // remove
  collection.schema.removeField("nbn05mvd")

  return dao.saveCollection(collection)
})
