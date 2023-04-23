import User, { comparePassword, encryptPassword } from "../models/User";
import jsw from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";
export const signUp = async (req, res) => {
  const { name, lastName, email, password, state, rolId, position } = req.body;
  try {
    const newUser = await User.create({
      name,
      lastName,
      email,
      password: await encryptPassword(password),
      state,
      rolId,
      position,
    });
    const token = jsw.sign({ id: newUser.id }, config.SECRET, {
      expiresIn: 86400, //24 horas
    });
    res.status(200).json({ newUser, token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await User.findOne({
    where: { email: email },
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: [{ model: Role, attributes: ["name", "id"] }],
  });
  if (!userFound)
    return res.status(400).json({ message: "Correo electrónico incorrecto" });
  const matchPassword = await comparePassword(password, userFound.password);
  userFound.password = "";
  if (!matchPassword)
    return res.status(401).json({ message: "Contraseña incorrecta" });
  const token = jsw.sign({ id: userFound.id }, config.SECRET, {
    expiresIn: 86400, //24 horas
  });
  res.json({ user: userFound, token });
};
