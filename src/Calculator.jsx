import { useState } from 'react'
import Amount from './Amount'
import Result from './Result'
import TipSelection from './TipSelection'

export default function Calculator() {

  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [numberOfPeople, setNumberOfPeople] = useState('')

  function calculateTip () {
    const billAmount = parseToNumber(bill, true)
    const tipPercentage = parseToNumber(tip) * 0.01

    return parseFloat(billAmount * tipPercentage)
  }

  const calculatedTip = calculateTip()

  function calculateTipPerPerson() {
    return (calculatedTip + parseToNumber(bill, true)) / parseToNumber(numberOfPeople)
  }

  const tipPerPerson = calculateTipPerPerson()

  function resetValues () {
    setBill('')
    setTip('')
    setNumberOfPeople(0)
  }

  function parseToNumber (str, isFloat = false) {
    return isFloat ? parseFloat(str) : parseInt(str)
  }

  const isResetDisabled = !!(tip === "" && bill === "" && numberOfPeople === '')
  const tipAmount = tip && bill ? calculatedTip.toFixed(2) : '0.00'
  const totalAmount = numberOfPeople != 0 ? tipPerPerson.toFixed(2) : '0.00'
  
  return (
    <div className='calculator-container'>
      <form className='tip-form'>
        <Amount 
          header='Bill' 
          value={bill}
          setValue={setBill} 
          icon='./assets/images/icon-dollar.svg' 
        />
        <TipSelection setTip={setTip}/>
        <Amount 
          header='Number of people' 
          value={numberOfPeople}
          setValue={setNumberOfPeople} 
          icon='./assets/images/icon-person.svg'
        />
      </form>
      <div className='results-container'>
        <Result 
          header='Tip Amount'
          result={tipAmount}
        />
        <Result 
          header='Total' 
          result={totalAmount}
        />
        <button 
          className='reset'
          disabled={isResetDisabled}
          onClick={resetValues}
        >
          RESET
        </button>
      </div>
    </div>
  )
}
