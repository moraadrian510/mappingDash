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
    // Ask about hooks////////////////////
    // hooks: {
    //   beforeCreate: async (newCategoryData) => {
    //     newCategoryData.category_name =
    //       await newCategoryData.category_name.toLowerCase();
    //   },

    //   beforeUpdate: async (updatedCategoryData) => {
    //     updatedCategoryData.category_name =
    //       await updatedCategoryData.category_name.toLowerCase();
    //   },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
