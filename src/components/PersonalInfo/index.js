import './index.css'

function PersonalInfo({onNextStep}) {
  return (
    <div className="step">
      <h2>Person Info</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="e.g. Stephen King" />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          className="email"
        />

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" className='phone' placeholder="e.g. +1 234 567 890" />

        <button onClick={onNextStep}>Next Step</button>
      </form>
    </div>
  )
}

export default PersonalInfo
