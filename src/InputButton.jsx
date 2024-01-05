export default function InputButton({ id, value }) {
  return (
    <div className='radio-input'>
      <input type='radio' name='tip' required value={value} id={`radio${id}`}></input>
      <label className="button tip" htmlFor={`radio${id}`}>{value}%</label>
    </div>
  )
}
