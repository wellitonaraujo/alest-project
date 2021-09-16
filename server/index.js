const express = require("express");
const cors = require("cors");
app.use(express.json());
app.use(cors());

const Product = require("./config");

const app = express();

// Todos os produtos um produto
app.get("/products", async (req, res) => {

  const allProducts = await Product.get();

  const list = allProducts.doc.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(allProducts.json());
  
});

// Criar um produto
app.post("/create", async (req, res) => {
  const data = req.body;

  await Product.add({ data });

  res.send({ msg: "Produto adicionada com sucesso" });
});

// Editar um produto
app.put("/:id", async (req, res) => {
  const id = req.body.id;
  const data = req.body;

  await Product.doc(id).update(data);

  res.send({ msg: "Produto editado com sucesso" });
});

// Deletar um produto
app.delete("/:id", async (req, res) => {
  const id = req.body.id;

  await Product.doc(id).delete();

  res.send({ msg: "Produto deletado com sucesso" });
});

app.listen(3333);