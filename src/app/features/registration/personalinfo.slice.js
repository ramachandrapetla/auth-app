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
    setPersonalInfoByFieldName: (state, action) => {
        state[action.payload.name] = action.payload.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPersonalInfo, setPersonalInfoByFieldName } = personalInfoSlice.actions

export default personalInfoSlice.reducer