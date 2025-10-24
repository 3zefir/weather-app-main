import {type FC, useState} from "react";
import {Box} from "@mui/material";
import weatherNowImage from "../images/logo.svg";
import settingsImage from "../images/icon-units.svg";
import dropdownImage from "../images/icon-dropdown.svg";
import successImage from "../images/icon-checkmark.svg";
import {uiComponents} from "../data/uiComponents.ts";

const {GrayButton, ListTitle, ListSubtitle, UnitsButton} = uiComponents;

const Header: FC = ({setToCelsius, setToFahrenheit, Celsius, Fahrenheit}: any) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen: () => void = (): void => {
        setIsOpen(prev => !prev);
    }

    return (
        <Box className="header">

            <Box className="header__logo">

                <img src={weatherNowImage} alt="" className="logo__image"/>

            </Box>

            <Box className="header__units">

                <GrayButton className="units__button" onClick={handleOpen}>

                    <img src={settingsImage} alt="" className="button__image--settings"/>
                    Units
                    <img src={dropdownImage} alt="" className="button__image--dropdown"/>

                </GrayButton>

                {isOpen && <Box className="units__list">

                    <Box className="list__header">

                        <ListTitle className="header__title--list">Switch to Imperial</ListTitle>

                    </Box>

                    <Box className="list__temperature">

                        <ListSubtitle className='temperature__title'>Temperature</ListSubtitle>
                        <UnitsButton style={Celsius ? {marginLeft: '-7px', backgroundColor: 'hsl(243, 23%, 24%)'} : {marginLeft: '-7px'}} className="temperature__button" onClick={setToCelsius}>Celsius (°C) {Celsius ?
                            <img src={successImage} alt=""/> : null}</UnitsButton>
                        <UnitsButton style={Fahrenheit ? {marginLeft: '-7px', backgroundColor: 'hsl(243, 23%, 24%)'} : {marginLeft: '-7px'}} className="temperature__button" onClick={setToFahrenheit}>Fahrenheit (°F) {Fahrenheit ?
                            <img src={successImage} alt=""/> : null}</UnitsButton>

                    </Box>

                    <Box className="list__wind">

                        <ListSubtitle className='wind__title'>Wind Speed</ListSubtitle>
                        <UnitsButton style={Celsius ? {textTransform: 'lowercase', marginLeft: '-7px', backgroundColor: 'hsl(243, 23%, 24%)'} : {textTransform: 'lowercase', marginLeft: '-7px'}} className="wind__button" onClick={setToCelsius}>km/h {Celsius ?
                            <img src={successImage} alt=""/> : null}</UnitsButton>
                        <UnitsButton style={Fahrenheit ? {textTransform: 'lowercase', marginLeft: '-7px', backgroundColor: 'hsl(243, 23%, 24%)'} : {textTransform: 'lowercase', marginLeft: '-7px'}} className="wind__button" onClick={setToFahrenheit}>mph {Fahrenheit ?
                            <img src={successImage} alt=""/> : null}</UnitsButton>

                    </Box>

                    <Box className="list__precipitation">

                        <ListSubtitle className='precipitation__title'>Precipitation</ListSubtitle>
                        <UnitsButton style={Celsius ? {marginLeft: '-7px', backgroundColor: 'hsl(243, 23%, 24%)'} : {marginLeft: '-7px'}} className="precipitation__button" onClick={setToCelsius}>Millimeters (mm) {Celsius ?
                            <img src={successImage} alt=""/> : null}</UnitsButton>
                        <UnitsButton style={Fahrenheit ? {marginLeft: '-7px', backgroundColor: 'hsl(243, 23%, 24%)'} : {marginLeft: '-7px'}} className="precipitation__button" onClick={setToFahrenheit}>Inches (in) {Fahrenheit ?
                            <img src={successImage} alt=""/> : null}</UnitsButton>

                    </Box>

                </Box>}

            </Box>

        </Box>
    )
}

export default Header;