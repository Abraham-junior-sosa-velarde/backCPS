import app from "./app";
import sequelize from "./database";
import Regional from "./models/Regional";
//models
import Role from "./models/Role";
import User from "./models/User";
import Company from "./models/company";

const main = async () => {
  try {
    await sequelize.sync({ alter: true });
    app.listen(process.env.PORT || 4000);
    console.log("server listen on port ", process.env.PORT || 4000);
  } catch (error) {
    console.log("no se pudo conectar con la base de datos");
  }
};

main();
