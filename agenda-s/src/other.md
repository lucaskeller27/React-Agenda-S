{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} classNameName="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} classNameName="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div classNameName="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p classNameName="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <header>
        <div className="logoDiv">
            <img className="senaiLogo" src="./assets/sesi-senai.png" alt="SENAI"/>
        </div>
        <div className="agendas">
            <img id="logoMain" src="./assets/logo.png" alt="Agenda S Logo"/>
            <p id="headerText">Agenda S</p>
        </div>
    </header>
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
      <p id="footerText">SENAI Florianópolis (CTAI)<br/>Fone: (48) 3239-5800<br/>
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