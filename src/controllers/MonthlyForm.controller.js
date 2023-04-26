import MonthlyForm from "../models/MonthlyForm";
import Regional from "../models/Regional";
import Company from "../models/company";

export const getMonthlyForm = async (req, res) => {
  try {
    const branches = await MonthlyForm.findAll({
      include: [
        {
          model: Company, // Nombre del modelo de la relación
          // Puedes especificar atributos o excluir atributos de Company que deseas incluir o excluir en los resultados
          attributes: ["id", "name"],
        },
        {
          model: Regional, // Nombre del modelo de la relación
          // Puedes especificar atributos o excluir atributos de Regional que deseas incluir o excluir en los resultados
          attributes: ["id", "name"],
        },
      ],
    });
    const companiasPorRegional = {};

    // Iterar sobre los datos
    for (let i = 0; i < branches.length; i++) {
      const registro = branches[i];
      const regional = registro.regional.name;
      const company = registro.company.name;

      // Verificar si la región ya está en el objeto de compañías por regional, si no, crear un arreglo vacío
      if (!companiasPorRegional[regional]) {
        companiasPorRegional[regional] = [];
      }

      // Verificar si la compañía ya está en el arreglo de compañías para la región actual
      const index = companiasPorRegional[regional].findIndex(
        (item) => item[company]
      );

      // Si la compañía ya existe en el arreglo, aumentar el contador, si no, agregarla con un contador de 1
      if (index !== -1) {
        const key = Object.keys(companiasPorRegional[regional][index])[0];
        companiasPorRegional[regional][index][key]++;
      } else {
        const obj = {};
        obj[company] = 1;
        companiasPorRegional[regional].push(obj);
      }
    }

    res.status(200).json(branches);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createMonthlyForm = async (req, res) => {
  const requestBody = req.body;
  for (const key in requestBody) {
    // Verificar si el valor de la propiedad es una cadena vacía
    if (requestBody[key] === "") {
      // Establecer el valor de la propiedad como null
      requestBody[key] = null;
    }
  }
  try {
    const data = await MonthlyForm.create(requestBody);

    res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
