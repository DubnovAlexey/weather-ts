import {useState} from "react";

const Form = ({getWeather}) => {
    const [city, setCity] = useState('');

    const handleClickSubmit = e => {
        e.preventDefault();
        getWeather(city);
        setCity('');
    }

    return (
        <form onSubmit={handleClickSubmit}>
            <input
                type={"text"}
                value={city}
                onChange={e => setCity(e.target.value)}
            />
            <button type={'submit'}>Get Weather</button>
        </form>
    )
}

export default Form;