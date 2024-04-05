import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredApplications: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_APPLICATIONS(state, action) {
      const { applications, search } = action.payload;
      const tempApps = applications.filter(
        (application) =>
          application.firstName.toLowerCase().includes(search.toLowerCase()) ||
          application.stateOfResidence.toLowerCase().includes(search.toLowerCase()) ||
          application.gender.toLowerCase().includes(search.toLowerCase())
      );
      state.filteredApplications = tempApps;
    },
  },
});

export const { FILTER_APPLICATIONS } = filterSlice.actions;

export const selectAdmissions = (state) => state.filter.filteredApplications;

export default filterSlice.reducer;
