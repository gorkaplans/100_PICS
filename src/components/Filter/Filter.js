import React, { useState } from 'react'; 
import Button from '../Button'


import'./Filter.scss'

const Filter = ({onSearch}) => {

    const[formData,setFormData]=useState({
        dificult:'easy',
        time:4,
        distance:100,
        altitude:1500,
        checks:{
            family:false,
            dog:false,
            water:false,
            refuge:false,
            eat:false,
            parking:false,
        }
    })

    const handelChangeFormData = (e) => {

        console.log(e.target)
        
        const {name, value} = e.target

        setFormData({...formData,[name]:value})
        
    }

    const handelCheckFormData = (e) => {

        const {name, checked } = e.target

        setFormData({...formData, checks: {
            ...formData.checks, 
            [name]:checked,
        }})
    }
    console.log(formData)

    return (
       <div className="filter-container">
           <section className="dificult">
                <p className="filter-section regular"> Dificultat</p>
                <div className="action-container buttons">
                    <Button onClick={handelChangeFormData} name='dificult' value='easy'>Facil</Button>
                    <Button onClick={handelChangeFormData} name='dificult' value='medium'>Moderat</Button>
                    <Button onClick={handelChangeFormData} name='dificult' value='hard'>Difícil</Button>
                </div>
           </section>
           <section className=" filter-section time">
                <p className="regular"> Temps</p>
                <div className="action-container range-action light">
                    <div className="range-slider">
                        <input onChange={handelChangeFormData} name='time' value={formData.time} className="rs-range" type="range" min="1" max="8" />
                    </div>
                    <div className="box-minmax">
                        <span>1h</span><span>+8</span>
                    </div> 
                </div>
           </section>
           <section className=" filter-section distance">
                <p className="regular"> Distancia</p>
                <div className="action-container range-action light">
                    <div className="range-slider">
                    <input onChange={handelChangeFormData} name='distance' value={formData.distance} className="rs-range" type="range" min="10" max="300" />
                    </div>
                    <div className="box-minmax">
                        <span>10km</span><span>+300km</span>
                    </div> 
                </div>
           </section>
           <section className=" filter-section altitude">
                <p className="regular">Altitud</p>
                <div className="action-container range-action light">
                    <div className="range-slider">
                    <input onChange={handelChangeFormData} name='altitude' value={formData.altitude} className="rs-range" type="range" min="500" max="3000" />
                    </div>
                    <div className="box-minmax">
                        <span>500m</span><span>3000m</span>
                    </div> 
                </div>
           </section>
           <section className=" filter-section checkbox">
                <p className="regular">Altres</p>
                <div className="checks-container">
                    <span className="column1">
                        <label className="light check-label"><input type="checkbox" id="family" name="family" checked={formData.checks['family']} onChange={handelCheckFormData} /> Per fer Amb la familia</label><br />
                        <label className="light check-label"><input type="checkbox" id="dog" name="dog" checked={formData.checks['dog']} onChange={handelCheckFormData} /> Per fer amb el gos</label><br />
                        <label className="light check-label"><input type="checkbox" id="water" name="water" checked={formData.checks['water']} onChange={handelCheckFormData} /> Fonts d'aigua</label><br />
                    </span>
                    <span className="column2">
                        <label className="light check-label"><input type="checkbox" id="refuge" name="refuge" checked={formData.checks['refuge']} onChange={handelCheckFormData} /> Refugi proper</label><br />
                        <label className="light check-label"><input type="checkbox" id="eat" name="eat" checked={formData.checks['eat']} onChange={handelCheckFormData} /> Restauracío per la zona</label><br />
                        <label className="light check-label"><input type="checkbox" id="parking" name="parking" checked={formData.checks['parking']} onChange={handelCheckFormData} />Parking Habilitat</label><br />
                    </span>
                </div>


               
           </section>
       </div>
    )
}   

export default Filter;