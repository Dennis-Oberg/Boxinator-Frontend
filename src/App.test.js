import React from 'react'
import { Navbar } from './Components/Navbar';
import { BoxContext, BoxProvider } from './Context/BoxContext';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import { AddboxInputForm } from './Components/AddboxInputForm';


const returnTestObjectData = () => {

    return testObject = {
        name: "",
        weight: 0,
        colour: "#030303",
        country: "china",
        rbgvalues: { r: 0, g: 0, b: 0 }
    }
}

const returnContext = () => {
    return {
        setCountry
        , setName
        , setWeight
        , inputValue
        , submitData
    } = React.useContext(BoxContext);
}




//basically only working out how this works.
test('Add box', () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/Add Box/i);
    expect(linkElement).toBeInTheDocument();
});

test('View Boxes', () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/Add box/i);
    expect(linkElement).toBeInTheDocument();
});

