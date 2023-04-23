import Role from "../models/Role";
import User from "../models/User";
//Crear roles por defecto al iniciar app

export const createRoles = async () => {
  try {
    const count = await Role.findAll();
    if (count.length > 0) return;
    const values = await Promise.all([
      Role.create({ name: "Administrador" }),
      Role.create({ name: "Operador" }),
      Role.create({ name: "Invitado" }),
    ]);
  } catch (error) {
    console.log(error);
  }
};
