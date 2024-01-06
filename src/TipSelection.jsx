import { useState } from 'react'
import InputButton from './InputButton'

export default function TipSelection({ setTip }) {

  
  const [isCustom, setIsCustom] = useState(false)
  const [checkedBoxValue, setCheckedBoxValue] = useState('')

  const tipOptions = [5, 10, 15, 25, 50]

  function handleCustomChange (e) {

    if(e.target.value === ''){
      setIsCustom(false)
      return
    }
    setTip(e.target.value)
    setIsCustom(true)
  }

  return (
    <section className="tip-value-selection">
    <h1>Select Tip %</h1>
    <div className="input-wrapper">
      {tipOptions.map((tip, index) => {
        

        const isChecked = isCustom ? false : (checkedBoxValue === tip)  ? true : false
        // console.log({
        //   tip,
        //   checkedBoxValue,
        //   isCustom,
        //   isChecked,
        //   typeCheckbox: typeof checkedBoxValue,
        //   typetip: typeof tip,
        //   conditionResult: (checkedBoxValue === tip) ? true : false
        // })
        
        return (
          <InputButton 
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
    <input type='text' name='custom-tip' placeholder='Custom' onChange={handleCustomChange}></input>
    </div>
  </section>
  )
}


// import { useState } from 'react'
// import InputButton from './InputButton'

// export default function TipSelection() {

//   const [tip, setTip] = useState('')
//   const [isCustom, setisCustom] = useState('false')
//   const [checkedBoxValue, setCheckedBoxValue] = useState('')

//   const tipOptions = [5, 10, 15, 25, 50]
//   console.log(tip)

//   function handleCustomChange (e) {
//     console.log('iscustom: ',e.target.value)
//     if(e.target.value === ''){
//       setisCustom(false)
//       return
//     }
//     setTip(e.target.value)
//     setisCustom(true)
//   }
//   console.log('isCustom', isCustom)
//   return (
//     <section className="tip-value-selection">
//     <h1>Select Tip %</h1>
//     <div className="input-wrapper">
//       {tipOptions.map((tip, index) => {
//         console.log('chekedboxvalue',checkedBoxValue)
//         const isChecked = isCustom ? false : (checkedBoxValue == tip)
//         console.log(tip, isChecked)
//         console.log((checkedBoxValue == tip))
        
//         return (
//           <InputButton 
//             id={index} 
//             value={tip} 
//             key={tip} 
//             setTip={setTip} 
//             isChecked={isChecked} 
//             setCheckedBoxValue={setCheckedBoxValue}
//           />
//         )

//       })}
//     <input type='text' name='custom-tip' placeholder='Custom' onChange={handleCustomChange}></input>
//     </div>
//   </section>
//   )
// }
