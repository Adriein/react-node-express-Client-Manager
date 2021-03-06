const Sequelize = require("sequelize");
const dbConnection = require("../database");
const Users_type = require("./Users_type");


const User = dbConnection.define("registered_users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  sex: {
    type: Sequelize.TINYINT
  },
  user_status: {
    type: Sequelize.TINYINT
  }
}, {
  freezeTableName: true,
  timestamps: false
});

User.belongsTo(Users_type, {foreignKey: 'rol', sourceKey: 'id'});

module.exports = User;
