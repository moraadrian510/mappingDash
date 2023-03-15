const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newCategoryData) => {
        newCategoryData.categoryName =
          await newCategoryData.categoryName.toLowerCase();
      },

      beforeUpdate: async (updatedCategoryData) => {
        updatedCategoryData.categoryName =
          await updatedCategoryData.categoryName.toLowerCase();
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
