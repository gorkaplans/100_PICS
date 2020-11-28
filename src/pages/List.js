import MainLayout from "../components/MainLayout/MainLayout";
import Mapa from "../components/Mapa/Mapa";
import Titular from "../components/Titular";
import MountainsList from '../components/MountainsList'
import './Home.scss'
import React, { useState, useEffect } from 'react'; 
import { getAllMountains } from '../services/data'


const List= () => {
  const[mountains, setMountains] = useState()
  const[mountainHover, setmountainHover] = useState(null)

  useEffect(() => {
    getAllMountains().then(m => setMountains(m));
},[]) 

  const handleMountainHover = (m) => {
    setmountainHover(m)
  }


  return (
   <MainLayout>
    <div className="home-container">
      <div className="left-llistat">
        {mountains && <Mapa mountains={mountains} showMountain={mountainHover}></Mapa>}
        
        <Titular title="llistat">
        En cinc llices de camp. De la Comtessa lo qual. Fama e contínua bona memòria los hòmens virtuosos e. Humanes Mereixedors són d'honor glòria e de fama e. Al gentilhom o generós qui vol rebre l'orde de. Part serà del principi de cavalleria; la segona
        </Titular>
      </div>
      <div className="right">
      {mountains && <MountainsList onMountainHover={handleMountainHover} mountains={mountains}></MountainsList>}
      </div>
    </div>  
   </MainLayout>
  );
}
 
export default List;