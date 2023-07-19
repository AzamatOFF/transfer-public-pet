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
    // const pass = [];
    // Array.from({ length: 10 }).forEach(() => {
    //   pass.push({
    //     name: faker.name.firstName(),
    //     phone: faker.phone.number('+7 ### ### ## ##'),
    //     flightNumber: Math.round(Math.random() * 100),
    //     arrivalDate: faker.date.past(),
    //     destination: faker.address.city(),
    //     address:
    //     // driverId: Math.round(Math.random() * 10),
    //   });
    // });
    await queryInterface.bulkInsert(
      'Passengers',
      [
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'Отель КОРОНА Архыз',
          address: 'ул. Мира, 5д, Архыз, Карачаево-Черкесская Республика',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'Отель Кураж',
          address: 'ул. Аланская, 1, Домбай, Карачаево-Черкесская Республика',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'FLORA boutique-hotel',
          address: 'ул. Ленина, 51, Архыз, Карачаево-Черкесская Республика',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'Речной бриз',
          address: 'ул. Хубиева, 1а, Архыз, Карачаево-Черкесская Республика',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'Отель ТАУРУХ',
          address:
            'ул. Тебердинская, 8, Домбай, Карачаево-Черкесская Республика',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'Бизнес отель МАСК',
          address: 'ул. Гагарина, 213а, Иноземцево, Ставропольский край',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'Вилла Айла',
          address: 'Молодежная ул., 4, Новотерский, Ставропольский край',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'СПА Отель " Рафаэль"',
          address: 'ул. Ленина, 8А, Железноводск, Ставропольский край,',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'Бизнес-отель Бештау',
          address: '1-я Бульварная ул., 17, Пятигорск, Ставропольский край',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'Отель "Кавказ"',
          address: 'ул. Хубиева, 3а, Архыз, Карачаево-Черкесская Республика',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'Турбаза "Алания"',
          address: 'ул. Ленина, 2, Архыз, Карачаево-Черкесская Республика',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'Отель Kulrashe',
          address: 'ул. Банковская, Архыз, Карачаево-Черкесская Республика',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
        {
          name: faker.name.firstName(),
          phone: faker.phone.number('+7 ### ### ## ##'),
          flightNumber: Math.round(Math.random() * 100),
          arrivalDate: faker.date.past(),
          destination: 'Домбай Вершина',
          address:
            'ул. Карачаевская, 60, Домбай, Карачаево-Черкесская Республика',
          cost: Math.round(1000 - 0.5 + Math.random() * (3000 - 1000 + 1)),
          completed: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Passengers', null, {});
  },
};
