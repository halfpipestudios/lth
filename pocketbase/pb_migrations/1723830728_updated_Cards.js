/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11ut63zg8lrjw2f")

  collection.name = "Carta_Inicio"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11ut63zg8lrjw2f")

  collection.name = "Cards"

  return dao.saveCollection(collection)
})
