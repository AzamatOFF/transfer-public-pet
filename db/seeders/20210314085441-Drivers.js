/** @type {import('sequelize-cli').Migration} */
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // const drv = [];
    // Array.from({ length: 3 }).forEach(() => {
    //   drv.push({
    //     name: faker.name.firstName(),
    //     password: '1',
    //     phone: faker.phone.number('+7 ### ### ## ##'),
    //     car: faker.vehicle.vehicle(),
    //   });
    // });
    // await queryInterface.bulkInsert('Drivers', drv, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('Drivers', null, {});
  },
};
