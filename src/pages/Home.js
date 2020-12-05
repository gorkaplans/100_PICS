import MainLayout from "../components/MainLayout/MainLayout";
import Mapa from "../components/Mapa/Mapa";
import Titular from "../components/Titular";
import Filter from '../components/Filter'
import './Home.scss'
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Home = () => {

    const[mountains, setMountains] = useState([])
    const[ready, setReady]=useState(false)

    useEffect(() => {
      wait1second()
    },[])
    
  
    const handleSearch = (mountainsHome) => {
    
      setMountains(mountainsHome)
      console.log(mountainsHome);
   }

   function wait1second () {
    setTimeout(() => setReady(true), 800)

  }

  
  return (
   <MainLayout>
     {ready?
      <div className="home-container">
      <div className="left">
        <Mapa mountains={mountains}></Mapa>
        <Titular title="100 muntanyes">
        En cinc llices de camp. De la Comtessa lo qual. Fama e contínua bona memòria los hòmens virtuosos e. Humanes Mereixedors són d'honor glòria e de fama e. Al gentilhom o generós qui vol rebre l'orde de. Part serà del principi de cavalleria; la segona
        </Titular>
      </div>
      <div className="right">
        <Filter onSearch={handleSearch}></Filter>
      </div>
    </div>  
    : <Loading></Loading>
    }
   
   </MainLayout>
  );
}
 
export default Home;