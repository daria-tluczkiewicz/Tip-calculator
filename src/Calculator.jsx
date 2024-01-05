import Amount from './Amount'
import InputButton from './InputButton'
import Result from './Result'

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
          <Result header='Tip Amount' result='0.00'/>
          <Result header='Total' result='0.00'/>
          <button className="reset disabled">RESET</button>
      </div>
    </div>
  )
}