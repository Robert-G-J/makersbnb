'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Listings',
      'location',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }

    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Listings', 'location')
  },
};
