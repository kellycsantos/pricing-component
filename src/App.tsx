import { useState, useEffect } from 'react'
import './App.scss'

function App() {
  const [value, setValue] = useState(0)
  const [yearMode , setYearMode] = useState(false)

  const conditions = [
    {
      views: "10k",
      value: 8
    },
    {
      views: "50k",
      value: 12
    },
    {
      views: "100k",
      value: 16
    },
    {
      views: "500k",
      value: 24
    },
    {
      views: "1m",
      value: 36
    },
  ]

  function checkboxActive(){
    let toogle = document.querySelector('.checkbox')
    if(yearMode){
      toogle?.classList.add("active")
    } else {
      toogle?.classList.remove("active")
    }
  }

    function moneyTransform(value: number){

      return value.toFixed(2)
  }

  
useEffect(() => {
  checkboxActive()
}, [yearMode])
  return (
    <main>
      <h1>Simple, traffic-based pricing</h1>
      <h2>Sign-up for our 30-day trial. </h2>
      <h2> No credit card required.</h2>
      <article>
        <section role='return' className='return'>
          <p>{conditions[value]?.views} Pageviews</p>

          <input type="range"  step={1} min={0} max={4} onChange={(e) => (setValue(Number(e.target.value)))} />
          <div className='value'>
            <p>${moneyTransform( yearMode ? conditions[value]?.value * 12 :  conditions[value]?.value)} </p>
            {/* <p>${moneyTransform(conditions[value]?.value)} </p> */}
            <span className='period'> / {yearMode ? 'year' : 'month'}</span>
          </div>
        </section>
        <section className='subscription-container' role='subscription-mode'>
          <div>
            Monthly Billing

            <label htmlFor='mode' className="checkbox">
              <span className='checkbox_container'>
                <input id='mode' name='mode' type="checkbox" onChange={ (e ) => setYearMode(e.target.checked)} />
                <div className="ball"></div>
              </span>
            </label>


            Yearly Billing
          </div>
          <span className='discount'>-25%</span>
          {/* <span className='discount'>25% discount Unlimited</span> */}
        </section>
        <footer>
          <ul role='list'>
            <li><i></i> Unlimited websites</li>
            <li><i></i>100% data ownership</li>
            <li><i></i>Email reports</li>
          </ul>

          <button>Start my trial </button>
        </footer>
      </article>
    </main>
  )
}

export default App
