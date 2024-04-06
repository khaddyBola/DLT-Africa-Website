"use client";

import {
  Button,
  Checkbox,
  Input,
  Option,
  Select,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerStudent,
  RESET,
} from "../../../lib/features/application/applicationSlice";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

const initialState = {
  firstName: "",
  lastName: "",
  dob: "",
  academicQualification: "",
  courseSelected: "",
  classType: "",
  stateOfOrigin: "",
  gender: "",
  phoneNo: "",
  emailAddress: "",
  codeExperience: "",
  stateOfResidence: "",
};

const nigerianStates = [
  { id: 1, tag: "Abia" },
  { id: 2, tag: "Adamawa" },
  { id: 3, tag: "Akwa Ibom" },
  { id: 4, tag: "Anambra" },
  { id: 5, tag: "Bauchi" },
  { id: 6, tag: "Bayelsa" },
  { id: 7, tag: "Benue" },
  { id: 8, tag: "Borno" },
  { id: 9, tag: "Cross River" },
  { id: 10, tag: "Delta" },
  { id: 11, tag: "Ebonyi" },
  { id: 12, tag: "Edo" },
  { id: 13, tag: "Ekiti" },
  { id: 14, tag: "Enugu" },
  { id: 15, tag: "Gombe" },
  { id: 16, tag: "Imo" },
  { id: 17, tag: "Jigawa" },
  { id: 18, tag: "Kaduna" },
  { id: 19, tag: "Kano" },
  { id: 20, tag: "Katsina" },
  { id: 21, tag: "Kebbi" },
  { id: 22, tag: "Kogi" },
  { id: 23, name: "Kwara" },
  { id: 24, tag: "Lagos" },
  { id: 25, tag: "Nasarawa" },
  { id: 26, tag: "Niger" },
  { id: 27, tag: "Ogun" },
  { id: 28, tag: "Ondo" },
  { id: 29, tag: "Osun" },
  { id: 30, tag: "Oyo" },
  { id: 31, tag: "Plateau" },
  { id: 32, tag: "Rivers" },
  { id: 33, tag: "Sokoto" },
  { id: 34, tag: "Taraba" },
  { id: 35, tag: "Yobe" },
  { id: 36, tag: "Zamfara" },
  { id: 37, tag: "Federal Capital Territory" },
];

const Application = () => {
  const [formData, setFormData] = useState(initialState);
  const [checkboxesChecked, setCheckboxesChecked] = useState({
    newsletter: false,
    privacyPolicy: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckboxesChecked({
      ...checkboxesChecked,
      [name]: !checkboxesChecked[name],
    });
  };

  const handleChange = (e) => {
    let name, value;

    if (e.target) {
      name = e.target.name;
      value = e.target.value;
    } else {
      name = e.name;
      value = e.value;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const allCheckboxesChecked = Object.values(checkboxesChecked).every(
    (value) => value
  );

  const {
    firstName,
    lastName,
    dob,
    academicQualification,
    courseSelected,
    classType,
    stateOfOrigin,
    gender,
    phoneNo,
    emailAddress,
    codeExperience,
    stateOfResidence,
  } = formData;

  const dispatch = useDispatch();

  const { isLoading, isSuccess, message } = useSelector((state) => state.app);

  const registerUser = async (e) => {
    e.preventDefault();

    if (!allCheckboxesChecked) {
      return toast.error("Please accept both checkboxes.");
    }

    if (
      !firstName ||
      !lastName ||
      !dob ||
      !academicQualification ||
      !courseSelected ||
      !classType ||
      !stateOfOrigin ||
      !gender ||
      !phoneNo ||
      !emailAddress ||
      !codeExperience ||
      !stateOfResidence
    ) {
      return toast.error("All fields are required");
    }

    const applicationData = {
      firstName,
      lastName,
      dob,
      academicQualification,
      courseSelected,
      classType,
      stateOfOrigin,
      gender,
      phoneNo,
      emailAddress,
      codeExperience,
      stateOfResidence,
    };

    // console.log(userData);
    await dispatch(registerStudent(applicationData));
  };

  useEffect(() => {
    if (isSuccess && !isLoading) {
    }

    dispatch(RESET());
  }, [isSuccess, isLoading, dispatch]);

  return (
    <div
      className="bg-auto  bg-no-repeat bg-left-top"
      style={{ backgroundImage: `url(images/application-page-bg.svg)` }}
    >
      <div
        className="bg-auto  bg-no-repeat bg-[right_bottom_16rem]"
        style={{ backgroundImage: `url(images/application-page-right-bg.svg)` }}
      >
        {/* Your content goes here */}
        <div className="flex flex-col pt-[103px] px-4 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 place-content-between">
            <div className="p-4">
              <h2 className="text-4xl font-bold mb-4">
                Apply to Join Our Bootcamp Class
              </h2>
              <p className="mb-4 text-lg">
                Once you've applied, our admissions team will contact you by
                email to schedule a short interview in order to discuss your
                application.
              </p>
            </div>
            <div className="p-4 flex justify-end ">
              <div className=" border rounded-2xl border-gray-600 bg-[#FFF] pt-10 pr-10 pb-9 pl-6 max-w-[404px]">
                <div className="flex flex-col">
                  <div className="flex  gap-2">
                    {" "}
                    <div className="mt-1 h-4 w-4">
                      {" "}
                      <FaCheck color="#FEA650" />
                    </div>{" "}
                    <p>Less than 5 minutes</p>
                  </div>
                  <div className="flex  gap-2">
                    {" "}
                    <div className="mt-1 h-4 w-4">
                      {" "}
                      <FaCheck color="#FEA650" />
                    </div>{" "}
                    <p>No prepayment and no commitment</p>
                  </div>
                  <div className="flex  gap-2">
                    <div className="mt-1 h-4 w-4">
                      {" "}
                      <FaCheck color="#FEA650" />
                    </div>{" "}
                    <p>23000+ alumni have joined our community, so can you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-20 p-4">
            <form
              className="w-full   lg:min-w-[75%] 2xl:min-w-[70%] lg:max-w-[75%] 2xl:max-w-[70%]  rounded-2xl bg-[#FFEFD4] py-[69px] px-8 lg:px-[86px] mx-auto "
              onSubmit={registerUser}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-14">
                <Input
                  size="lg"
                  name="firstName"
                  variant="static"
                  label="First Name"
                  className="pl-4 text-xl"
                  labelProps={{
                    className: "!text-black",
                  }}
                  containerProps={{
                    className: "h-14 ",
                  }}
                  placeholder="First Name"
                  value={firstName}
                  onChange={handleChange}
                />
                <Input
                  size="lg"
                  name="lastName"
                  variant="static"
                  label="Last Name"
                  className="pl-4 text-xl"
                  labelProps={{
                    className: "!text-black",
                  }}
                  containerProps={{
                    className: "h-14 ",
                  }}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleChange}
                />
                <Input
                  size="lg"
                  name="emailAddress"
                  variant="static"
                  label="Email Address"
                  className="pl-4 text-xl "
                  labelProps={{
                    className: "!text-black",
                  }}
                  containerProps={{
                    className: "h-14 ",
                  }}
                  placeholder="Email Address"
                  value={emailAddress}
                  onChange={handleChange}
                />
                <Select
                  name="stateOfOrigin"
                  label="State of Origin"
                  variant="static"
                  className="pl-4 text-xl "
                  labelProps={{
                    className: "!text-black",
                  }}
                  containerProps={{
                    className: "h-14 ",
                  }}
                  value={stateOfOrigin}
                  onChange={handleChange}
                >
                  {nigerianStates.map(({ id, tag }) => (
                    <Option key={id} value={tag}>
                      {tag}
                    </Option>
                  ))}
                </Select>

                <Select
                  label="Gender"
                  variant="static"
                  name="gender"
                  className="pl-4 text-xl"
                  labelProps={{
                    className: "!text-black",
                  }}
                  containerProps={{
                    className: "h-14 ",
                  }}
                  value={gender}
                  onChange={handleChange}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="prefer">Prefer Not To Mention</Option>
                </Select>

                <Input
                  size="lg"
                  name="dob"
                  type="date"
                  variant="static"
                  className="pl-4 text-xl text-gray-600"
                  labelProps={{
                    className: "!text-black",
                  }}
                  containerProps={{
                    className: "h-14 ",
                  }}
                  label="Date of Birth"
                  value={dob}
                  onChange={handleChange}
                />
                <Input
                  size="lg"
                  name="phoneNo"
                  variant="static"
                  label="Phone Number"
                  className="pl-4 text-xl"
                  labelProps={{
                    className: "!text-black",
                  }}
                  containerProps={{
                    className: "h-14 ",
                  }}
                  placeholder="Phone Number"
                  value={phoneNo}
                  onChange={handleChange}
                />

                <Select
                  label="Academic Qualification"
                  variant="static"
                  name="academicQualification"
                  className="pl-4 text-xl"
                  labelProps={{
                    className: "!text-black",
                  }}
                  containerProps={{
                    className: "h-14 ",
                  }}
                  value={academicQualification}
                  onChange={handleChange}
                >
                  <Option value="&nbsp;">&nbsp;</Option>
                  <Option value="ssce">
                    Senior Secondary School Certificate (SSCE)
                  </Option>
                  <Option value="ond">Ordinary National Diploma (OND)</Option>
                  <Option value="hnd">Higher National Diploma (HND)</Option>
                  <Option value="bsc">BSc</Option>
                </Select>
                <Input
                  size="lg"
                  name="courseSelected"
                  variant="static"
                  className="disabled:bg-transparent pl-4 text-xl disabled:text-blue-gray-300 disabled:border-b "
                  label="Course Selected"
                  containerProps={{
                    className: "h-14 ",
                  }}
                  labelProps={{
                    className: "!text-black",
                  }}
                  placeholder="frontend or fullstack or product design"
                  value={courseSelected}
                  onChange={handleChange}
                />
                <Select
                  label="Coding Experience"
                  variant="static"
                  name="codeExperience"
                  className="pl-4 text-xl "
                  labelProps={{
                    className: "!text-black",
                  }}
                  containerProps={{
                    className: "h-14 ",
                  }}
                  value={codeExperience}
                  onChange={handleChange}
                >
                  <Option value="&nbsp;">&nbsp;</Option>
                  <Option value="beginner">Beginner</Option>
                  <Option value="inter-mediate">Inter Mediate</Option>
                  <Option value="advanced">Advanced</Option>
                </Select>
                <Select
                  label="Class Type"
                  variant="static"
                  name="classType"
                  className="pl-4 text-xl "
                  labelProps={{
                    className: "!text-black",
                  }}
                  containerProps={{
                    className: "h-14 ",
                  }}
                  value={classType}
                  onChange={handleChange}
                >
                  <Option value="&nbsp;">&nbsp;</Option>
                  <Option value="online">Online</Option>
                  <Option value="physical">Physical</Option>
                </Select>
                <Select
                  label="State of Residence"
                  variant="static"
                  name="stateOfResidence"
                  className="pl-4 text-xl "
                  labelProps={{
                    className: "!text-black",
                  }}
                  containerProps={{
                    className: "h-14 ",
                  }}
                  value={stateOfResidence}
                  onChange={handleChange}
                >
                  {nigerianStates.map(({ id, tag }) => (
                    <Option key={id} value={tag}>
                      {tag}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="mt-5 flex w-full flex-col gap-3">
                <List className="flex-col">
                  <ListItem className="p-0 hover:bg-transparent">
                    <label className="flex w-full cursor-pointer items-center  py-2">
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          ripple={false}
                          containerProps={{ className: "p-0" }}
                          onChange={() => handleCheckboxChange("newsletter")}
                          checked={checkboxesChecked.newsletter}
                          required
                        />
                      </ListItemPrefix>
                      <Typography className="font-normal text-sm text-gray-600">
                        I would like to be kept up to date with new training
                        programs, events, promotions, and marketing.
                      </Typography>
                    </label>
                  </ListItem>
                  <ListItem className="p-0 hover:bg-transparent">
                    <label className="flex w-full cursor-pointer items-center py-2">
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          ripple={false}
                          containerProps={{ className: "p-0" }}
                          onChange={() => handleCheckboxChange("privacyPolicy")}
                          checked={checkboxesChecked.privacyPolicy}
                          required
                        />
                      </ListItemPrefix>
                      <Typography className="font-normal text-sm text-gray-600">
                        By submitting this form, I accept DLT Africa's Privacy
                        Policy.
                      </Typography>
                    </label>
                  </ListItem>
                </List>
              </div>
              <Button
                type="submit"
                size="large"
                className={`capitalize px-16 py-4 mt-5 bg-[#FC7C13] ${
                  !allCheckboxesChecked && "pointer-events-none opacity-50"
                }`}
                disabled={!allCheckboxesChecked}
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
