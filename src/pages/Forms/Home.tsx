 
import FormResults from '../Results/FormResults';
import './Home.scss';

const Home = () => {
  return (
    <div className="homeContainer">
      <h2 className="homePageTitle">Adli Vaka Raporu</h2>
      <div className="homePageFormContainer">
        <FormResults />
      </div>
    </div>
  )
}

export default Home