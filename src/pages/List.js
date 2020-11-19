import MainLayout from "../components/MainLayout/MainLayout";
import Mapa from "../components/Mapa/Mapa";
import Titular from "../components/Titular";
import './Home.scss'

const List= () => {

  return (
   <MainLayout>
    <div className="home-container">
      <div className="left">
        <Mapa></Mapa>
        <Titular></Titular>
      </div>
      <div className="right">
        <h2>LLISTAT</h2>
      </div>
    </div>  
   </MainLayout>
  );
}
 
export default List;