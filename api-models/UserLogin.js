'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLogin = sequelize.define(
    'UserLogin', {
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
        comment: 'Unique User ID'
      },
      user_agent: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: 'Browsers User Agent'
      },
      ip_address: {
        type: DataTypes.STRING(15),
        comment: 'IP Address'
      },
      country: {
        type: DataTypes.STRING(2),
        comment: 'Geolocation Country'
      },
      city: {
        type: DataTypes.STRING(50),
        comment: 'Geolocation City'
      },
      state: {
        type: DataTypes.STRING(50),
        comment: 'Geolocation State'
      },
      postal_code: {
        type: DataTypes.STRING(15),
        comment: 'Geolocation Postal Code'
      },
      latitude: {
        type: DataTypes.DECIMAL(10, 6),
        comment: 'Geolocation Latitude'
      },
      longitude: {
        type: DataTypes.DECIMAL(10, 6),
        comment: 'Geolocation Longitude'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'user_login',
      plural: 'user_logins',
      tableName: 'user_login',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'User Login Model'
    }
  );
  UserLogin.associate = function(models) {
    UserLogin.belongsTo(models.User, {
      foreignKey: 'user_id',
      target: 'id'
    });
  }
  return UserLogin;
};
