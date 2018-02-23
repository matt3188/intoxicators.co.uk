module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem(
      'product',
      JSON.stringify([
        {
          id: '0011001',
          name: 'Scotch.io Signature Lager',
          image: 'head.png',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor dui sit amet malesuada facilisis. Mauris lacinia eros neque, volutpat venenatis urna mollis sit amet. Mauris aliquet dui et finibus consequat. Suspendisse consectetur et purus et semper. Fusce volutpat laoreet aliquet. Curabitur ante enim, lobortis sit amet sollicitudin in, condimentum aliquam justo.',
          variants: [
            {
              sku: '123123',
              type: '40oz Bottle',
              price: 4.99,
              inventory: 1,
            },
            {
              sku: '123124',
              type: '6 Pack',
              price: 12.99,
              inventory: 5,
            },
            {
              sku: '1231235',
              type: '30 Pack',
              price: 19.99,
              inventory: 3,
            },
          ],
        },
      ])
    );
  },
};
