import mariscos from "../../../data/pescados";

export default (req, res) => {
  const { id } = req.query;
  const product = mariscos.filter((item) => item.id == id);
  if (product.length !== 0) {
    res.status(200).json(product[0]);
  } else {
    res.status(404).json({});
  }
};
