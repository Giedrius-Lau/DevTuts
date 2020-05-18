// @desc     Get all bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public
exports.getBootcamps = (req, res, next) => {
    return res
        .status(400)
        .json({ success: true, msg: 'Show all bootcamps', hello: req.hello });
};

// @desc     Get single bootcamps
// @route    GET /api/v1/bootcamps/:id
// @access   Public
exports.getBootcamp = (req, res, next) => {
    return res
        .status(400)
        .json({ success: true, msg: `Get bootcamp ${req.params.id}` });
};

// @desc     Create new bootcamp
// @route    POST /api/v1/bootcamps
// @access   Private
exports.createBootcamp = (req, res, next) => {
    return res.status(400).json({ success: true, msg: 'Creates new bootcamp' });
};

// @desc     Update bootcamp
// @route    PUT /api/v1/bootcamps/:id
// @access   Private
exports.updateBootcamp = (req, res, next) => {
    return res
        .status(400)
        .json({ success: true, msg: `Display bootcamp ${req.params.id}` });
};

// @desc     Delete bootcamp
// @route    DELETE /api/v1/bootcamps/:id
// @access   Private
exports.deleteBootcamp = (req, res, next) => {
    return res
        .status(400)
        .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
