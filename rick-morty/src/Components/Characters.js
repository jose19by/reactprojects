import React from "react";

const Characters = ({character})=>{
    return(
        <div className="row">
            {
                character.map((item, index)=>(
                    <div key={index} className="col mb-4">
                        <div className="card" style={{minwidth: '200px'}}>
                            <img src={item.image} alt="imagen"/>
                            <div className="card-body">
                                <div className="card-title">{item.name}</div>
                                <hr />
                                <p>gender: {item.gender}</p>
                                <p>species:{item.species}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters;