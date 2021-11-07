'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        comment: 'Unique ID'
      },
      activated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Whether Account is Activated'
      },
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: 'username',
        comment: 'Unique Username'
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'Hash Encoded Password'
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: 'email',
        comment: 'Unique Email Address'
      },
      first_name: {
        type: DataTypes.STRING(50),
        comment: 'Users First Name'
      },
      last_name: {
        type: DataTypes.STRING(50),
        comment: 'Users Last Name'
      },
      company_name: {
        type: DataTypes.STRING(100),
        comment: 'Company Name'
      },
      profile_name: {
        type: DataTypes.STRING(100),
        comment: ' Profile / Display Name of User'
      },
      profile_photo: {
        type: DataTypes.STRING(255),
        comment: 'Absolute URL of Profile Photo'
      },
      location: {
        type: DataTypes.STRING(50),
        comment: 'Users Provided Location'
      },
      profile_link_website: {
        type: DataTypes.STRING(100),
        comment: 'Profile Link Website'
      },
      profile_link_twitter: {
        type: DataTypes.STRING(100),
        comment: 'Profile Link Twitter'
      },
      profile_link_1: {
        type: DataTypes.STRING(100),
        comment: 'Misc Profile Link #1'
      },
      profile_link_2: {
        type: DataTypes.STRING(100),
        comment: 'Misc Profile Link #2'
      },
      profile_link_3: {
        type: DataTypes.STRING(100),
        comment: 'Misc Profile Link #3'
      },
      bio: {
        type: DataTypes.STRING(255),
        comment: 'Users Bio'
      },
      banned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: ' Whether the Account is Banned'
      },
      banned_reason: {
        type: DataTypes.TEXT,
        comment: 'Reason the Account was Banned'
      },
      new_password: {
        type: DataTypes.STRING(100),
        comment: 'Store New Password while Password Change is in Progress'
      },
      new_password_key: {
        type: DataTypes.STRING(25),
        unique: 'new_password_key',
        comment: 'Confirmation Link for User to Confirm Password Change'
      },
      new_password_requested: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        comment: 'Date & Time Password Change was Requested'
      },
      new_email: {
        type: DataTypes.STRING(100),
        unique: 'new_email',
        comment: 'Store New Email while Email Change is in Progress'
      },
      new_email_key: {
        type: DataTypes.STRING(25),
        unique: 'new_email_key',
        comment: 'Confirmation Link for User to Confirm Email Change'
      },
      new_email_requested: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        comment: 'Date & Time Email Change was Requested'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'user',
      plural: 'users',
      tableName: 'users',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'User Model',
      indexes: [{
          name: 'idx_activated',
          fields: ['activated']
        },
        {
          name: 'idx_banned',
          fields: ['banned']
        }
      ]
    }
  )
  User.associate = function(models) {
    User.hasOne(models.UserFollow, {
      foreignKey: 'follow_user_id',
      target: 'id'
    })
    User.hasOne(models.UserInvite, {
      foreignKey: 'new_user_id',
      target: 'id'
    })
  }
  return User
}
