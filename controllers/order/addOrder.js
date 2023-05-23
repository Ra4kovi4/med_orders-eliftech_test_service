const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const addOrder = async (req, res) => {
	const { name, email, phone, address, cart } = req.body;

	const order = await User.create({
		name,
		email,
		phone,
		address,
		cart,
	});

	res.json({
		code: 200,
		status: "Success",
		data: {
			order,
		},
	});
};

module.exports = addOrder;
