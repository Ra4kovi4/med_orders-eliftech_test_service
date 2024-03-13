const { PharmService } = require("../../services");

const getAllPharms = async (req, res) => {
	const result = await PharmService.allPharm();
	console.log(result);
	res.json({
		status: "success",
		code: 200,
		data: {
			result,
		},
	});
};

module.exports = getAllPharms;
