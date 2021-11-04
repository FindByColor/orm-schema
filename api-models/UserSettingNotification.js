'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserSettingNotification = sequelize.define(
    'UserSettingNotification', {
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
      email_comment_left: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        comment: 'Notification Setting for Email Comment Left'
      },
      email_comment_liked: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        comment: 'Notification Setting for Email Comment Liked'
      },
      email_someone_follows: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        comment: 'Notification Setting for Email Someone Follows'
      },
      email_mentioned_in_comment: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        comment: 'Notification Setting for Email Mentioned in Comment'
      },
      web_comment_left: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        comment: 'Notification Setting for Web Comment Left'
      },
      web_comment_liked: {
        type: DataTypes.BOOLEAN,
        unique: 'true',
        comment: 'Notification Setting for Web Comment Liked'
      },
      web_someone_follows: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        comment: 'Notification Setting for Web Someone Follows'
      },
      web_mentioned_in_comment: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        comment: 'Notification Setting for Web Mentioned in Comment'
      },
      newsletter: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        comment: 'Whether User is Subscribed to Newsletter'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'user_settings_notification',
      plural: 'user_settings_notifications',
      tableName: 'user_settings_notifications',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'User Setting Notification Model',
      indexes: [{
          name: 'idx_email_comment_left',
          fields: ['email_comment_left']
        },
        {
          name: 'idx_email_comment_liked',
          fields: ['email_comment_liked']
        },
        {
          name: 'idx_email_someone_follows',
          fields: ['email_someone_follows']
        },
        {
          name: 'idx_email_mentioned_in_comment',
          fields: ['email_mentioned_in_comment']
        },
        {
          name: 'idx_web_comment_left',
          fields: ['web_comment_left']
        },
        {
          name: 'idx_web_comment_liked',
          fields: ['web_comment_liked']
        },
        {
          name: 'idx_web_someone_follows',
          fields: ['web_someone_follows']
        },
        {
          name: 'idx_web_mentioned_in_comment',
          fields: ['web_mentioned_in_comment']
        },
        {
          name: 'idx_newsletter',
          fields: ['newsletter']
        }
      ]
    }
  );
  UserSettingNotification.associate = function(models) {
    UserSettingNotification.belongsTo(models.User, {
      foreignKey: 'user_id',
      target: 'id'
    });
  }
  return UserSettingNotification;
};
