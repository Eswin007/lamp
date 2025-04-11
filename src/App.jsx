import { useState } from 'react'
import './main.scss'

function App() {

  const [clock, setClock] = useState(new Date());

  const timer =  setInterval(() => {
      const newTime = new Date();
      setClock(newTime)
  }, 1000);

  // const time = new Date(clock).toLocaleTimeString('en-US', {hour12:true});
  const hours = [...clock.getHours().toLocaleString()];
  const minutes = [...clock.getMinutes().toLocaleString()];
  const day = [...clock.getDate().toLocaleString()];
  const month = [...(clock.getMonth() + 1).toLocaleString()];
  const year = [...clock.getFullYear().toString()];
  const seconds = [...clock.getSeconds().toString()];

  const DoubleDigit = ({ value }) => (
  <>
    <div>{value.length === 1 ? '\u00A0' : value[0]}</div>
    <div>{value.length === 1 ? value[0] : value[1]}</div>
  </>
);

  return (
    <div className="main-wrap">
      <div className="main-frame">
        <div className="main-frame__inner">
          <div className="small-frame">
            <div className="small-frame__inner"></div>
            <div className="small-frame__inner-line"></div>
            <div className="small-frame__center-line"></div>
            <div className="small-frame__outer-line"></div>
          </div>
          <div className="capsule-frame">
            
          </div>

          <div className="time">
                <DoubleDigit value={hours} />
                <DoubleDigit value={minutes} />
                <DoubleDigit value={day} />
                <DoubleDigit value={month} />
                <DoubleDigit value={year} />

          
            <div className="time__half">
              {seconds.length === 1 ? <span>&nbsp;</span> : <span>{seconds[0]}</span>}
              {seconds.length === 1 ? <span>{seconds[0]}</span> : <span>{seconds[1]}</span>}
            </div>
          </div>
         
          <div className="time placeholder">
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
             <div className="time__half">
              <span>8</span>
              <span>8</span>
            </div>
          </div>
          {/* <!-- <div className="time">
              <div className="time__hr">
               07
              </div>
              <div className="time__min">
                <span>2</span>
                <span>4</span>
              </div>
              <div className="time__half">pm</div>
              <div className="time__day">
                <span>3</span>
                <span>0</span>
              </div>
              <div className="time__month">
                <span>3</span>
                <span>0</span>
              </div>
              <div className="time__year">
                <span>9</span>
                <span>3</span>
              </div>
          </div>
          <div className="time placeholder">
              <div className="time__hr">
                <span>8</span>
                <span>8</span>
              </div>
              <div className="time__min"><span>8</span>
                <span>8</span></div>
              <div className="time__half">
                <span>8</span>
                <span>8</span>
              </div>
              <div className="time__day"><span>8</span>
                <span>8</span></div>
              <div className="time__month"><span>8</span>
                <span>8</span></div>
              <div className="time__year"><span>8</span>
                <span>8</span></div>
          </div> --> */}
        </div>
        <div className="main-frame__outer-line"></div>
        <div className="main-frame__inner-line"></div>
        <div className="main-frame__center-line"></div>
      </div>
    </div>
 

  )
}

export default App
