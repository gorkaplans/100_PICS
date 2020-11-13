import React from 'react'; 

import'./Filter.scss'

const Filter = () => {
    return (
       <div className="filter-container">
           <section className="dificult">
                <p className="filter-section regular"> Dificultat</p>
                <div className="action-container">
                    <button>Facil</button>
                    <button>Moderat</button>
                    <button>Dificl</button>
                </div>
           </section>
           <section className=" filter-section time">
                <p className="regular"> Temps</p>
                <div className="action-container range-action light">
                    <div className="range-slider">
                        <input id="rs-range-line" className="rs-range" type="range" defaultValue={0} min="1h" max="+8h" />
                    </div>
                    <div className="box-minmax">
                        <span>1h</span><span>+8</span>
                    </div> 
                </div>
           </section>
       </div>
    )
}   

export default Filter;