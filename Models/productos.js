import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/database.js';

const Producto = sequelize.define('productos', {
  // Model attributes are defined here
    idProducto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    detalle: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    
},
{
    timestamps:false,
}
);

export {
    Producto
}

// `sequelize.define` also returns the model
// console.log(Producto === sequelize.models.producto); // true

