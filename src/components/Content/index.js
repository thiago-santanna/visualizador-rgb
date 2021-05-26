import React, {useState} from 'react';
import './style.css'

const Content = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const [containerColors, setContainerColors] = useState([])

    const selectedColor = (r, g, b) => `rgb(${r}, ${g}, ${b})`

    const handleSelectColor = (rgb) => {
        setContainerColors(rgb)
    }

    const handleRandonColor = () => {
        const randomRed = Math.floor(Math.random() * 255)
        const randomGreen = Math.floor(Math.random() * 255)
        const randomBlue = Math.floor(Math.random() * 255)

        setRed(randomRed)
        setGreen(randomGreen)
        setBlue(randomBlue)
    }
    return (
        <>
            <main>
                <div className="cor-selecionada" style={{backgroundColor: selectedColor(red, green, blue)}}></div>

                <div className="container">
                    <h3>Red - {red}</h3>
                    <input
                      type="range"
                      min={0}
                      max={255}
                      value={red}
                      onChange={({target}) => setRed(target.value)} />

                    <h3>Green - {green}</h3>
                    <input
                      type="range"
                      min={0}
                      max={255}
                      value={green}
                      onChange={({target}) => setGreen(target.value)} />

                    <h3>Blue - {blue}</h3>
                    <input
                      type="range"
                      min={0}
                      max={255} 
                      value={blue}
                      onChange={({target}) => setBlue(target.value)} />

                    <button onClick={() => handleSelectColor((oldValue) => [[red, green, blue], ...oldValue])}>
                            Selecione a cor.
                    </button>

                    <button onClick={() => handleRandonColor()}>
                        Cores aleatórias
                    </button>
                </div>

                <div className="lista-cores">
                    <ul>
                        {containerColors.map( color => (
                            <li>
                                <div className="cor" style={{backgroundColor: selectedColor(color[0], color[1], color[2])}}>

                                </div>
                                <h4>{`RGB - ${color[0]}, ${color[1]}, ${color[2]}`}</h4>
                            </li>
                        ))}
                    </ul>
                </div>

            </main>            
        </>
    );
}

export default Content;
