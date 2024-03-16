const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const nodemailer = require("nodemailer");

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
    phoneNo,
    emailAddress,
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
    !phoneNo ||
    !emailAddress ||
    !codeExperience ||
    !stateOfResidence
  ) {
    res.status(400);
    throw new Error("Please fill in all the required fields.");
  }

  // Check if user exists
  const userExists = await User.findOne({ emailAddress });

  if (userExists) {
    res.status(400);
    throw new Error("Email already in use.");
  }

  // Create new user
  const user = await User.create({
    firstName,
    lastName,
    DOB,
    academicQual,
    courseSelected,
    classType,
    stateOfOrigin,
    gender,
    phoneNo,
    emailAddress,
    codeExperience,
    stateOfResidence,
  });

  if (user) {
    // send mail message if the user has been created
    sendEmail(firstName, courseSelected, emailAddress, user);

    // Respond with user data
    const {
      _id,
      firstName: userFirstName,
      lastName,
      DOB,
      academicQual,
      courseSelected: userCourseSelected,
      classType,
      stateOfOrigin,
      gender,
      phoneNo,
      emailAddress : userEmailAddress,
      codeExperience,
      stateOfResidence,
    } = user;

    res.status(201).json({
      _id,
      firstName: userFirstName,
      lastName,
      DOB,
      academicQual,
      courseSelected: userCourseSelected,
      classType,
      stateOfOrigin,
      gender,
      phoneNo,
      emailAddress : userEmailAddress,
      codeExperience,
      stateOfResidence,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

// Function to send confirmation email
function sendEmail(firstName, courseSelected, emailAddress, user) {
  let transporter = nodemailer.createTransport({
    // service: process.env.EMAIL_HOST,
    // auth: {
    //   user: process.env.EMAIL_USER,
    //   pass: process.env.EMAIL_PASS,
    // },

    host: process.env.EMAIL_HOST,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Message options
  let mailOptions = {
    from: "",
    to: emailAddress,
    subject: "DLT Africa Training Registration Confirmation",
    text: `Hello ${firstName}, \n\n Thanks for applying for DLT Africa Training to study ${courseSelected}. Your application has been received and a member of our team will review and get back to you as soon as possible.\n\n Regards,\n\n DLT Africa Team`,
  };

  // Send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending mail:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

module.exports = registerUser;
