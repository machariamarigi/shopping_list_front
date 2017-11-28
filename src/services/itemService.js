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

const itemService = {
  addItem,
};

export default itemService;
