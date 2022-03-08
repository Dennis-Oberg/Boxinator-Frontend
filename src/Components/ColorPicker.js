import React from "react";
import { useBoxContext } from '../Context/BoxContext';
import '../Style/master.css'

export const ColorPicker = () => {
    const { inputValue, setColour } = useBoxContext();

    const [showColourPicker, setShowColourPicker] = React.useState(false);

    return (
        <div className='inset'>
            <label>
                Box Colour:
            </label>
            <br />
            <button type="button"
                onClick={() => setShowColourPicker(!showColourPicker)}
                className={"savebutton"}
            >
                {showColourPicker ? <label>  Click to close colour picker </label> : <label> Click to show colour picker </label>}
            </button>
            {/*
           <input contentEditable="false" onClick={() => setShowColourPicker(!showColourPicker)} placeholder="Click to show colour picker" className={"input-form"}></input>
           */ }
            <br />
            {showColourPicker ? <input type={"color"} value={inputValue.colour} onChange={setColour} id="colourStyles" /> : null}
        </div>
    )
}