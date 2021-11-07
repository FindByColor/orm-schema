'use strict'
module.exports = (sequelize, DataTypes) => {
  const SubscriptionType = sequelize.define(
    'SubscriptionType', {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        comment: 'Unique ID'
      },
      status: {
        type: DataTypes.ENUM,
        values: ['enabled', 'disabled'],
        allowNull: false,
        defaultValue: 'disabled',
        comment: 'Status or Subscription'
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: 'name',
        comment: 'Name of the Subscription'
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: 'Description of the Subscription'
      },
      monthly_rate: {
        type: DataTypes.DECIMAL(8, 2).UNSIGNED,
        allowNull: false,
        comment: 'Monthly Rate of the Subscription'
      },
      annual_rate: {
        type: DataTypes.DECIMAL(8, 2).UNSIGNED,
        allowNull: false,
        comment: 'Annual Rate of the Subscription'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'subscription_type',
      plural: 'subscription_types',
      tableName: 'subscription_types',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Subscription Type Model',
      indexes: [{
        name: 'idx_status',
        fields: ['status']
      }]
    }
  )
  return SubscriptionType
}
