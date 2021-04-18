import pescados from "../../../data/pescados";

export default (req, res) => {
  res.status(200).json(pescados);
};
