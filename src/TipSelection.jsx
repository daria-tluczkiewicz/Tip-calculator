import { useEffect, useState } from 'react'
import RadioButton from './RadioButton'
import Amount from './Amount'

export default function TipSelection({ setTip }) {
  const [isCustom, setIsCustom] = useState(false)
  const [checkedBoxValue, setCheckedBoxValue] = useState('')
  const [customTip, setCustomTip] = useState('')
  
  const tipOptions = [5, 10, 15, 25, 50]
  useEffect(updateTip,[customTip])

  function updateTip () {
    if(customTip === ''){
      setIsCustom(false)
      return
    }
    setTip(customTip)
    setIsCustom(true)
  }

  return (
    <section className='tip-value-selection'>
    <h1>Select Tip %</h1>
    <div className='input-wrapper'>
      {tipOptions.map((tip, index) => {
        const isChecked = isCustom ? false : (checkedBoxValue === tip)
        
        return (
          <RadioButton 
            id={index} 
            value={tip} 
            key={tip} 
            setTip={setTip} 
            isChecked={isChecked} 
            setCheckedBoxValue={setCheckedBoxValue}
            setIsCustom={setIsCustom}
          />
        )
      })}
        <Amount 
          value={isCustom ? customTip : ''}
          setValue={setCustomTip} 
          minimal={true}
        />
    </div>
  </section>
  )
}
