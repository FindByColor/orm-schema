'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED(10),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        comment: 'Unique ID'
      },
      parent_id: {
        type: DataTypes.INTEGER.UNSIGNED(10),
        comment: 'Unique ID of Parent Category'
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'Name of Category'
      },
      slug: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'Generated Slug'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'category',
      plural: 'categories',
      tableName: 'categories',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Category Model',
      indexes: [{
        name: 'idx_unique',
        fields: ['parent_id', 'slug']
      }]
    }
  );
  return Category;
};
