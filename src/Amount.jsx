export default function Amount({ header, icon, setValue, value }) {

  function handleKeyDown (e) {
    let newBill = 0

    if(e.key === 'Backspace'){
      console.log({value})
      if (value === undefined || 
        value === '') {
        return
      }
      newBill = value.slice(0,-1)
      setValue(newBill)
      return
    }

    if (e.key === ',') {
      newBill = value + '.'
      setValue(newBill)
      return
    }

    if (isNumericCharacter(e.key)) {
      newBill = value + e.key
      setValue(newBill)
    }
  }


  

  function isNumericCharacter(char) {
    return /^[0-9.]$/.test(char);
  }
  
  return (
    <section className={header}>
          <label>{header}</label>
          <div className="input-wrapper">
            <input 
              type='text' 
              name={header}
              placeholder='0' 
              onKeyDown={handleKeyDown}
              value={value}
              required 
            />
            <img src={icon} className='input-icon'/>
          </div>
        </section>
  )
}
