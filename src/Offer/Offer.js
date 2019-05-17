import React from 'react';
import '../App.css';
import Detox from './Detox/Detox'
import "animate.css/animate.min.css";
import './Offer.css'
import PricingList from "./PricingList/PricingList";
import Juicing from "./Juicing/Juicing";


class Offer extends React.Component {
    render() {
        return (
            <div>
                <PricingList/>
                <Detox/>
                <Juicing/>
            </div>
        )
    }
}

export default Offer;