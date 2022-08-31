'use strict'

const Sequilize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupAgentModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('agent', {
    uuid: {
      type: Sequilize.STRING,
      allowNull: false
    },
    username: {
      type: Sequilize.STRING,
      allowNull: false
    },
    name: {
      type: Sequilize.STRING,
      allowNull: false
    },
    hostname: {
      type: Sequilize.STRING,
      allowNull: false
    },
    pid: {
      type: Sequilize.INTEGER,
      allowNull: false
    },
    connected: {
      type: Sequilize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
