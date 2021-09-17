const express = require("express");
const cors = require("cors");

const Product = require("./config");

const app = express();

app.use(express.json());
app.use(cors());

// Retorne todos os produtos um produto
app.get("/products", async (req, res) => {

  const allProducts = await Product.get();

  const list = allProducts.doc.map((doc) => ({ id: doc.id, ...doc.data() }));
  return res.json(list);
  
});

// Criar um produto
app.post("/products", async (req, res) => {
  const { name } = req.body;

  await Product.add({ name });

  res.json(list)
});

// Editar um produto
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const product = await Product.doc(id).update(name);

  res.json(product)
});

// Deletar um produto
app.delete("/product/:id", async (req, res) => {
  const { id } = req.params;

  const product = await Product.doc(id).delete(name);
  
  res.json(product)

});

app.listen(3333);