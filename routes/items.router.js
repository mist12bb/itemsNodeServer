const itemsController = require('../controllers/item.controller')

const routes = [
  {
    method: 'GET',
    url: '/api/items',
    handler: itemsController.getItems
  },
  {
    method: 'GET',
    url: '/api/items/:id',
    handler: itemsController.getOneItem
  },
  {
    method: 'POST',
    url: '/api/items',
    handler: itemsController.addItem  },
  {
    method: 'PUT',
    url: '/api/items/:id',
    handler: itemsController.updateItem
  },
  {
    method: 'DELETE',
    url: '/api/items/:id',
    handler: itemsController.delItem
  }
]

module.exports = routes