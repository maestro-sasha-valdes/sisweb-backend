"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          user_id: 1,
          number: "O-O234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          number: "O-0134",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          number: "O-3456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          number: "O-2256",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
