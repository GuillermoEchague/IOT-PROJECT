'use strict'

const Sequilize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('metric', {
    type: {
      type: Sequilize.STRING,
      allowNull: false
    },
    value: {
      type: Sequilize.TEXT,
      allowNull: false
    }
  })
}
