import React, {useState} from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import Sidebar from './components/Sidebar'

function App() {
  const [currentStep, setCurrentStep] = useState(1) // Initialize with step 1

  const handleNextStep = () => {
    // Update the current step when the "Next Step" button is clicked
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    // Update the current step when the "Go Back" button is clicked
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="App">
      <div className="nav">
        <Sidebar currentStep={currentStep} />
      </div>
      <div className="content">
        {currentStep === 1 && (
          <PersonalInfo
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 2 && (
          <SelectPlan
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 3 && (
          <AddOns
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 4 && (
          <Summary
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}
      </div>
    </div>
  )
}

export default App
