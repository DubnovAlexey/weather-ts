import {type FormEvent, useState} from "react";

interface Props {
  getWeather: (city: string) => void
  
}
const Form = ({getWeather}: Props) => {
    const [city, setCity] = useState('');

    const handleClickSubmit = (e: FormEvent<HTMLFormElement>) => {
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