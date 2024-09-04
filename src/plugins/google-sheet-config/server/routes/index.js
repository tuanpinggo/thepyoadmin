module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/find',
    handler: 'myController.find',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'PUT',
    path: '/update',
    handler: 'myController.update',
    config: {
      policies: [],
      auth: false
    },
  },
];
