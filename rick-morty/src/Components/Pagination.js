import React from "react";

const Pagination = ({prev, next, onPrevious, onNext})=>{

    const handlePrevious =()=>{
        onPrevious();
    }

    const handleNext =() =>{
        onNext();
    }

    return(
        <div>
            <ul className="pagination justify-content-center">
                {
                    prev ?(
                
                <li className="page-iten">
                    <button className="page-link" onClick={handlePrevious}>Previous</button>
                </li>): null 
                }
                
                {
                    next ?(
                
                <li className="page-iten">
                    <button className="page-link"  onClick={handleNext}>Next</button>
                </li>): null
                }
            </ul>
        </div>
    )
}

export default Pagination;