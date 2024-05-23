'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('AllCode', [
      {
        type: 'ROLE',
        key: 'R1',
        value: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'ROLE',
        key: 'R2',
        value: 'doctor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'ROLE',
        key: 'R3',
        value: 'patient',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'STATUS',
        key: 'S1',
        value: 'new',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'STATUS',
        key: 'S2',
        value: 'confirmed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'STATUS',
        key: 'S3',
        value: 'done',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'STATUS',
        key: 'S4',
        value: 'cancel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'TIME',
        key: 'T1',
        value: '8:00 AM - 9:00 AM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'TIME',
        key: 'T2',
        value: '9:00 AM - 10:00 AM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'TIME',
        key: 'T3',
        value: '10:00 AM - 11:00 AM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'TIME',
        key: 'T4',
        value: '11:00 AM - 0:00 PM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'TIME',
        key: 'T5',
        value: '1:00 PM - 2:00 PM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'TIME',
        key: 'T6',
        value: '2:00 PM - 3:00 PM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'TIME',
        key: 'T7',
        value: '3:00 PM - 4:00 PM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'TIME',
        key: 'T8',
        value: '4:00 PM - 5:00 PM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'POSITION',
        key: 'P0',
        value: 'none',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'POSITION',
        key: 'P1',
        value: 'master',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'POSITION',
        key: 'P2',
        value: 'doctor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'POSITION',
        key: 'P3',
        value: 'associate_professor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'POSITION',
        key: 'P4',
        value: 'professor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'GENDER',
        key: 'M',
        value: 'male',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'GENDER',
        key: 'F',
        value: 'female',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'GENDER',
        key: 'O',
        value: 'Other',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('AllCode', null, {});
  }
};
