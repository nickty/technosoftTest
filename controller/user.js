
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  // console.log(req.body);
  const { name, email} = req.body
  try {
    
    const token = jwt.sign({ name }, "SEcretCanEnvLater", {
      expiresIn: "7d",
    });

    // console.log(token);

    res.json({
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error, Try again!");
  }
};


