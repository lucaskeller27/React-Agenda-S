// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import senaiLogo from '../../assets/sesi-senai.png'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <header>
          <div className="logoDiv">
              <img src={senaiLogo} alt="SESI SENAI" className='senaiLogo'/>
          </div>
          <div className="agendas">
              {/* <img id="logoMain" src="./assets/logo.png" alt="Agenda S Logo"/> */}
              {/* <img src={myImage} alt="Trees" height="200" /> */}
              <p id="headerText">Agenda S</p>
          </div>
      </header>

      <p>Hello</p>

      <div className="container">
        <img id="logoSenai" src="./assets/sesi-senai.png" alt="SENAI"/>
        <div className="buttonsDiv">
            <p className="title">Faça seu Login</p>
            <input className="input" type="text" placeholder="E-mail institucional"/>
            <input className="input" type="password" placeholder="Senha"/>
            <a href="./home.html"><button className="buttonBlue"><p className="buttonText">Entrar</p></button></a>
        </div>
      </div>

      <footer>
          <p className='footerText'>SENAI Florianópolis (CTAI)<br/>Fone: (48) 3239-5800<br/>
              SC-401, 3730 - Saco Grande, Florianópolis - SC, 88032-005</p>
          <div id="logos">
              <a href="https://www.facebook.com/senaisc/" title="Ir para Facebook" target="_blank">
                  <img className="logoImg grow" src="./assets/icons/facebook.svg" alt="Facebook"/>
              </a>
              <a href="https://www.youtube.com/@senaiconhecimento" title="Ir para YouTube" target="_blank">
                  <img className="logoImg grow" src="./assets/icons/youtube.svg" alt="YouTube"/>
              </a>
              <a href="https://twitter.com/SENAIsc" title="Ir para Twitter" target="_blank">
                  <img className="logoImg grow" src="./assets/icons/twitter.svg" alt="Twitter"/>
              </a>
              <a href="https://www.linkedin.com/school/senai-sc/" title="Ir para LinkedIn" target="_blank">
                  <img className="logoImg grow" src="./assets/icons/linkedin.svg" alt="LinkedIn"/>
              </a>
              <a href="https://www.instagram.com/senai.sc/" title="Ir para Instagram" target="_blank">
                  <img className="logoImg grow" src="./assets/icons/instagram.svg" alt="Instagram"/>
              </a>
          </div>
      </footer>

    </>
  )
}

export default App
