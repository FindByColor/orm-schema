'use strict'
module.exports = (sequelize, DataTypes) => {
  const SubscriptionPayment = sequelize.define(
    'SubscriptionPayment', {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        comment: 'Unique ID'
      },
      user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        comment: 'User ID making the payment'
      },
      subscription_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        comment: 'Subscription ID user is Subscribed to'
      },
      transaction_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: 'transaction_id',
        comment: 'Transaction ID for Payment'
      },
      payment_type: {
        type: DataTypes.ENUM,
        values: ['monthly', 'annual'],
        allowNull: false,
        defaultValue: 'monthly',
        comment: 'Type of Payment'
      },
      payment_amount: {
        type: DataTypes.DECIMAL(8, 2).UNSIGNED,
        allowNull: false,
        comment: 'Amount of Payment'
      },
      payment_date: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        comment: 'Date Payment was Received'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'subscription_payment',
      plural: 'subscription_payments',
      tableName: 'subscription_payments',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Subscription Payment Model',
      indexes: [{
        name: 'idx_payment_type',
        fields: ['payment_type']
      }]
    }
  )
  SubscriptionPayment.associate = function(models) {
    SubscriptionPayment.belongsTo(models.Subscription, {
      foreignKey: 'subscription_id',
      target: 'id'
    })
    SubscriptionPayment.belongsTo(models.User, {
      foreignKey: 'user_id',
      target: 'id'
    })
  }
  return SubscriptionPayment
}
