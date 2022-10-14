const Follower = require("../models/followers");

const addFollower = async (req, res) => {
  const { user_id, username } = req.body;
  if (!user_id || !username) {
    return res.status(400).json({
      status: "Error",
      error: "Bad Request - missing data",
    });
  }
  try {
    const follower = Follower.create({
      user_id: user_id,
      username: username,
    });
    res.status(200).json({
      status: "OK",
      data: follower,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      error: error,
    });
  }
};

const deleteFollower = async (req, res) => {
  const { user_id, username } = req.body;
  if (!user_id || !username) {
    return res.status(400).json({
      status: "Error",
      error: "Bad Request - missing data",
    });
  }
  try {
    const follower = await Follower.findOne({
      where: { user_id: user_id, username: username },
    });
    console.log(follower);
    if (!follower) {
      return res.status(400).json({
        status: "Error",
        error: "Bad Request - follower does not exist",
      });
    }
    await follower.destroy();
    res.status(200).json({
      status: "OK",
      data: [],
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      error: error,
    });
  }
};

module.exports = {
  addFollower: addFollower,
  deleteFollower: deleteFollower,
};
