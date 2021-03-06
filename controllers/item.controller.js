const boom = require("boom");
const Item = require("../models/items.modal");


exports.getItems = async (req, rep) => {
  try {
    const items = await Item.find();
    return items;
  } catch (err) {

    throw boom.boomify(err);

  }
};

exports.getOneItem = async (req, rep) => {
  try {
    const id = req.params.id;
    const item = await Item.findById(id);
    return item;
  } catch (err) {
    throw boom.boomify(err);

  }
}
exports.addItem = async (req, rep) => {
  try {
    const item = new Item(req.body);
    return await item.save();
  } catch (err) {
    throw boom.boomify(err);

  }
}
exports.updateItem = async (req, rep) => {
  try {
    const id = req.params.id
    const item = req.body
    const { ...updateData} = item;
    const update = await Item.findByIdAndUpdate(id, updateData, {
      new: true
    })
    return update
  } catch (err) {
    throw boom.boomify(err);
    
  }
}

exports.delItem = async (req, rep) => {
  try {
    const id = req.params.id
    const item = await Item.findByIdAndRemove(id);
    return item;
  } catch (err) {
    throw boom.boomify(err);
    
  }
  
}