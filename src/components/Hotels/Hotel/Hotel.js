import React from "react";
import styles from './Hotel.module.css'
import hotelImg from '../../../assets/images/thumb-1920-509985.png'

function Hotel() {

    return (
        <div className={`row ${styles.hotel}`}>
            <img src={hotelImg} alt="picture" className='img-fluid'/>
            hotel
        </div>
    )
}

export default Hotel;









