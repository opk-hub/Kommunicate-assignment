
function Summary({onPreviousStep}) {
  // Define a function to calculate the total cost based on the selected options
  const calculateTotal = (billingPlan, addOns) => {
    let total = 0
    if (billingPlan === 'monthly') total += 9
    if (billingPlan === 'yearly') total += 12 * 12
    addOns.forEach(addon => {
      if (addon === 'onlineService') total += 1
      if (addon === 'largerStorage') total += 2
      if (addon === 'customProfile') total += 2
    })
    return total
  }

  return (
    <div className="step">
      <h2>Summary</h2>
      <form>
        {/* Display the selected options here */}
        <button onClick={onPreviousStep}>Go Back</button>
        <button>Confirm</button>
      </form>
    </div>
  )
}

export default Summary
