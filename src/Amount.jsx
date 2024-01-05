export default function Amount({ header, icon }) {
  return (
    <section className={header}>
          <label>{header}</label>
          <div className="input-wrapper">
            <input type='text' name={header} required placeholder='0'></input>
            <img src={icon} className='input-icon'/>
          </div>
        </section>
  )
}
