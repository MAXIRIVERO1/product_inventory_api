const { productPostHandler } = require("../handlers/productHandler.js");
const { productGetAllHandler } = require("../handlers/productHandler.js");
const { productGetByIdHandler } = require("../handlers/productHandler.js");
const { productUpdateHandler } = require("../handlers/productHandler.js");
const { productDeleteHandler } = require("../handlers/productHandler.js");



const productPostController = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const created = await productPostHandler({ name, description, price, stock });
        return res.status(200).json(created);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const productGetAllController = async (req, res) => {
    try {
        const found = await productGetAllHandler();
        return res.status(200).json(found);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const productGetByIdController = async(req, res) => {
    try {
        const { id } = req.params;
        const found = await productGetByIdHandler(id);
        return res.status(200).json(found);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const productUpdateController = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, stock } = req.body;
        const updated = await productUpdateHandler(id, name, description, price, stock);
        return res.status(200).json(updated);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const productDeleteController = async(req, res) => {
    try {
        const { id } = req.params;
        const response = await productDeleteHandler(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

module.exports = {
    productPostController,
    productGetAllController,
    productGetByIdController,
    productUpdateController,
    productDeleteController
};