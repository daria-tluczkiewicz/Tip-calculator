import Amount from './Amount'
import InputButton from './InputButton'

export default function Calculator() {

  const tipOptions = [5, 10, 15, 25, 50]
  
  return (
    <div className='calculator-container'>
      <form className='tip-form'>
        <Amount header='Bill' icon='./assets/images/icon-dollar.svg'/>
      
        <section className="tip-value-selection">
          <div>Select Tip %</div>
          <div className="input-wrapper">
            {tipOptions.map((tip, index) => (
              <InputButton id={index} value={tip} key={tip}/>
            ))}
          <input type='text' name='custom-tip' placeholder='Custom'></input>
          </div>
        </section>

        <Amount header='Number of people' icon='./assets/images/icon-person.svg'/>

      </form>
      <div className='results-container'>
        <div className="tip-amount">
          <span>
            Tip Amount
            <p>/person</p>
          </span>
          <div className="result"></div>
        </div>
        <div className="total">
          <span>
            Total
            <p>/person</p>
          </span>

          <div className="result"></div>
          <button className="reset disabled">RESET</button>
        </div>
      </div>
    </div>
  )
}