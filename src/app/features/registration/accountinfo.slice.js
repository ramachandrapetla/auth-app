import { createSlice } from '@reduxjs/toolkit'

export const accountInfoSlice = createSlice({
  name: 'accountInformation',
  initialState: {
    username: "",
    password: "",
    reenterPassword: ""
  },
  reducers: {
    setAccountInfo: (state, action) => {
        state = action.payload
    },
    setAccountInfoByFieldName: (state, action) => {
        state[action.payload.name] = action.payload.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAccountInfo, setAccountInfoByFieldName } = accountInfoSlice.actions

export default accountInfoSlice.reducer