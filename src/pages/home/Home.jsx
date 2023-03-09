import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import "./home.css"

export const Home = () => {
  return (
    <div>
      {/* components */}
        <NavBar/>
        <Header/>
        <div className="homeContainer">
          <Featured />
        </div>

    </div>
  )
}

export default Home

