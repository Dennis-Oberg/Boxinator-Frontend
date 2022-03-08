import React from 'react';
import '../Style/master.css'
import { ConfirmComponent } from './ConfirmComponent';
import { useBoxContext } from '../Context/BoxContext';
import { ColorPicker } from './ColorPicker';
export const AddboxInputForm = () => {

    const [errorMsg, setErrorMsg] = React.useState("");

    const {
        setCountry
        , setName
        , setWeight
        , inputValue
        , submitData
    } = useBoxContext();

    const validateInput = () => {
        if (inputValue.name === "") {
            setErrorMsg("Provide a name");
            return false;
        } else if (inputValue.weight < 0) {
            setErrorMsg("Provide a positive number");
            return false;
        } else if (inputValue.weight === 0) {
            setErrorMsg("Is the weight zero kgs?");
            return false;
        } else if (inputValue.colour === "") {
            setErrorMsg("Provide a colour");
            return false;
        } else if (inputValue.country === "") {
            setErrorMsg("Provide a receiver");
            return false;
        } else if (inputValue.rbgvalues.b > 0) {
            setErrorMsg("Can´t apply any shade of blue");
            return false;
        } else {
            setErrorMsg("")
            return true;
        }
    }

    const submit = async e => {
        if (validateInput())
            await submitData();
    };

    return (
        <div className={"containerForm"}>
            {errorMsg !== "" ?
                <div className='alertError'>
                    {errorMsg}
                </div> : null}
            <form >
                <div className='inset'>
                    <label>
                        Name:
                    </label>
                    <br />

                    <input
                        id="name"
                        className="input-form"
                        type="text"
                        placeholder="Receiver"
                        name="name"
                        value={inputValue.name}
                        onChange={setName}
                    />
                </div>
                <div className='inset'>
                    <label>
                        Weight:
                    </label>
                    <br />
                    <input
                        id="name"
                        className="input-form"
                        type="number"
                        placeholder="Weight"
                        name="weight"
                        value={inputValue.weight}
                        onChange={setWeight}

                    />
                </div>

                <ColorPicker />

                <div className='inset'>
                    <label>
                        Country:
                    </label>
                    <br />
                    <select
                        value={inputValue.country}
                        onChange={setCountry}>
                        <option value={"china"}> China </option>
                        <option value={"brazil"}> Brazil </option>
                        <option value={"australia"}> Australia </option>
                        <option value={"sweden"}>Sweden</option>
                    </select>
                </div>

                <div className='inset'>
                    <button type='button' onClick={submit} className='savebutton' >
                        Save
                    </button>
                </div>
            </form>

            <div>
                <ConfirmComponent
                    name={inputValue.name}
                    weight={inputValue.weight}
                    colour={inputValue.colour}
                    country={inputValue.country}
                    rgbvalues={inputValue.rbgvalues}

                />
            </div>
        </div>
    )

}