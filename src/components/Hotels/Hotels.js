import {Component} from "react";
import propTypes from "prop-types";
import Hotel from "./Hotel/Hotel";
import styles from './Hotels.module.css'

const propsTypes = {
    hotels: propTypes.array.isRequired,
}

class Hotels extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Oferty:</h2>
                {this.props.hotels.map(hotel =>
                    <Hotel
                        key={hotel.id}
                        {...hotel}/>
                )}
            </div>
        )
    }
}

Hotels.propTypes = propsTypes;

export default Hotels