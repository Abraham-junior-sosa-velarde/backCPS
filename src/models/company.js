import { DataTypes } from "sequelize";
import sequelize from "../database";
import MonthlyForm from "./MonthlyForm";

const Company = sequelize.define("companies", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING(45),
    unique: true,
    allowNull: false,
  },
});
//relacion uno a muchos
Company.hasMany(MonthlyForm, {
  foreignKey: "regionalId",
  sourceKey: "id",
  allowNull: true,
});
//relacion uno a muchos (inversa)
MonthlyForm.belongsTo(Company, {
  foreignKey: "regionalId",
  targetKey: "id", // Corrección: Usar targetKey en lugar de targetId
  allowNull: true,
});
export default Company;
