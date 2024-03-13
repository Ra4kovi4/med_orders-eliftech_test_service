const { Pharm } = require("../../models");
const { HttpError } = require("../../helpers");

const allPharm = async () => {
	const result = await Pharm.find();
console.log(result);
	if (!result) {
		throw HttpError(404, "Not found");
	}
	console.log(result);
	return result;
};

module.exports = { allPharm };
