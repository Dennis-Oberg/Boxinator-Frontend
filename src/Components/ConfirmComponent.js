import React from 'react';
import { useBoxContext } from '../Context/BoxContext';
import '../Style/master.css'
export const ConfirmComponent = ({ name, country, colour, rgbvalues, weight }) => {

    const { submitted } = useBoxContext();

    return (
        <React.Fragment>

            <div className='card'>
                <label className="confirmcomponentlabel">
                    Name: {name}
                </label>
                <br />

                <label className="confirmcomponentlabel">
                    Weight: {weight}
                </label>
                <br />
                <label className="confirmcomponentlabel">
                    Colour(hex): {colour}
                    <br />
                    Colour(rgb):({rgbvalues.r}, {rgbvalues.b}, {rgbvalues.g})
                </label>
                <br />
                <label className="confirmcomponentlabel">
                    Country: {country}

                </label >
                <br />
                {submitted ? <div className="alertSuccess">
                    Added {name} to {country} !
                </div> : ""}
            </div>

        </React.Fragment>
    )
}