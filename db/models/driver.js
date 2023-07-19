const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Passenger, {
        foreignKey: 'driverId',
      });
    }
  }
  Driver.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      car: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Driver',
    }
  );
  return Driver;
};
