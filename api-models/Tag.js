'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag', {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        comment: 'Unique ID'
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: 'name',
        comment: 'Tag Name'
      },
      slug: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        comment: 'Generated Slug'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'tag',
      plural: 'tags',
      tableName: 'tags',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Tag Model'
    }
  );
  return Tag;
};
