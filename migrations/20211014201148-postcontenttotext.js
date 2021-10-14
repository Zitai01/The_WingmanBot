'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('posts', 'content', {
        type: Sequelize.TEXT
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('posts', 'content', {
        type: Sequelize.STRING
      })
    ])
  }
}
