/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ytlam6752zr5d46")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ytlam6752zr5d46")

  // remove
  collection.schema.removeField("mjqolfgr")

  return dao.saveCollection(collection)
})
