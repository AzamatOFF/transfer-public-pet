const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Driver, {
        foreignKey: 'driverId',
      });
    }
  }
  Passenger.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      flightNumber: DataTypes.INTEGER,
      arrivalDate: DataTypes.DATE,
      destination: DataTypes.STRING,
      address: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      driverId: DataTypes.INTEGER,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Passenger',
    }
  );
  return Passenger;
};
