import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default function Calculator():React.ReactElement {
    const [celsius, setCelsius] = React.useState(0);
    const [fahrenheit, setFahrenheit] = React.useState(0);
    const [temp, setTemp] = React.useState({ temperature: 0, scale: '' });

    function toCelsius(fahrenheit: number) {
        return (fahrenheit - 32) * 5 / 9;
    }
      
    function toFahrenheit(celsius: number) {
        return (celsius * 9 / 5) + 32;
    }

    const tryConvert = (temp: number) => {
        const rounded = Math.round(temp * 1000) / 1000;
        return rounded;
    }

    const handleChangeTemp = (scale: string,temp: number) => {
        setTemp({temperature: temp, scale: scale})
        // this.setState({scale: 'c', temperature});
    }

    React.useEffect(()=>{
        if (temp.scale === 'c') {
            setCelsius(temp.temperature);
            setFahrenheit(toFahrenheit(tryConvert(temp.temperature)))
        } else {
            setFahrenheit(temp.temperature);
            setCelsius(toCelsius(tryConvert(temp.temperature)))

        }
    },[temp])
    
    // handleFahrenheitChange(temperature) {
    //     this.setState({scale: 'f', temperature});
    // }
    return (
        <div>
            <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={handleChangeTemp} />
            <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={handleChangeTemp} />
            <BoilingVerdict
            celsius={celsius} />
        </div>
    )
}