import './index.css'
function Sidebar({currentStep}) {
  const steps = [' Your Info', 'Select Plan', 'Add-ons', 'Summary']

  return (
    <div className="sidebar">
      <ul>
        {steps.map((step, index) => (
          <li key={index} className={currentStep === index + 1 ? 'active' : ''}>
            <div
              className={`li-container ${
                currentStep === index + 1 ? 'highlight' : ''
              }`}
            >
              <div className="steps-container">
                <div className="step-selects">
                  <p className="step-no">{index + 1}</p>
                </div>
              </div>
              <div className="step-name-container">
                <div className="step-selects-name">
                  <p className="step-name">
                    <span className="span">Step {index + 1}</span>

                    <br />
                    {step}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
