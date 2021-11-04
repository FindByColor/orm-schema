'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define(
    'Subscription', {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        comment: 'Unique ID'
      },
      subscription_type_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        comment: 'Unique ID'
      },
      user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        comment: 'Unique ID'
      },
      stripe_customer_id: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: 'stripe_customer_id',
        comment: 'ID Issued by Stripe'
      },
      stripe_payment_source_id: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: 'stripe_payment_source_id',
        comment: 'Stripe Payment Source ID'
      },
      type: {
        type: DataTypes.ENUM,
        values: ['monthly', 'annual'],
        allowNull: false,
        defaultValue: 'monthly',
        comment: 'Type of Subscription'
      },
      status: {
        type: DataTypes.ENUM,
        values: ['active', 'cancelled', 'suspended'],
        allowNull: false,
        defaultValue: 'active',
        comment: 'Status of Subscription'
      },
      suspended_date: {
        type: DataTypes.DATE,
        comment: 'Date Subscription was Suspended'
      },
      suspended_reason: {
        type: DataTypes.TEXT,
        comment: 'Reason Subscription was Suspended'
      },
      valid_until: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'Subscription Paid Up Until'
      },
      last_payment: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'When Last Payment was Received'
      },
      auto_renew: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: 'Whether or not Auto Renew should be enabled'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'subscription',
      plural: 'subscriptions',
      tableName: 'subscriptions',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Subscription Model',
      indexes: [{
          name: 'idx_type',
          fields: ['type']
        },
        {
          name: 'idx_auto_renew',
          fields: ['auto_renew']
        },
        {
          name: 'idx_status',
          fields: ['status']
        },
        {
          name: 'idx_subscription_type_id',
          fields: ['subscription_type_id']
        }
      ]
    }
  );
  Subscription.associate = function(models) {
    Subscription.belongsTo(models.User, {
      foreignKey: 'user_id',
      target: 'id'
    });
    Subscription.belongsTo(models.SubscriptionType, {
      foreignKey: 'subscription_type_id',
      target: 'id'
    });
  }
  return Subscription;
};
