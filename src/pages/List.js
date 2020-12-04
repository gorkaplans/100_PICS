import MainLayout from "../components/MainLayout/MainLayout";
import Mapa from "../components/Mapa/Mapa";
import Titular from "../components/Titular";
import MountainsList from '../components/MountainsList'
import './Home.scss'
import React, { useState, useEffect } from 'react'; 
import { getAllMountains } from '../services/data'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";



const listDesc = "Aquí pots trobar el llistat de totes les muntanyes que tenim de moment dins de la nostra bbdd, passa el ratolí per sobre per veure'n el detall o fes click directament per poder entrar a la pàgina en concret del pic."

const List= () => {
  const[mountains, setMountains] = useState()
  const[title, setTitle] = useState('Llistat')
  const[description, setDescription] = useState(listDesc)
  const[polygonId, setPolygonId] = useState(null)
  const[mountain, setMountain] = useState(null)

  let history = useHistory();

  useEffect(() => {
    getAllMountains().then(m => setMountains(m));
},[]) 

  const handleMountainHover = (m) => {
    if(m && m.name){
      setTitle(m.name)
      setMountain(m)
    }
    if(m && m.desc){
      setDescription(m.desc)
    }
    if(m && m.id){
      setPolygonId(m.id)
      var polygon = document.getElementById(m.id)
      polygon.setAttribute('class' ,'hoverlist')
    }

    console.log(polygon)
}

const handleMountainHoverleave = (e) => {
    var polygon = document.getElementById(polygonId)
    polygon.setAttribute('class' ,'cls-2')

}

 const handleOnClick = (e) => {
    history.push(`/mountain/${mountain && mountain.id}`)
 }

  return (
   <MainLayout>
    <div className="home-container">
      <div className="left-llistat">
        {mountains && <Mapa mountains={mountains}></Mapa>}
        <Titular title={title}>
          {description}
        </Titular>
      </div>
      <div className="right">
      {mountains && <MountainsList onClick={handleOnClick} onMouseLeave2={handleMountainHoverleave} onMountainHover={handleMountainHover} mountains={mountains}></MountainsList>}
      </div>
    </div>  
   </MainLayout>
  );
}
 
export default List;