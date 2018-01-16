// Module contains values to bew used in tests

export const testUser = {
  username: 'Test User',
  password: 'test1234',
  email: 'test@user.com',
};

export const testShoppinglist = {
  uuid: 1,
  name: 'Test Shoppinglist',
};

export const testShoppinglists = {
  1: { uuid: 1, name: 'Test Shoppinglist' },
  2: { uuid: 2, name: 'Test Shoppinglist2' },
  3: { uuid: 3, name: 'Test Shoppinglist3' },
};

export const testShoppinglistsArray = [
  { uuid: 1, name: 'Test Shoppinglist' },
  { uuid: 2, name: 'Test Shoppinglist2' },
  { uuid: 3, name: 'Test Shoppinglist3' },
];

export const testItem = {
  uuid: 1,
  name: 'Test Item',
  quantity: 3,
  bought: true,
};

export const testItems = {
  1: {
    uuid: 1,
    name: 'Test Item',
    quantity: 3,
    bought: true,
  },
  2: {
    uuid: 2,
    name: 'Test Item2',
    quantity: 43,
    bought: false,
  },
  3: {
    uuid: 3,
    name: 'Test Item3',
    quantity: 800,
    bought: false,
  },
};

export const testDeletedItem = {
  2: {
    uuid: 2,
    name: 'Test Item2',
    quantity: 43,
    bought: false,
  },
  3: {
    uuid: 3,
    name: 'Test Item3',
    quantity: 800,
    bought: false,
  },
};

export const testItemsArray = [
  {
    uuid: 1,
    name: 'Test Item',
    quantity: 3,
    bought: true,
  },
  {
    uuid: 2,
    name: 'Test Item2',
    quantity: 43,
    bought: false,
  },
  {
    uuid: 3,
    name: 'Test Item3',
    quantity: 800,
    bought: false,
  },
];
