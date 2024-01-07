import PropTypes from 'prop-types'

RadioButton.propTypes = {
  id: PropTypes.number,
  value: PropTypes.number,
  isChecked: PropTypes.bool,
  setTip: PropTypes.func,
  setIsCustom: PropTypes.func,
  setCheckedBoxValue: PropTypes.func
}


export default function RadioButton({ id, value, setTip, setIsCustom, isChecked, setCheckedBoxValue }) {

  const handleCheckboxChange = (e) => {
    setCheckedBoxValue(value)
    setTip(e.target.value)
    setIsCustom(false)
  };

  return (
    <div className='radio-input'>
      <input 
        type='radio' 
        name='tip' 
        value={value} 
        id={`radio${id}`} 
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
      <label 
        className="button tip" 
        htmlFor={`radio${id}`}
      >
        {value}%
      </label>
    </div>
  )
}
