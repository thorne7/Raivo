const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const BlogPost = sequelize.define('BlogPost', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  BlogPost.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
  });

module.exports = BlogPost;