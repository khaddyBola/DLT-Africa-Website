const asyncHandler = require("express-async-handler");
const crypto = require("crypto");
const Cryptr = require("cryptr");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    DOB,
    academicQual,
    courseSelected,
    classType,
    stateOfOrigin,
    gender,
    emailAddress,
    password,
    codeExperience,
    stateOfResidence,
  } = req.body;

  // Validation
  if (
    !firstName ||
    !lastName ||
    !DOB ||
    !academicQual ||
    !courseSelected ||
    !classType ||
    !stateOfOrigin ||
    !gender ||
    !emailAddress ||
    !password ||
    !codeExperience ||
    !stateOfResidence
  ) {
    res.status(400);
    throw new Error("Please fill in all the required fields.");
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be up to 6 characters.");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email already in use.");
  }

  //   Create new user
  const user = await User.create({
    firstName,
    lastName,
    DOB,
    academicQual,
    courseSelected,
    classType,
    stateOfOrigin,
    gender,
    emailAddress,
    password,
    codeExperience,
    stateOfResidence,
  });

  if (user) {
    const {
      _id,
      firstName,
      lastName,
      DOB,
      academicQual,
      courseSelected,
      classType,
      stateOfOrigin,
      gender,
      emailAddress,
      password,
      codeExperience,
      stateOfResidence,
    } = user;

    res.status(201).json({
      _id,
      firstName,
      lastName,
      DOB,
      academicQual,
      courseSelected,
      classType,
      stateOfOrigin,
      gender,
      emailAddress,
      password,
      codeExperience,
      stateOfResidence,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = registerUser;
