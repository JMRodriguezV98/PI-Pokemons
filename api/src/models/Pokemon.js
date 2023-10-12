const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    ID: {
      /*
      Aqui agrego el tipo de uuid, el cual segun la documentacion de sequelize
      me permite agregar de manera automatica un id, el cual se encuentra 
      compuesto por numeros y letras separados por (-) entre cada terna de
      seriales.

      tambien le asigno la propiedad primarykey y a su vez la restriccion de que no
      pueda ser null
      */
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      }
    },
    vida: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ataque:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defensa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    velocidad: {
      type: DataTypes.INTEGER
    },
    altura: {
      type: DataTypes.INTEGER
    },
    peso: {
      type: DataTypes.INTEGER
    }
  }, { 
    timestamps: false,
    freezeTableName: true 
  } );
};
