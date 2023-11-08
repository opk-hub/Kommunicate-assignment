
function AddOns({onPreviousStep, onNextStep}) {
  return (
    <div className="step">
      <h2>Add-ons</h2>
      <form>
        <label htmlFor="addons">
          Add-ons help enhance your gaming experience
        </label>
        <div>
          <input
            type="checkbox"
            id="onlineService"
            name="addons"
            value="onlineService"
          />
          <label htmlFor="onlineService">
            Online service (Access to multiplayer games +$1/mo)
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="largerStorage"
            name="addons"
            value="largerStorage"
          />
          <label htmlFor="largerStorage">
            Larger storage (Extra 1TB of cloud save +$2/mo)
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="customProfile"
            name="addons"
            value="customProfile"
          />
          <label htmlFor="customProfile">
            Customizable Profile (Custom theme on your profile +$2/mo)
          </label>
        </div>

        <button onClick={onPreviousStep}>Go Back</button>
        <button onClick={onNextStep}>Next Step</button>
      </form>
    </div>
  )
}

export default AddOns
