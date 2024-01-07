import PropTypes from 'prop-types';

Amount.propTypes = {
  header: PropTypes.string,
  icon: PropTypes.string,
  setValue: PropTypes.func,
  value: PropTypes.string,
  minimal: PropTypes.bool
}

export default function Amount({ header, icon, setValue, value, minimal = false }) {

  const sectionNameClass = header.replaceAll(' ', '-').toLowerCase()

  function handleInputChange (e) {
    console.log({e})
    const pressedKey = e.nativeEvent.data
    const inputType = e.nativeEvent.inputType
    let newValue = e.target.value

    if(pressedKey === ',') {
      newValue = newValue.replace(',', '.')
      setValue(newValue)
      return
    }

    if (isNumericCharacter(pressedKey) ||
      inputType === 'deleteContentBackward' || 
      inputType === 'insertFromPaste'){
        setValue(newValue)
    }

    
  }

  function isNumericCharacter(char) {
    return /^[0-9.]$/.test(char);
  }
  
  function renderInput (required = false) {
    return (
      <input 
          id={sectionNameClass}
          type='text' 
          name={header}
          placeholder='0' 
          onChange={handleInputChange}
          value={value}
          required={required}
        />
    )
  }

  return minimal ? renderInput() : (
    <section className={sectionNameClass}>
      <label htmlFor={sectionNameClass}>
        {header}
        {value === '0' ? <div className="error">Cannot be zero</div> : null}
      </label>
      <div className="input-wrapper">
        {renderInput(true)}
        <img src={icon} className='input-icon'/>
      </div>
    </section>
  )
}
