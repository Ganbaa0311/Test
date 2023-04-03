import React from 'react'

const Card=(props)=>{
    return(
        <div className={props.style}>
            <img src={props.img} alt=''/>
            <h1>{props.title}</h1>
            <p>{props.des}</p>
        </div>
    )
}
export default Card