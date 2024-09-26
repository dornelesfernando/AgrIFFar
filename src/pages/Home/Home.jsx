import styles from './Home.module.css'
import Navbar from '../../layout/Navbar/Navbar.jsx'
import TopContainer from './components/TopContainer.jsx'
import GetStarted from './components/GetStarted.jsx'
import Images from './components/Images.jsx'
import EquipeInfo from './components/EquipeInfo.jsx'
import Footer from '../../layout/Footer/Footer.jsx'

function Home() {
  return (
    <>
      <div className={styles.main}>
          <Navbar />
          <TopContainer />
          <GetStarted />
          <Images />
          <EquipeInfo />
          <Footer />
      </div>
    </>
  )
}

export default Home
