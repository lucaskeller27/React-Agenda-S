// import { useState } from 'react'
import senaiLogo from '../../assets/sesi-senai.png'
import logo from '../../assets/logo.png'
import facebook from '../../assets/icons/facebook.svg'
import youtube from '../../assets/icons/youtube.svg'
import twitter from '../../assets/icons/twitter.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import instagram from '../../assets/icons/instagram.svg'

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
              <img src={logo} alt="Agenda S" className='logo'/>
              <p className="headerText">Agenda S</p>
          </div>
      </header>

        <div className="container">
            <img src={senaiLogo} alt="SESI SENAI" className='senaiLogoMid'/>
            <div className="buttonsDiv">
                <p className="divTitle">Faça seu Login</p>
                <input className="input" type="text" placeholder="E-mail institucional"/>
                <input className="input" type="password" placeholder="Senha"/>
                <a href="../Gerenciamento/App.tsx"><button className="buttonBlue"><p className="buttonText">Entrar</p></button></a>
            </div>
        </div>
        
      <footer>
          <p className='footerText'>SENAI Florianópolis (CTAI)<br/>Fone: (48) 3239-5800<br/>
              SC-401, 3730 - Saco Grande, Florianópolis - SC, 88032-005</p>
          <div className="logos">
              <a href="https://www.facebook.com/senaisc/" title="Ir para Facebook" target="_blank">
                    <img src={facebook} alt="Facebook" className='logoImg grow'/>
              </a>
              <a href="https://www.youtube.com/@senaiconhecimento" title="Ir para YouTube" target="_blank">
                    <img src={youtube} alt="YouTube" className='logoImg grow'/>
              </a>
              <a href="https://twitter.com/SENAIsc" title="Ir para Twitter" target="_blank">
                    <img src={twitter} alt="Twitter" className='logoImg grow'/>
              </a>
              <a href="https://www.linkedin.com/school/senai-sc/" title="Ir para LinkedIn" target="_blank">
                    <img src={linkedin} alt="LinkedIn" className='logoImg grow'/>
              </a>
              <a href="https://www.instagram.com/senai.sc/" title="Ir para Instagram" target="_blank">
                    <img src={instagram} alt="Instagram" className='logoImg grow'/>
              </a>
          </div>
      </footer>

    </>
  )
}

export default App
