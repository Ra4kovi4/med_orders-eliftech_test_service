const { PharmService } = require("../../services");

const getPharmById = async (req, res) => {
	const { id } = req.params;
	const pharm = await PharmService.pharmById(id);
	res.json({
		code: 200,
		status: "Success",
		data: {
			pharm: pharm,
		},
	});
};

module.exports = getPharmById;
