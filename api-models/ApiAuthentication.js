'use strict';
module.exports = (sequelize, DataTypes) => {
  const ApiAuthentication = sequelize.define(
    'ApiAuthentication', {
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
      approved_whitelist: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'localhost',
        comment: 'Comma Separated list of Domains'
      },
      api_key: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: 'api_key',
        comment: 'UUID based API Key'
      },
      api_secret: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: 'api_secret',
        comment: 'UUID based API Security Key'
      },
      allow_api_get: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: 'Whether to Allow API Key User access to HTTP GET Method'
      },
      allow_api_post: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Whether to Allow API Key User access to HTTP POST Method'
      },
      allow_api_put: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Whether to Allow API Key User access to HTTP PUT Method'
      },
      allow_api_delete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Whether to Allow API Key User access to HTTP DELETE Method'
      },
      allow_content_management: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Whether to Allow API Key User to Managing Content ( possibly helpful for CMS related APIs )'
      },
      allow_user_registration: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Whether to Allow API Key User to Create Users'
      },
      app_name: {
        type: DataTypes.STRING(128),
        allowNull: false,
        comment: 'Marketing Name of App using for our API'
      },
      app_type: {
        type: DataTypes.ENUM,
        values: ['web_app', 'mobile_app', 'os_app', 'tv_app', 'custom_app', 'developer'],
        allowNull: false,
        defaultValue: 'developer',
        comment: 'Type of Application using the API'
      },
      app_purpose: {
        type: DataTypes.TEXT,
        comment: 'Developers Purpose of App using for our API'
      },
      app_description: {
        type: DataTypes.TEXT,
        comment: 'Marketing Description of App using for our API'
      },
      daily_limit: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 2500,
        comment: 'Maximum Number of API calls in 24 hours ( 0 = unlimited )'
      },
      status: {
        type: DataTypes.ENUM,
        values: ['pending_approval', 'approved', 'rejected', 'developer_terminated', 'deleted'],
        allowNull: false,
        defaultValue: 'pending_approval',
        comment: 'Approval Status of API Key'
      },
      expire_date: {
        type: DataTypes.DATEONLY,
        comment: 'Date when the API Key will Expire'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'api_authentication',
      plural: 'api_authentications',
      tableName: 'api_authentication',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Api Authentication Model',
      indexes: [{
          name: 'idx_allow_api_get',
          fields: ['allow_api_get']
        },
        {
          name: 'idx_allow_api_post',
          fields: ['allow_api_post']
        },
        {
          name: 'idx_allow_api_put',
          fields: ['allow_api_put']
        },
        {
          name: 'idx_allow_api_delete',
          fields: ['allow_api_delete']
        },
        {
          name: 'idx_allow_content_management',
          fields: ['allow_content_management']
        },
        {
          name: 'idx_allow_user_registration',
          fields: ['allow_user_registration']
        },
        {
          name: 'idx_status',
          fields: ['status']
        },
        {
          name: 'idx_app_type',
          fields: ['app_type']
        }
      ]
    }
  );
  ApiAuthentication.associate = function(models) {
    ApiAuthentication.belongsTo(models.User, {
      foreignKey: 'user_id',
      target: 'id'
    });
  }
  return ApiAuthentication;
};
