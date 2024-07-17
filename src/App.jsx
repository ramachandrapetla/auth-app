import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './components/registration/ProgressBar'
import PersonalInformation from './components/registration/PersonalInformation'
import ContactDetails from './components/registration/ContactDetails'
import AccountSetup from './components/registration/AccountSetup'

function App() {
  const [activeStep, setActiveStep] = useState(1)
  const [personalInfo, setPersonalInfo] = useState({})
  const [contactInfo, setContactInfo] = useState({})
  const [accountInfo, setAccountInfo] = useState({})

  const steps = [
    {
      stepNumber: 1,
      label: "Personal Information"
    },
    {
      stepNumber: 2,
      label: "Contact Details"
    },
    {
      stepNumber: 3,
      label: "Account Setup"
    }
  ]

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  }

  return (
    <div>
      <h2>Registration</h2>
      <ProgressBar steps={steps} active={activeStep}/>
      {activeStep && 
        <div className='form-container'>
          <FormLoader step={activeStep} />
        </div>
      }
      <div className="button-container">
        {activeStep === steps.length 
          ? <button>Submit</button>
          : <button onClick={handleNext} disabled={activeStep===steps.length}>Next</button>
        }
        {activeStep !== 1  && <button onClick={handlePrev}>Prev</button>}
      </div>
      <div>
    
      </div>
    </div>
  )
}

const FormLoader = ({step}) => {
  switch(step) {
    case 1: return <PersonalInformation />
    case 2: return <ContactDetails />
    case 3: return <AccountSetup />
  }
}
export default App
