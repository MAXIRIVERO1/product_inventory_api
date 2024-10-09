const { productPostController } = require("../controllers/productController.js");
const { productGetAllController } = require("../controllers/productController.js");
const { productGetByIdController } = require("../controllers/productController.js");
const { productUpdateController } = require("../controllers/productController.js");
const { productDeleteController } = require("../controllers/productController.js");

const productRouter = require("express").Router();


productRouter.post("/create", productPostController);
productRouter.get("/getAll", productGetAllController);
productRouter.get("/:id", productGetByIdController);
productRouter.put("/update/:id", productUpdateController);
productRouter.delete("/delete/:id", productDeleteController);




module.exports = {
    productRouter
}