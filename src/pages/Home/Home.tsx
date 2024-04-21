import GenelBilgiler from "./GenelBilgiler"
import HastaBilgileriFormu from "./HastaBilgileriFormu"
import './Home.scss';

const Home = () => {
  return (
    <div className="homeContainer">
      <h2 className="homePageTitle">Adli Vaka Raporu</h2>
      <div className="homePageFormContainer">
          <HastaBilgileriFormu />
          <GenelBilgiler />       
      </div>
    </div>
  )
}

export default Home