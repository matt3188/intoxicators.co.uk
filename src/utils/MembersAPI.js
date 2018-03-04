module.exports = {
  init: function() {
    localStorage.clear();
    localStorage.setItem(
      'members',
      JSON.stringify([
        {
          id: 'simon_king',
          name: 'Simon King',
          vehicle: '1957 Buick super with the 364ci nailhead v8',
          image: '/images/slider-01.jpg',
        },
        {
          id: 'mark_jaggers',
          name: 'Mark Jaggers',
          vehicle: '1981 camaro with the 350ci small block Chevy',
          image: '/images/slider-01.jpg',
        },
        {
          id: 'ron_greenslade',
          name: 'Ron Greenslade',
          vehicle: '1950 Plymouth custom with a 318ci v8',
          image: '/images/slider-01.jpg',
        },
        {
          id: 'dave',
          name: 'Dave',
          vehicle: '1950 Chevy 3100 with the straight 6',
          image: '/images/slider-01.jpg',
        },
      ])
    );
  },
};

// export default class membersList {
//   static getMembersData() {
//     const members = window.localStorage.getItem('members');
//     return members ? JSON.parse(window.localStorage.members) : {};
//   }
// }
