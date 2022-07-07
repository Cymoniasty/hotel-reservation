import React, {Component} from "react";
import Hotel from "./Hotel/Hotel";

class Hotels extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>Hotels</div>
                <Hotel/>
                <Hotel/>
            </>
        )
    }
}

export default Hotels