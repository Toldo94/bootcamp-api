// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
  res.send("Get bootcamps");
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
  res.send("Get bootcamp");
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
//@access   Private
exports.createBootcamp = (req, res, next) => {
  res.send("Create bootcamp");
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = (req, res, next) => {
  res.send("Update bootcamp");
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
//@access   Private
exports.delteBootcamp = (req, res, next) => {
  res.send("Delete bootcamp");
};
