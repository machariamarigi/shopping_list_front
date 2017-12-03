import itemConfig from '../helpers/axiosConfig';

function addItem(id, name, quantity) {
  return itemConfig
    .request({
      url: `shoppinglist/${id}/items`,
      method: 'POST',
      data: {
        name,
        quantity,
      },
    })
    .then(response => response.data);
}

function fetchItems(id) {
  return itemConfig
    .request({
      url: `shoppinglist/${id}/items`,
      method: 'GET',
    })
    .then(response => response.data);
}

function fetchItem(shId, itId) {
  return itemConfig
    .request({
      url: `/shoppinglist/${shId}/item/${itId}`,
      method: 'GET',
    })
    .then(response => response.data);
}

function buyItem(shId, itId) {
  return itemConfig
    .request({
      url: `/shoppinglist/${shId}/item/${itId}`,
      method: 'PATCH',
    })
    .then(response => response.data);
}

function editItem(shId, itId, name, quantity) {
  return itemConfig
    .request({
      url: `/shoppinglist/${shId}/item/${itId}`,
      method: 'PUT',
      data: {
        name,
        quantity,
      },
    })
    .then(response => response.data);
}

function deleteItem(shId, itId) {
  return itemConfig
    .request({
      url: `/shoppinglist/${shId}/item/${itId}`,
      method: 'DELETE',
    })
    .then(response => response.data);
}

const itemService = {
  addItem,
  fetchItems,
  fetchItem,
  buyItem,
  editItem,
  deleteItem,
};

export default itemService;
