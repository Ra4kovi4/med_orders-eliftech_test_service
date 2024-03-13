const { ctrlWrapper } = require("../../helpers");
const getPharmById = require("./getPharmById");
const getAllPharm = require("./getAllPharm");

module.exports = {
	getPharmById: ctrlWrapper(getPharmById),
	getAllPharm: ctrlWrapper(getAllPharm),
};
