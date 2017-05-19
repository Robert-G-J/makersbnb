'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Listings',
      'booking_date',
      {
        type: Sequelize.DATEONLY,
        allowNull: true,
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Listings', 'booking_date')
  }
};
