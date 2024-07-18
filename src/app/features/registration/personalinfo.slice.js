import { createSlice } from '@reduxjs/toolkit'

export const personalInfoSlice = createSlice({
  name: 'personalInformation',
  initialState: {
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    lastFourSSN: ""
  },
  reducers: {
    setPersonalInfo: (state, action) => {
        state = action.payload
    },
    // setFirstName: (state, action) => {
    //     state.firstName = action.payload
    // },
    // setLastName: (state, action) => { 
    //     state.lastName = action.payload
    // },
    // setDob: (state, action) => {
    //     state.dob = action.payload
    // },
    // setSSN: (state, action) => {
    //     state.lastFourSSN = action.payload
    // },
    // setGender: (state, action) => { 
    //     state.gender = action.payload
    // },
    setPersonalInfoByFieldName: (state, action) => {
        state[action.payload.name] = action.payload.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPersonalInfo, setPersonalInfoByFieldName } = personalInfoSlice.actions

export default personalInfoSlice.reducer