/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ytlam6752zr5d46")

  // remove
  collection.schema.removeField("hhytdmbo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9opempr5",
    "name": "Flag",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7b3vb4sx3flj996",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ytlam6752zr5d46")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hhytdmbo",
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

  // remove
  collection.schema.removeField("9opempr5")

  return dao.saveCollection(collection)
})
