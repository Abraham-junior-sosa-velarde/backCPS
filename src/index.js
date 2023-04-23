import app from "./app";
import sequelize from "./database";
//models
import Role from "./models/Role";
import User from "./models/User";

const main = async () => {
  try {
    await sequelize.sync(/*{ force: true }*/);
    app.listen(process.env.PORT || 4000);
    console.log("server listen on port ", process.env.PORT || 4000);
  } catch (error) {
    console.log("no se pudo conectar con la base de datos");
  }
};

main();
