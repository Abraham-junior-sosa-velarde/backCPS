import { DataTypes } from "sequelize";
import sequelize from "../database";

const MonthlyForm = sequelize.define("MonthlyForms", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  date: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  direction: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  patronalNumber: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  nit: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  enrollment: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  //1
  numberWorkers: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  dateTemplate: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  salary: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  tasa: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  price: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  disease: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  maternity: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  professionals: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  other: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  totalDiscount: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  total: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  //2
  diseaseTasa: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  diseaseBruto: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  diseaseDeduction: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  diseaseTotal: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  interestTasa: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  interestBruto: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  interestDeduction: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  interestTotal: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  finesTasa: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  finesBruto: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  finesDeduction: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  finesTotal: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  judicialTasa: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  judicialBruto: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  judicialDeduction: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  judicialTotal: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  otherTasa: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  otherDeduction: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  otherTotal: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  otherBruto: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  observation: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  settlementAmount: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  totalPage: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  difference: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  //3
  cash: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  bank: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  checkNumber: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  cashBank1: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  bank2: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  checkNumber2: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  cashBank2: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  totalCash: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  amountTotal: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
});

export default MonthlyForm;
