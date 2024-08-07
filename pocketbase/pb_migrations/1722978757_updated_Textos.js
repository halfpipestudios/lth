/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6eeigzoe1vade8")

  // remove
  collection.schema.removeField("nbf13cxy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ciwvbi7g",
    "name": "ESP",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "42gg45p1",
    "name": "ENG",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zmx2wloe",
    "name": "PTG",
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

  // remove
  collection.schema.removeField("ciwvbi7g")

  // remove
  collection.schema.removeField("42gg45p1")

  // remove
  collection.schema.removeField("zmx2wloe")

  return dao.saveCollection(collection)
})
