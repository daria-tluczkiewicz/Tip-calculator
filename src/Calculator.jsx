import { useState } from 'react'
import Amount from './Amount'
import Result from './Result'
import TipSelection from './TipSelection'

export default function Calculator() {

  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [numberOfPeople, setNumberOfPeople] = useState('')
  // const [tipAmount, setTipAmount] = useState('0.00')

  function calculateTip () {
    const billNr = convertStringToNumber(bill, 'float')
    const tipNr = convertStringToNumber(tip, 'integer') * 0.01
    const calculatedTip = parseFloat(billNr * tipNr).toFixed(2)
    console.log({billNr,tipNr})
    return calculatedTip
  }
  const calculatedTip = calculateTip()

  function calculateTipPerPerson() {
    console.log({calculatedTip,numberOfPeople}, typeof calculatedTip)
    return (calculatedTip / convertStringToNumber(numberOfPeople, 'integer')).toFixed(2)
  }

  const tipPerPerson = calculateTipPerPerson()

  function resetValues () {
    console.log('reset')
    setBill('')
    setTip('')
    setNumberOfPeople(0)
  }

  function convertStringToNumber (str, parseNumberType) {
    if (parseNumberType === 'integer') {
      return parseInt(str)
    }
    if (parseNumberType === 'float') {
      return parseFloat(str)
    }
  }
  const isResetDisabeld = (tip === "" && bill === "" && numberOfPeople === '') ? true : false
  
  return (
    <div className='calculator-container'>
      <form className='tip-form'>
        <Amount header='Bill' icon='./assets/images/icon-dollar.svg' setValue={setBill} value={bill}/>
      
       <TipSelection setTip={setTip}/>

        <Amount header='Number of people' icon='./assets/images/icon-person.svg' setValue={setNumberOfPeople} value={numberOfPeople}/>

      </form>
      <div className='results-container'>
          <Result header='Tip Amount' result={tip && bill? calculatedTip : '0.00'}/>
          <Result header='Total' result={numberOfPeople != 0 ? tipPerPerson : '0.00'}/>
          <button 
            className={`${isResetDisabeld? 'reset disabled' : 'reset'}`} 
            onClick={ isResetDisabeld ? null : resetValues  }
          >
            RESET
          </button>
      </div>
    </div>
  )
}