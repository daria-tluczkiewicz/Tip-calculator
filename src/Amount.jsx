export default function Amount({ header, icon, setValue, value, minimal = false }) {

  function handleKeyDown (e) {
    let newValue = 0

    if(e.key === 'Backspace'){
      if (value === undefined || value === '') {
        return
      }
      
      newValue = value.slice(0,-1)
      setValue(newValue)
      return
    }

    if (e.key === ',') {
      newValue = value + '.'
      setValue(newValue)
      return
    }

    if (isNumericCharacter(e.key)) {
      newValue = value + e.key
      setValue(newValue)
    }
  }

  function isNumericCharacter(char) {
    return /^[0-9.]$/.test(char);
  }
  
  function renderInput (required = false) {
    return (
      <input 
          type='text' 
          name={header}
          placeholder='0' 
          onKeyDown={handleKeyDown}
          value={value}
          required={required}
        />
    )
  }

  return minimal ? renderInput() : (
    <section className={header}>
      <label>{header}</label>
      <div className="input-wrapper">
        {renderInput(true)}
        <img src={icon} className='input-icon'/>
      </div>
    </section>
  )
}
