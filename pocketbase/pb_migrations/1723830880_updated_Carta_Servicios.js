/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b6y7a90915iyrsi")

  collection.name = "Carta_Excursiones"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b6y7a90915iyrsi")

  collection.name = "Carta_Servicios"

  return dao.saveCollection(collection)
})
