import shoppinglistConfig from '../helpers/axiosConfig';

function fetchShoppinglists() {
  return shoppinglistConfig
    .request({
      url: '/shoppinglists',
      method: 'GET',
    })
    .then(response => response.data);
}

function fetchShoppinglist(id) {
  return shoppinglistConfig
    .request({
      url: `shoppinglist/${id}`,
      method: 'GET',
    })
    .then(response => response.data);
}

function addShoppinglist(name) {
  return shoppinglistConfig
    .request({
      url: '/shoppinglists',
      method: 'POST',
      data: {
        name,
      },
    })
    .then(response => response.data);
}

function editShoppinglist(id, name) {
  return shoppinglistConfig
    .request({
      url: `/shoppinglist/${id}`,
      method: 'PUT',
      data: {
        name,
      },
    })
    .then(response => response.data);
}

function deleteShoppinlist(id) {
  return shoppinglistConfig
    .request({
      url: `/shoppinglist/${id}`,
      method: 'DELETE',
    })
    .then(response => response.data);
}

const bucketlistService = {
  fetchShoppinglists,
  fetchShoppinglist,
  addShoppinglist,
  editShoppinglist,
  deleteShoppinlist,
};

export default bucketlistService;
