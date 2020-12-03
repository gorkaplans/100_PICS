import React, { useState, useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Mapa.scss'   

const mountainsAll = {
  'PzMCxhLn8bLckCsiq2Kl': "248,137.7 243.3,137.7 245.7,133.7 248,129.7 250.3,133.7 252.6,137.7",
  'ezehdAdtKDdSWAOxkJ57': "192.9,54.3 188.3,54.3 190.6,50.3 192.9,46.3 195.2,50.3 197.5,54.3 	",
  'g5SgXgzuzk81fn5bFKTE': "290.7,294.3 286.1,294.3 288.4,290.3 290.7,286.3 293,290.3 295.3,294.3 	",
  '1mXKPYh1iA4cYCx82NSr': "265.2,274.3 260.6,274.3 262.9,270.3 265.2,266.3 267.5,270.3 269.8,274.3 	",
  'M3YS2cFzcP0OFBBkyZhG': "318.8,119.6 314.2,119.6 316.5,115.6 318.8,111.6 321.1,115.6 323.4,119.6 	",
  'Q3j8MgCML3S8AX6SNPC3':"352,113.5 347.4,113.5 349.7,109.5 352,105.5 354.3,109.5 356.6,113.5 	", 
  'q6wsGsbn7sKRNfkat4dm':"231.7,178.8 227.1,178.8 229.4,174.8 231.7,170.8 234.1,174.8 236.4,178.8 	"
}   



const Mapa = ({ mountains, showMountain }) => {
  const ref = useRef(null);
  const[popUpMountain,setPopUpMountain] = useState(null)
  const[popUpleft,setPopUpLeft] = useState(null)
  const[popUpRight,setPopUpRight] = useState(null)


  useEffect( () => {
    setPopUpMountain(showMountain)
  },[showMountain])


  const handleOnMouseEnterList = (e, id, _ref) => {
      const mountainHover = mountains.filter(m => m.id === id)
      setPopUpMountain(mountainHover[0])
      setPopUpLeft(_ref.current.getBoundingClientRect().left)
      setPopUpRight(_ref.current.getBoundingClientRect().top)
  }
  
  const handleOnMouseEnter = (e, id) => {
      const mountainHover = mountains.filter(m => m.id === id)
      setPopUpMountain(mountainHover[0])
      setPopUpLeft(e.pageX)
      setPopUpRight(e.pageY)
      
      
  }

  const handleClosePopUp = () => {
    setPopUpMountain(null)
  }


  

    return (
      <>
       <div className="map-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.83 486.53">
        <defs>
          <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#262424;fill-rule:evenodd;}.cls-2{fill:#e6e3d1;}" }} />
        </defs>
        <title>mapa</title>
        <g id="Layer_1" data-name="Layer 1">
          <path className="cls-1" d="M96.4,0h2.4c5.7,8.5,18,5.8,23.9,14.1c0.6,0.8,2.7,0.5,4.1,0.8c9.2,2,18.6,3.5,27.5,6.4
            c3.8,1.2,6.7,5.4,10.1,8.2c1.9,1.5,4,3.9,6.1,4.1c5.1,0.5,11,1.5,15.2-0.5c9.4-4.5,12.4,0.4,16.1,7.5c4.1,7.8,10,14.8,7.4,24.5
            c-0.4,1.3-0.5,2.7-0.8,3.9c6.8,4.1,6.9,4.8,2.1,11.2c-1.2,1.6-2.3,4-2,5.7c1.5,8.1,6.2,10.1,13.8,6.6c4.9-2.2,9.6-5.6,14.7-6.1
            c5.6-0.6,8.5-2.8,10.2-7.5c5.7,1.6,11.1,2.9,16.4,4.7c3.7,1.2,7.3,2.9,11,4.4c2,0.8,4.4,2.7,5.8,2.1c4.5-2,5.9,0.5,7.1,3.8
            c1.1,3,2.1,6.1,3,9.2c2.7,9.5,8.3,11.4,16,5.1c2.8-2.3,5-5.3,7.7-7.7c1.8-1.6,4.9-4.1,5.9-3.6c7,3.9,12.9-0.2,19.3-1.4
            c1.4-0.3,2.9-0.2,4.2,0.4c9.4,5,20.2,7.4,27.6,15.8c3,3.4,5.9,3.7,10.1,1.9c3.4-1.3,7.1-1.6,10.7-0.6c6.2,1.7,8,0.8,7.8-5.8
            c-0.2-6,1.7-7.7,7.9-8c3.7-0.2,7.4-1.3,11.1-2.2c6.5-1.6,10.2-8.9,17.8-8.5c2.8,0.1,5.7-0.8,8.6-0.9c2.3-0.1,4.8,1,7,0.6
            c3.7-0.6,5.9,0.3,6.6,4.1s2.7,4.3,6.5,3.5c8.2-1.7,11.4,1.1,12.2,9.5c0.1,1.4-0.6,3.3,0.1,4.2c1.4,1.7,4,4.4,5.1,4
            c7-2.4,12.6,0.4,18.1,3.9v4.9c-2,2.9-5.1,5.5-5.7,8.6c-1,5-3.7,6-7.7,5.5c-4-0.4-8-1.2-11.9-2.4c-4.5-1.4-6.8,0.1-6.9,4.6
            c-0.3,10.4,2.2,19.8,11.2,26.2c4.8,3.4,6.2,7.5,3.3,12.5c-2.6,4.5-1.8,8.2,1.1,12.3c4.8,7.1,4.5,12.5-1.7,18.4
            c-4,3.9-9.9,6-13.4,10.2c-6.9,8.2-14.7,15.6-23.2,22.1c-3.6,2.9-7,6-10.9,8.4c-6.8,4.2-13.9,7.9-20.9,11.8
            c-1.9,1.1-3.9,2.2-5.9,3.1c-16,7.2-32,14.4-47.9,21.6c-1.5,0.7-2.6,1.9-4,2.7c-4.6,2.7-9.4,5.1-13.9,8c-3.8,2.4-8.1,4.7-10.6,8.2
            c-4.8,6.7-8.5,14.3-12.7,21.4c-3.8,6.5-9.4,10.8-16.9,11.7c-10.5,1.3-20.9,2.8-31,6.6c-24.8,9.2-51.9,9.8-76.3,20.7
            c-1.2,0.5-2.8,0.4-4.1,0.8c-7.3,2.1-17,2.2-21.4,7c-5.6,6.2-10.2,5.3-16.9,5.8c-7.4,0.5-15.9,3.8-21.4,8.8
            c-14,12.8-26.7,27.1-39.7,41c-1.1,1.2-1.2,4.3-0.6,6c0.5,1.4,2.9,2.2,4.4,3.3l0.8-1.1l-1.4-2.7c3.9,1.6,6.8,4.1,9.8,6.7
            c1.7,1.4,3.1,3.3,5,4.2c6.6,3.4,7.7,8.4,1.5,12.5c-10,6.6-19.6,13.1-27.2,22.6c-1.7,2.2-7.2,1.5-11,1.8c-0.8,0-2.4-1.9-2.4-2.9
            s1.6-2.3,2.7-2.6c3.7-1,7.5-1.4,11.2-2.6c3.2-1,6.6-2.2,6.1-7.2c-13.1,0.9-25.9,1.4-31.5,16.5c-0.8,2.1-4.3,4.5-6.4,4.4
            c-2.5-0.1-6.5-2.4-7.1-4.5c-2.5-9.8-10.2-11.8-18.4-13.2c-10.5-1.8-11.9-3.8-8.1-13.3c1.2-3,0.5-5.7-2.3-5.3
            c-5.7,0.9-6.1-2.9-6.9-6.4l-9-1.4L0,440.5c2.8-1.5,5.6-3.2,8.5-4.6c6.3-2.9,11.6-10.1,9.3-13.6c-4.5-6.9-2.9-13.1,1-19.3
            c3.9-6.2,3.7-12.8-0.3-18.2c-3.6-4.5-6.4-9.6-8.3-15c-1.7-5-1.2-8.1,3.5-10.3c6.1-2.9,12-5.7,13.9-13.2c0.5-2,3-3.7,5-4.9
            c6.3-4,7.6-10.9,3.4-17c-1.1-2-1.3-4.3-0.6-6.4c2.7-6.5,2.7-7.4-3.7-10c-2.9-1.2-4.7-2.8-1.8-5.1c4.8-4,5-8.6,4-14.2
            c-0.3-1.8,1.7-4.5,3.4-6.1c1.3-1.3,3.7-1.4,5.5-2.3c4.8-2.5,6.7-16.5,2.6-16.7c-8.7-0.3-11.2-4.8-12.1-12c0-0.3-0.8-0.6-0.7-0.9
            c0.1-2.7-0.6-6,0.7-7.9c2.8-3.9,6.1-7.5,9.8-10.5c2.3-1.9,5.5-2.8,8.3-4.1c1.4-0.6,4.1-1,4.2-1.6c0.8-8.9,9.7-10.7,14.7-14.4
            c7.2-5.3,5.4-10.6,5.4-16.9L69,194c0.6-1.9,1.1-5,1.7-5c5.2-0.3,7-4.9,10.4-7.2c4.2-2.7,6.4-6,7-10.6c2.2-16.2,6.8-32.1,13.6-47
            c5.5-12.1-3.7-21.8-3.9-32.9c0-1-2.6-1.8-2.9-2.9c-0.6-2.5-1.6-5.6-0.6-7.6c3.4-6.7,7.7-12.8,11.4-19.3c2.7-4.8,1.6-7.7-3.2-9.6
            C92.2,47.8,91.2,46,90.5,34.6c-0.2-3.7-2.2-7.3-3.5-11.2C87,15,88.2,5.9,96.4,0z" transform="translate(-10.53 -7.84)" /></g>
        <g id="Layer_2" data-name="Layer 2">
          {mountains.map(m => (
            <polygon
              ref={ref}
              id={m.id}
              key={m.id} 
              className="cls-2" 
              onMouseEnter={(e) => handleOnMouseEnter(e, m.id, ref)} 
              points={mountainsAll[m.id]} />)

          )}
        </g>
      </svg>
      
      { popUpMountain && (
          <div className="hover-popUp" style={{position: 'absolute', left: popUpleft, top: popUpRight }}>
              <div className="img-container" style={{backgroundImage:`url(${popUpMountain.img})`}}></div>
              <h1 className="regular">{popUpMountain.name}</h1>
              <hr className="fine-line"></hr>
              <p className="light desc">{popUpMountain.desc}</p>
              <div className="pop-buttons">
              <Button ><Link to={`/mountain/${popUpMountain.id}`} id="btn">Veure +</Link></Button>
              <Button onClick={handleClosePopUp}>Tanca</Button>
              </div>
          </div>
        )
      }
     
      </div>  
      </>
      

    )
}   


export default Mapa;