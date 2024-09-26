import styles from './Home.module.css'
import Footer from '../../layout/Footer/Footer.jsx'
import Navbar from '../../layout/Navbar/Navbar.jsx'
import GetStarted from './components/GetStarted.jsx'
import TopContainer from './components/TopContainer.jsx'

function Home() {

  return (
    <div className={styles.main}>
        <Navbar />
        <TopContainer />
        <GetStarted />

      <div className="images" id="images">
          <div className="cool">
              <div className="box-sub1">
                  <img className="sub1" src="/img/img2.jpg" alt=""/>
              </div>
              <div className="box-sub2">
                  <img className="sub2" src="/img/img3.jpg" alt=""/>
              </div>
          </div>
          <div className="coolCenter">
              <img className="imgCenter" src="/img/img1 (definitiva).jpg" alt=""/>
              <p className="title">
                  Bem vindo ao AgrIFFar!
              </p>
          </div>
          <div className="cool">
              <div className="box-sub3">
                  <img className="sub1" src="/img/img3.jpg" alt=""/>
              </div>
              <div className="box-sub4">
                  <img className="sub2" src="/img/img2.jpg" alt=""/>
              </div>
          </div>
      </div>

      <div className="equipe-info">
          <p className="title">
              Equipe
          </p>
          <p className="info-text">
              Somos a equipe desenvolvedora do AgrIFFar!
          </p>


          <div className="wrapper">
              <i id="left" className="fa-solid fa-angle-left"></i>
              <ul className="carousel">
                  <li className="card">
                      <div className="img"><img src={perfil1} alt="img" draggable="false"/></div>
                      <h2>Karlise Soares Nascimento</h2>
                      <span>Coordenadora</span>
                  </li>
                  <li className="card">
                      <div className="img"><img src="/img/fernando.jpg" alt="img" draggable="false"/></div>
                      <h2>Fernando Dorneles da Silva</h2>
                      <span>Bolsista - Téc. Informática</span>
                  </li>
                  <li className="card">
                      <div className="img"><img src="/img/Luis.jpg" alt="img" draggable="false"/></div>
                      <h2>Luis Eduardo Baumgartner de Quadra</h2>
                      <span>Bolsista - Téc. Informática</span>
                  </li>
                  <li className="card">
                      <div className="img"><img src={perfil1} alt="img" draggable="false"/></div>
                      <h2>Ana Laura Hepp Galarça</h2>
                      <span>Bolsista - Téc. Manutenção e Suporte em Informática</span>
                  </li>
                  <li className="card">
                      <div className="img"><img src="/img/Mauricio.jpg" alt="img" draggable="false"/></div>
                      <h2>Mauricio Bilharva Melo</h2>
                      <span>Bank Manager</span>
                  </li>
                  <li className="card">
                      <div className="img"><img src="/img/Tiarla.jpeg" alt="img" draggable="false"/></div>
                      <h2>Tiarla Regina Borgartz Schreiber</h2>
                      <span>Bank Manager</span>
                  </li>
                  <li className="card">
                      <div className="img"><img src="/img/Marcio.jpg" alt="img" draggable="false"/></div>
                      <h2>Marcio Cristiano Augusto Brune</h2>
                      <span>App Designer</span>
                  </li>
                  <li className="card">
                      <div className="img"><img src="/img/Manoela.jpg" alt="img" draggable="false"/></div>
                      <h2>Manoela Moraes dos Santos</h2>
                      <span>App Designer</span>
                  </li>
                  <li className="card">
                      <div className="img"><img src="/img/thiago.jpg" alt="img" draggable="false"/></div>
                      <h2>Thiago Mikael Copetti dos Santos</h2>
                      <span>App Designer</span>
                  </li>
                  <li className="card">
                      <div className="img"><img src="/img/GLENIO.jpg" alt="img" draggable="false"/></div>
                      <h2>Glenio Venes Flôres</h2>
                      <span>App Designer</span>
                  </li>
              </ul>
              <i id="right" className="fa-solid fa-angle-right"></i>
          </div>

      </div>

      <Footer />
    </div>
  )
}

export default Home
