import './new-app.css';
import {useState} from "react";
import {Box} from "@mui/material";
import Header from "../assets/components/Header.tsx";
import Section from "../assets/components/Section.tsx";

function App() {
    const [celsius, setCelsius] = useState<boolean>(false);
    const [fahrenheit, setFahrenheit] = useState<boolean>(true);

    const handleCelsius: () => void = (): void => {
        setFahrenheit(false);
        setCelsius(true)
    }

    const handleFahrenheit: () => void = (): void => {
        setFahrenheit(true);
        setCelsius(false)
    }

  return (
    <>

        <Box className="main">

            <Header
                //@ts-ignore
                Celsius={celsius}
                Fahrenheit={fahrenheit}
                setToCelsius={handleCelsius}
                setToFahrenheit={handleFahrenheit}
            />
            <Section
                //@ts-ignore
                Celsius={celsius}
                Fahrenheit={fahrenheit}
            />

        </Box>

    </>
  )
}

export default App

