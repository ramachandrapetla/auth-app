import { createSlice } from '@reduxjs/toolkit'

export const contactInfoSlice = createSlice({
  name: 'contactInformation',
  initialState: {
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zipcode: ""
  },
  reducers: {
    setContactInfo: (state, action) => {
        state = action.payload
    },
    setContactInfoByFieldName: (state, action) => {
        state[action.payload.name] = action.payload.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { setContactInfo, setContactInfoByFieldName } = contactInfoSlice.actions

export default contactInfoSlice.reducer