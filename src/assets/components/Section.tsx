import {type FC, useEffect, useRef, useState} from 'react';
import cloudsImage from "../images/icon-overcast.webp";
import rainImage from "../images/icon-rain.webp";
import clearImage from "../images/icon-sunny.webp";
import partlyCloudImage from "../images/icon-partly-cloudy.webp";
import snowImage from "../images/icon-snow.webp";
import fogImage from "../images/icon-fog.webp";
import drizzleImage from "../images/icon-drizzle.webp";
import stormImage from "../images/icon-storm.webp";
import {Box} from "@mui/material";
import searchImage from "../images/icon-search.svg";
import loadingImage from "../images/icon-loading.svg";
import dropdownImage from "../images/icon-dropdown.svg";
import {uiComponents} from "../data/uiComponents.ts";
//@ts-ignore
import ScrollReveal from 'scrollreveal';

const {Title, ForecastTitle, ParamsTitle, ParamsInfo, TemperatureTitle, SelectButton, SearchButton, TemperatureParagraph, TemperatureNumber, ForecastTemperature} = uiComponents;

const Section: FC = ({Celsius, Fahrenheit}: any) => {
    const API_KEY: string = 'ec04f30eafe09e93560a50cfe249e6af';
    const [weather, setWeather] = useState<object>({});
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [tue, setTue] = useState<object>({});
    const [whichWeather, setWhichWeather] = useState<string>('monday');
    const [wed, setWed] = useState<object>({});
    const [thu, setThu] = useState<object>({});
    const [fri, setFri] = useState<object>({});
    const [sat, setSat] = useState<object>({});
    const [sun, setSun] = useState<object>({});
    const [mon, setMon] = useState<object>({});
    const [tueWeather, setTueWeather] = useState<string>('clouds');
    const [wedWeather, setWedWeather] = useState<string>('clouds');
    const [thuWeather, setThuWeather] = useState<string>('clouds');
    const [friWeather, setFriWeather] = useState<string>('clouds');
    const [satWeather, setSatWeather] = useState<string>('clouds');
    const [sunWeather, setSunWeather] = useState<string>('clouds');
    const [monWeather, setMonWeather] = useState<string>('clouds');
    const [loading, setLoading] = useState<boolean>(true);
    //@ts-ignore
    const date = new Date(tue?.dt_txt?.split(' ')[0]);
    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
    const [eventItem, setEventItem] = useState<string>('monday')
    const weekDays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const titleRef = useRef(null);
    const inputRef = useRef(null);
    const todayRef = useRef(null);
    const feelsRef = useRef(null);
    const humidityRef = useRef(null);
    const windRef = useRef(null);
    const precipitationRef = useRef(null);
    const dailyTitleRef = useRef(null);
    const tueRef = useRef(null)
    const wedRef = useRef(null)
    const thuRef = useRef(null)
    const friRef = useRef(null)
    const satRef = useRef(null)
    const sunRef = useRef(null)
    const monRef = useRef(null)
    const hourlyForecastRef = useRef(null);

    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: '450px'
        })

        sr.reveal(titleRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 500
        })

        sr.reveal(inputRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 750
        })

        sr.reveal(todayRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 1000
        })

        sr.reveal(feelsRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 1250
        })

        sr.reveal(humidityRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 1450
        })

        sr.reveal(windRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 1650
        })

        sr.reveal(precipitationRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 1850
        })

        sr.reveal(dailyTitleRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 2200
        })

        sr.reveal(tueRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 2500
        })

        sr.reveal(wedRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 2750
        })

        sr.reveal(thuRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 3000
        })

        sr.reveal(friRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 3250
        })

        sr.reveal(satRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 3500
        })

        sr.reveal(sunRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 3750
        })

        sr.reveal(monRef.current, {
            origin: 'bottom',
            duration: 2000,
            delay: 4000
        })

        sr.reveal(hourlyForecastRef.current, {
            origin: 'right',
            duration: 2000,
            delay: 4500
        })
    }, []);

    useEffect(() => {
        handleWeather()
    }, [Celsius, Fahrenheit]);

    const whichWeatherFromDay = (day: string) => {
        switch (day) {
            case 'monday':
                return monWeather;
            case 'tuesday':
                return tueWeather;
            case 'wednes':
                return wedWeather;
            case 'thursday':
                return thuWeather;
            case 'friday':
                return friWeather;
            case 'saturday':
                return satWeather;
            case 'sunday':
                return sunWeather;
        }
    }

    const handleWeatherImage = (weather: any) => {
        switch (weather) {
            case 'clouds':
                return cloudsImage;
            case 'rain':
                return rainImage;
            case 'clear':
                return clearImage;
            case 'partlyClouds':
                return partlyCloudImage
            case 'snow':
                return snowImage;
            case 'fog':
                return fogImage;
            case 'drizzle':
                return drizzleImage;
            case 'storm':
                return stormImage;
        }
    }

    const handleWeather = async () => {
        let city = value.trim();

        if (!city) {
            city = 'Berlin'
        }

        try {
            //weather
            const mainWeather = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?${Celsius ? 'units=metric&' : 'units=imperial&'}exclude=daily&q=${city}&appid=${API_KEY}`
            )
            const mainData = await mainWeather.json();

            setWeather(mainData);

            setLoading(true)

            //daily forecast
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?${Celsius ? 'units=metric&' : 'units=imperial&'}q=${city}&appid=${API_KEY}`
            )
            const data= await response.json();

            setTue(data?.list[0])
            setWed(data?.list[1])
            setThu(data?.list[2])
            setFri(data?.list[3])
            setSat(data?.list[4])
            setSun(data?.list[5])
            setMon(data?.list[6])

            setTueWeather(data?.list[0]?.weather[0].main.toLowerCase());
            setWedWeather(data?.list[1].weather[0].main.toLowerCase());
            setThuWeather(data?.list[2].weather[0].main.toLowerCase());
            setFriWeather(data?.list[3].weather[0].main.toLowerCase());
            setSatWeather(data?.list[4].weather[0].main.toLowerCase());
            setSunWeather(data?.list[5].weather[0].main.toLowerCase());
            setMonWeather(data?.list[6].weather[0].main.toLowerCase());

            setError(false);
        } catch (e) {
            console.log(e);
            setError(true)
        } finally {
            setLoading(false);
        }
    }

    function selectDays(item: string) {
        setIsSelectOpen(!isSelectOpen);
        switch (item) {
            case 'monday':
                setWhichWeather('monday');
                break;
            case 'tuesday':
                setWhichWeather('tuesday');
                break;
            case 'wednes':
                setWhichWeather('wednesday');
                break;
            case 'thursday':
                setWhichWeather('thursday');
                break;
            case 'friday':
                setWhichWeather('friday');
                break;
            case 'saturday':
                setWhichWeather('saturday');
                break;
            case 'sunday':
                setWhichWeather('sunday');
                break;
        }
    }

    function getDailyTemperature(day: string) {
        switch(day) {
            case 'monday':
                //@ts-ignore
                return sun?.main?.temp
            case 'tuesday':
                //@ts-ignore
                return mon?.main?.temp
            case 'wednesday':
                //@ts-ignore
                return tue?.main?.temp
            case 'thursday':
                //@ts-ignore
                return wed?.main?.temp
            case 'friday':
                //@ts-ignore
                return thu?.main?.temp
            case 'saturday':
                //@ts-ignore
                return fri?.main?.temp
            case 'sunday':
                //@ts-ignore
                return sat?.main?.temp
        }
    }

    return (
        <>
            {error ?
                <Box className="section">


                    <Box className="section__header" >

                        <Title className="header__title--section">How's the sky looking today?</Title>

                    </Box>






                    <Box className="section__content" >

                        <Box className="content__form">

                            <label htmlFor="city" className='form__label--section'><img src={searchImage} alt="" className="form__image"/></label>
                            <input type="text" id='city' className="form__input--section" placeholder='Search for a place...' value={value} onChange={e => setValue(e.target.value)} />

                        </Box>

                        <SearchButton className="content__button--section" onClick={handleWeather}>Search</SearchButton>

                    </Box>

                    <Box className="section__footer section__header" sx={{ margin: 'auto', width: '20em', marginTop: '40px'}}>

                        <Title sx={{fontSize: '1.5rem'}} className="footer__title--section header__title--section">No search result found!</Title>

                    </Box>

                </Box> :

                loading ? <Box className="section">


                        <Box className="section__header" ref={titleRef}>

                            <Title className="header__title--section">How's the sky looking today?</Title>

                        </Box>






                        <Box className="section__content" ref={inputRef}>

                            <Box className="content__form">

                                <label htmlFor="city" className='form__label--section'><img src={searchImage} alt="" className="form__image"/></label>
                                <input type="text" id='city' className="form__input--section" placeholder='Search for a place...' value={value} onChange={e => setValue(e.target.value)} />

                            </Box>

                            <SearchButton className="content__button--section" onClick={handleWeather}>Search</SearchButton>

                        </Box>





                        <Box className="section__footer">

                            <Box className="footer__today--loading" ref={todayRef}>

                                <img src={loadingImage} alt="" className="today__image--loading"/>
                                <TemperatureParagraph className="today__info--loading">Loading...</TemperatureParagraph>

                            </Box>





                            <Box className="footer__params">

                                <Box className="params__feels" ref={feelsRef}>

                                    <ParamsTitle className="feels__title">Feels Like</ParamsTitle>
                                    <ParamsInfo className='feels__info'>---</ParamsInfo>

                                </Box>

                                <Box className="params__humidity" ref={humidityRef}>

                                    <ParamsTitle className="humidity__title">Humidity</ParamsTitle>
                                    <ParamsInfo className='humidity__info'>---</ParamsInfo>

                                </Box>

                                <Box className="params__wind" ref={windRef}>

                                    <ParamsTitle className="wind__title">Wind</ParamsTitle>
                                    <ParamsInfo className='wind__info'>---</ParamsInfo>

                                </Box>

                                <Box className="params__precipitation" ref={precipitationRef}>

                                    <ParamsTitle className="precipitation__title">Precipitation</ParamsTitle>
                                    <ParamsInfo className='precipitation__info'>---</ParamsInfo>

                                </Box>

                            </Box>






                            <Box className="footer__forecast" ref={hourlyForecastRef}>

                                <Box className="forecast__header">

                                    <TemperatureTitle sx={{fontSize: '1.25rem', fontFamily: 'DM Sans'}} className="header__title--forecast">Hourly forecast</TemperatureTitle>

                                    <Box className="header__select--forecast">
                                        <SelectButton className="forecast__button--select">
                                            --
                                            <img src={dropdownImage} className='forecast__image--select' alt=""/>
                                        </SelectButton>
                                    </Box>

                                </Box>


                                <Box className="forecast__list">

                                    <Box className="list__item--forecast">

                                    </Box>

                                    <Box className="list__item--forecast">

                                    </Box>

                                    <Box className="list__item--forecast">

                                    </Box>

                                    <Box className="list__item--forecast">

                                    </Box>

                                    <Box className="list__item--forecast">

                                    </Box>

                                    <Box className="list__item--forecast">

                                    </Box>

                                    <Box className="list__item--forecast">

                                    </Box>

                                    <Box className="list__item--forecast">

                                    </Box>

                                </Box>

                            </Box>





                            <Box className="footer__daily">

                                <Box className="daily__header" ref={dailyTitleRef}>

                                    <TemperatureTitle sx={{fontSize: '1.23rem', fontFamily: 'DM Sans'}} className="header__title--daily">Daily forecast</TemperatureTitle>

                                </Box>

                                <Box className="daily__list">

                                    <Box className="list__item" ref={tueRef}>

                                    </Box>

                                    <Box className="list__item" ref={wedRef}>

                                    </Box>

                                    <Box className="list__item" ref={thuRef}>

                                    </Box>

                                    <Box className="list__item" ref={friRef}>

                                    </Box>

                                    <Box className="list__item" ref={satRef}>

                                    </Box>

                                    <Box className="list__item" ref={sunRef}>

                                    </Box>

                                    <Box className="list__item" ref={monRef}>

                                    </Box>

                                </Box>

                            </Box>

                        </Box>


                    </Box> :


                    <Box className="section">


                        <Box className="section__header" >

                            <Title className="header__title--section">How's the sky looking today?</Title>

                        </Box>






                        <Box className="section__content">

                            <Box className="content__form">

                                <label htmlFor="city" className='form__label--section'><img src={searchImage} alt="" className="form__image"/></label>
                                <input type="text" id='city' className="form__input--section" placeholder='Search for a place...' value={value} onChange={e => setValue(e.target.value)} />

                            </Box>

                            <SearchButton className="content__button--section" onClick={handleWeather}>Search</SearchButton>

                        </Box>





                        <Box className="section__footer">




                            <Box className="footer__today">

                                <Box className="today__data">


                                    {/* @ts-ignore */}
                                    <TemperatureTitle className="data__title">{weather?.name}, {weather?.sys?.country}</TemperatureTitle>
                                    <TemperatureParagraph className="data__info">{weekDays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</TemperatureParagraph>

                                </Box>

                                <Box className="today__temperature">


                                    <img src={handleWeatherImage(tueWeather)} alt="" className="temperature__image"/>
                                    {/* @ts-ignore */}
                                    <TemperatureNumber className="temperature__title">{Math.round(weather?.main?.temp)}°</TemperatureNumber>

                                </Box>

                            </Box>





                            <Box className="footer__params">

                                <Box className="params__feels">

                                    <ParamsTitle className="feels__title">Feels Like</ParamsTitle>
                                    {/* @ts-ignore */}
                                    <ParamsInfo className='feels__info'>{Math.round(weather?.main?.feels_like)}°</ParamsInfo>

                                </Box>

                                <Box className="params__humidity">

                                    <ParamsTitle className="humidity__title">Humidity</ParamsTitle>
                                    {/* @ts-ignore */}
                                    <ParamsInfo className='humidity__info'>{Math.round(weather?.main?.humidity)}%</ParamsInfo>

                                </Box>

                                <Box className="params__wind">

                                    <ParamsTitle className="wind__title">Wind</ParamsTitle>
                                    {/* @ts-ignore */}
                                    <ParamsInfo className='wind__info'>{weather?.wind?.speed} {Celsius ? 'kmh' : 'mph'}</ParamsInfo>

                                </Box>

                                <Box className="params__precipitation">

                                    <ParamsTitle className="precipitation__title">Precipitation</ParamsTitle>
                                    {/* @ts-ignore */}
                                    <ParamsInfo className='precipitation__info'>{weather.rain ? weather?.rain[0] : 0} {Celsius ? 'mm' : 'in'}</ParamsInfo>

                                </Box>

                            </Box>






                            <Box className="footer__forecast">

                                <Box className="forecast__header">

                                    <TemperatureTitle sx={{fontSize: '1.25rem', fontFamily: 'DM Sans'}} className="header__title--forecast">Hourly forecast</TemperatureTitle>

                                    <Box className="header__select--forecast">
                                        <SelectButton className="forecast__button--select" onClick={() => selectDays(eventItem)}>
                                            {eventItem}
                                            <img src={dropdownImage} className='forecast__image--select' alt=""/>
                                        </SelectButton>
                                        {isSelectOpen && <ul className="forecast__list--select">
                                            <li className="select__item" style={eventItem === 'monday' ? {backgroundColor: 'hsl(243, 23%, 24%)'} : {}} onClick={() => setEventItem('monday')}>Monday</li>
                                            <li className="select__item" style={eventItem === 'tuesday' ? {backgroundColor: 'hsl(243, 23%, 24%)'} : {}} onClick={() => setEventItem('tuesday')}>Tuesday</li>
                                            <li className="select__item" style={eventItem === 'wednes' ? {backgroundColor: 'hsl(243, 23%, 24%)'} : {}} onClick={() => setEventItem('wednes')}>Wednes</li>
                                            <li className="select__item" style={eventItem === 'thursday' ? {backgroundColor: 'hsl(243, 23%, 24%)'} : {}} onClick={() => setEventItem('thursday')}>Thursday</li>
                                            <li className="select__item" style={eventItem === 'friday' ? {backgroundColor: 'hsl(243, 23%, 24%)'} : {}} onClick={() => setEventItem('friday')}>Friday</li>
                                            <li className="select__item" style={eventItem === 'saturday' ? {backgroundColor: 'hsl(243, 23%, 24%)'} : {}} onClick={() => setEventItem('saturday')}>Saturday</li>
                                            <li className="select__item" style={eventItem === 'sunday' ? {backgroundColor: 'hsl(243, 23%, 24%)'} : {}} onClick={() => setEventItem('sunday')}>Sunday</li>
                                        </ul>}
                                    </Box>

                                </Box>


                                <Box className="forecast__list">

                                    <Box className="list__item--forecast">

                                        <Box className="item__weather">

                                            <img src={handleWeatherImage(whichWeatherFromDay(eventItem))} alt="" className="weather__image"/>
                                            <ForecastTitle className="weather__title">3 PM</ForecastTitle>

                                        </Box>

                                        <ForecastTemperature className="item__temperature">{Math.round(getDailyTemperature(whichWeather))}°</ForecastTemperature>

                                    </Box>

                                    <Box className="list__item--forecast">

                                        <Box className="item__weather">

                                            <img src={handleWeatherImage(whichWeatherFromDay(eventItem))} alt="" className="weather__image"/>
                                            <ForecastTitle className="weather__title">4 PM</ForecastTitle>

                                        </Box>

                                        <ForecastTemperature className="item__temperature">{Math.round(getDailyTemperature(whichWeather))}°</ForecastTemperature>

                                    </Box>

                                    <Box className="list__item--forecast">

                                        <Box className="item__weather">

                                            <img src={handleWeatherImage(whichWeatherFromDay(eventItem))} alt="" className="weather__image"/>
                                            <ForecastTitle className="weather__title">5 PM</ForecastTitle>

                                        </Box>

                                        <ForecastTemperature className="item__temperature">{Math.round(getDailyTemperature(whichWeather))}°</ForecastTemperature>

                                    </Box>

                                    <Box className="list__item--forecast">

                                        <Box className="item__weather">

                                            <img src={handleWeatherImage(whichWeatherFromDay(eventItem))} alt="" className="weather__image"/>
                                            <ForecastTitle className="weather__title">6 PM</ForecastTitle>

                                        </Box>

                                        <ForecastTemperature className="item__temperature">{Math.round(getDailyTemperature(whichWeather))}°</ForecastTemperature>

                                    </Box>

                                    <Box className="list__item--forecast">

                                        <Box className="item__weather">

                                            <img src={handleWeatherImage(whichWeatherFromDay(eventItem))} alt="" className="weather__image"/>
                                            <ForecastTitle className="weather__title">7 PM</ForecastTitle>

                                        </Box>

                                        <ForecastTemperature className="item__temperature">{Math.round(getDailyTemperature(whichWeather))}°</ForecastTemperature>

                                    </Box>

                                    <Box className="list__item--forecast">

                                        <Box className="item__weather">

                                            <img src={handleWeatherImage(whichWeatherFromDay(eventItem))} alt="" className="weather__image"/>
                                            <ForecastTitle className="weather__title">8 PM</ForecastTitle>

                                        </Box>

                                        <ForecastTemperature className="item__temperature">{Math.round(getDailyTemperature(whichWeather))}°</ForecastTemperature>

                                    </Box>

                                    <Box className="list__item--forecast">

                                        <Box className="item__weather">

                                            <img src={handleWeatherImage(whichWeatherFromDay(eventItem))} alt="" className="weather__image"/>
                                            <ForecastTitle className="weather__title">9 PM</ForecastTitle>

                                        </Box>

                                        <ForecastTemperature className="item__temperature">{Math.round(getDailyTemperature(whichWeather))}°</ForecastTemperature>

                                    </Box>

                                    <Box className="list__item--forecast">

                                        <Box className="item__weather">

                                            <img src={handleWeatherImage(whichWeatherFromDay(eventItem))} alt="" className="weather__image"/>
                                            <ForecastTitle className="weather__title">10 PM</ForecastTitle>

                                        </Box>

                                        <ForecastTemperature className="item__temperature">{Math.round(getDailyTemperature(whichWeather))}°</ForecastTemperature>

                                    </Box>

                                </Box>

                            </Box>





                            <Box className="footer__daily">

                                <Box className="daily__header">

                                    <TemperatureTitle sx={{fontSize: '1.23rem', fontFamily: 'DM Sans'}} className="header__title--daily">Daily forecast</TemperatureTitle>

                                </Box>

                                <Box className="daily__list">

                                    <Box className="list__item">

                                        <ForecastTemperature sx={{margin: 0, fontSize: '1.15rem'}} className="item__title--daily">Tue</ForecastTemperature>
                                        <img src={handleWeatherImage(tueWeather)} alt="" className="item__image--daily"/>

                                        <Box className="item__temperature">

                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(tue?.main?.temp)}°</ForecastTemperature>
                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(tue?.main?.feels_like)}°</ForecastTemperature>

                                        </Box>

                                    </Box>

                                    <Box className="list__item">

                                        <ForecastTemperature sx={{margin: 0, fontSize: '1.15rem'}} className="item__title--daily">Wed</ForecastTemperature>
                                        <img src={handleWeatherImage(wedWeather)} alt="" className="item__image--daily"/>

                                        <Box className="item__temperature">

                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(wed?.main?.temp)}°</ForecastTemperature>
                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(wed?.main?.feels_like)}°</ForecastTemperature>

                                        </Box>

                                    </Box>

                                    <Box className="list__item">

                                        <ForecastTemperature sx={{margin: 0, fontSize: '1.15rem'}} className="item__title--daily">Thu</ForecastTemperature>
                                        <img src={handleWeatherImage(thuWeather)} alt="" className="item__image--daily"/>

                                        <Box className="item__temperature">

                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(thu?.main?.temp)}°</ForecastTemperature>
                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(thu?.main?.feels_like)}°</ForecastTemperature>

                                        </Box>

                                    </Box>

                                    <Box className="list__item">

                                        <ForecastTemperature sx={{margin: 0, fontSize: '1.15rem'}} className="item__title--daily">Fri</ForecastTemperature>
                                        <img src={handleWeatherImage(friWeather)} alt="" className="item__image--daily"/>

                                        <Box className="item__temperature">

                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(fri?.main?.temp)}°</ForecastTemperature>
                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(fri?.main?.feels_like)}°</ForecastTemperature>

                                        </Box>

                                    </Box>

                                    <Box className="list__item">

                                        <ForecastTemperature sx={{margin: 0, fontSize: '1.15rem'}} className="item__title--daily">Sat</ForecastTemperature>
                                        <img src={handleWeatherImage(satWeather)} alt="" className="item__image--daily"/>

                                        <Box className="item__temperature">

                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(sat?.main?.temp)}°</ForecastTemperature>
                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(sat?.main?.feels_like)}°</ForecastTemperature>

                                        </Box>

                                    </Box>

                                    <Box className="list__item">

                                        <ForecastTemperature sx={{margin: 0, fontSize: '1.15rem'}} className="item__title--daily">Sun</ForecastTemperature>
                                        <img src={handleWeatherImage(sunWeather)} alt="" className="item__image--daily"/>

                                        <Box className="item__temperature">

                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(sun?.main?.temp)}°</ForecastTemperature>
                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(sun?.main?.feels_like)}°</ForecastTemperature>

                                        </Box>

                                    </Box>

                                    <Box className="list__item">

                                        <ForecastTemperature sx={{margin: 0, fontSize: '1.15rem'}} className="item__title--daily">Mon</ForecastTemperature>
                                        <img src={handleWeatherImage(monWeather)} alt="" className="item__image--daily"/>

                                        <Box className="item__temperature">

                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(mon?.main?.temp)}°</ForecastTemperature>
                                            {/* @ts-ignore */}
                                            <ForecastTemperature className="temperature__info">{Math.round(mon?.main?.feels_like)}°</ForecastTemperature>

                                        </Box>

                                    </Box>

                                </Box>

                            </Box>

                        </Box>


                    </Box>}

        </>
    )
}

export default Section;