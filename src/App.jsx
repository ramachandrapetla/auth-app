import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './components/registration/ProgressBar'
import PersonalInformation from './components/registration/PersonalInformation'
import ContactDetails from './components/registration/ContactDetails'
import AccountSetup from './components/registration/AccountSetup'

function App() {
  const [activeStep, setActiveStep] = useState(1)

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

  const FormLoader = ({step}) => {
    switch(step) {
      case 1: return <PersonalInformation handleNext={handleNext} />
      case 2: return <ContactDetails handleNext={handleNext} handlePrev={handlePrev}/>
      case 3: return <AccountSetup handlePrev={handlePrev}/>
    }
  }
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
    </div>
  )
}

export default App
