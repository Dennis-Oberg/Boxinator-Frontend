import React from "react";
import { convertHexCodeToRGB } from "../utils/utilmethods";
import { addEndPoint } from '../utils/endpoints';

const BoxContext = React.createContext();

export const useBoxContext = () => {
    return React.useContext(BoxContext);
};

export const BoxProvider = ({ children }) => {

    //havent implemented but should be used to disable the "savebutton"
    //while waiting for a response from the server.
    const [loading, setLoading] = React.useState(false);

    const [submitted, setSubmitted] = React.useState(false);

    const [inputValue, setInputValues] = React.useState({
        name: "",
        weight: 0,
        colour: "#030303",
        country: "china",
        rbgvalues: { r: 0, g: 0, b: 0 }
    });

    const submitData = async () => {
        setLoading(true);
        setSubmitted(false)
        let insertWeight = parseFloat(inputValue.weight);

        const box = {
            "boxName": inputValue.name, //boxname
            "containerColour": inputValue.colour,
            "country": inputValue.country, //receiver
            "weightInKiloGrams": insertWeight,
        };

        const res = await fetch(addEndPoint, {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(box)
        });

        if (res.status === 200) {

            setLoading(false);
            setSubmitted(true);

        } else if (res.code === 500 || res.code === 401) {
            setLoading(false);
        }
    };

    const handleResetForm = () => {
        setInputValues({
            name: "",
            weight: 0,
            colour: "#030303",
            country: "china",
            rbgvalues: { r: 0, g: 0, b: 0 }
        });
    };

    const setCountry = e => {
        setInputValues((value) => ({
            ...value,
            country: e.target.value
        }));
    };

    const setName = e => {
        setInputValues((value) => ({
            ...value,
            name: e.target.value
        }));
    };

    const setColour = e => {
        let rgb = convertHexCodeToRGB(e.target.value);
        setInputValues((value) => ({
            ...value,
            colour: e.target.value,
            rbgvalues: rgb,
        }));
    };

    const setWeight = e => {
        setInputValues((value) => ({
            ...value,
            weight: e.target.value
        }));
    };

    const values = {
        setCountry
        , setColour
        , setName
        , setWeight
        , inputValue
        , submitData
        , submitted
        , handleResetForm
    }

    return (
        <BoxContext.Provider
            value={values}>

            {!loading && children}

        </BoxContext.Provider>
    )
}