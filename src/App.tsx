import './App.css'
import Info from "./components/Info.tsx";
import Data from "./components/Data.tsx";

function App() {
  return (
    <div className={'wrapper'}>
      <div className={'main'}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-sm-5 info'}>
              <Info/>
            </div>
            <div className={'col-sm-7 form'}>
              <Data/>
            </div>
          </div>
        </div>
        {/* Ссылка на исходный код проекта */}
        <a
          className={'source-link'}
          href={'https://github.com/DubnovAlexey/weather-ts'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >Source code on GitHub</a>
      </div>
    </div>
  )
}

export default App
