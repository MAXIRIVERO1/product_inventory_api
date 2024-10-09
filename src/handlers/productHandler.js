const { Product } = require("../db/db.js");


const productPostHandler = async(obj) => {
    const created = await Product.create(obj);
    return created;
};

const productGetAllHandler = async() => {
    const found = await Product.findAll();
    return found
};

const productGetByIdHandler = async(id) => {
    const found = await Product.findByPk(id);
    return found;
};

const productUpdateHandler = async(id, name, description, price, stock) => {
    const found = await Product.findByPk(id);
    if(!found){
        return {
            success: false,
            message: "Product not found"
        }
    }else{
        const updated = await found.update({name, description, price, stock});
        return updated;
    }
};

const productDeleteHandler = async(id) => {
    const found = await Product.findByPk(id);
    if(!found){
        return {
            success: false,
            message: "Product not found"
        }
    }else{
        await found.destroy();
        return "Deletion complete"
    }
};


module.exports = {
    productPostHandler,
    productGetAllHandler,
    productGetByIdHandler,
    productUpdateHandler,
    productDeleteHandler
}