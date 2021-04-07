import mariscos from "../../../data/mariscos";

export default (req, res) => {
  res.status(200).json(mariscos);
};
