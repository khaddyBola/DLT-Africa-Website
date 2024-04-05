import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import applicationService from "./applicationService";
import { toast } from "react-toastify";

const initialState = {
  application: null,
  applications: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const registerStudent = createAsyncThunk(
  "auth/studentreg",
  async (applicationData, thunkAPI) => {
    try {
      return await applicationService.registerStudent(applicationData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAdmissions = createAsyncThunk(
  "auth/get-all-admissions",
  async (_, thunkAPI) => {
    try {
      return await applicationService.getAdmissions();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteAdmission = createAsyncThunk(
  "auth/delete-admission",
  async (id, thunkAPI) => {
    try {
      return await applicationService.deleteAdmission(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const upgradeAdmission = createAsyncThunk(
  "auth/upgrade-admission",
  async (applicationData, thunkAPI) => {
    try {
      return await applicationService.upgradeAdmission(applicationData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const applicationSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    RESET(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(registerStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.application = action.payload;
        toast.success("Registration Successful");
        console.log(action.payload);
      })
      .addCase(registerStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.application = null;
        toast.error(action.payload);
      })

      .addCase(getAdmissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdmissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.applications = action.payload;
        console.log(action.payload);
      })
      .addCase(getAdmissions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.applications = null;
        toast.error(action.payload);
      })

      .addCase(deleteAdmission.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAdmission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })
      .addCase(deleteAdmission.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      .addCase(upgradeAdmission.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(upgradeAdmission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })
      .addCase(upgradeAdmission.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

// Action creators are generated for each case reducer function
export const { RESET } = applicationSlice.actions;

export const selectAdmission = (state) => state.app.application;

export default applicationSlice.reducer;
