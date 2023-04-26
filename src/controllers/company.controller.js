import MonthlyForm from "../models/MonthlyForm";
import Regional from "../models/Regional";

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Regional.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: MonthlyForm,
        },
      ],
    });
    res.status(200).json(companies);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
