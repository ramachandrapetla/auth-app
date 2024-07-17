import { configureStore } from '@reduxjs/toolkit'
import personalInforeducer from './features/registration/personalinfo.slice'
import contactInforeducer from './features/registration/contactinfo.slice'
import accountInforeducer from './features/registration/accountinfo.slice'

export default configureStore({
  reducer: {
    personalInfo: personalInforeducer,
    contactInfo: contactInforeducer,
    accountInfo: accountInforeducer
  },
})