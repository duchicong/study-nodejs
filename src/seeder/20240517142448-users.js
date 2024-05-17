'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: 'admin123',
        fistName: 'Du',
        lastName: 'Cong',
        address: 'Ha noi',
        gender: 1,
        phoneNumber: '0904123456',
        image: '',
        roleId: 'R1',
        positionId: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
