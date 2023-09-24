const  User  = require("../model/User");

exports.fetchUserById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.fetchUserByEmail = async (req, res) => {
    const { email } = req.query;
    console.log(email);

    try {
      const user = await User.find({email:email});
      res.status(200).json(user);
    } catch (err) {
        console.log(err);
      res.status(400).json(err);
    }
  };

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = new User( req.body );
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
