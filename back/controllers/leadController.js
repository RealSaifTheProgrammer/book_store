import Lead from "../models/leadModel.js";

export const createLead = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Email and name are required" });
    }

    const lead = await Lead.create({ name, email });

    res.status(201).json({
      message: "Lead saved successfully",
      data: lead,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "البريد الألكتروني مسجل بالفعل" });
    }

    res.status(500).json({ message: "Server error" });
  }
};
