'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Users', [{
       name: 'John Doe',
       phone: '+526622344556',
       email:'jonh.doe@company.com',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
      name: 'Mary Jane',
      phone: '+526622342556',
      email:'mary.jane@company.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Dawn Brown',
      phone: '+526622224556',
      email:'Dawn.Brown@company.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
