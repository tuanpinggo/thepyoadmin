module.exports = [
  {
    method: 'GET',
    path: '/get',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'PUT',
    path: '/update',
    handler: 'myController.update',
    config: {
      policies: [],
    },
  },
];
