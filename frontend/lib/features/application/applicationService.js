import axios from "axios";

export const BACKEND_URL = "http://localhost:5000";
export const API_URL = `${BACKEND_URL}/api/users/`;

const registerStudent = async (applicationData) => {
  const response = await axios.post(API_URL + "studentreg", applicationData);
  return response.data;
};

const getAdmissions = async () => {
  const response = await axios.get(API_URL + "get-all-admissions");

  return response.data;
};


const deleteAdmission = async (id) => {
  const response = await axios.delete(API_URL + id);

  return response.data.message;
};


const upgradeAdmission = async (applicationData) => {
  const response = await axios.post(
    API_URL + "upgrade-admission",
    applicationData
  );

  return response.data.message;
};

const applicationService = {
  registerStudent,
  getAdmissions,
  deleteAdmission,
  upgradeAdmission,
};

export default applicationService;
