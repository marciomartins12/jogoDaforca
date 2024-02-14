import { useState } from 'react';
import chaves from '../../Services/chaves.json'


const HomePage = () => {
    console.log(chaves['themes'][0]);

    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const [letrasClicadas, setletrasClicadas] = useState([]);
    return (
        <main>

            <h2>{ }</h2>
            <section>
                <div>


                </div>
                <div>
                    {
                        alfabeto.map((letra, indice) =>
                            <button
                                disabled={letrasClicadas.includes(letra)}
                                onClick={() => {
                                    setletrasClicadas((item) => [...item, letra])
                                }
                                }
                                key={indice}
                            >
                                <h4>{letra}</h4>
                            </button>
                        )
                    }

                    <button onClick={() => trocaNome}>clickNEXTNAME</button>
                </div>
            </section>
        </main>

    )
}

export default HomePage;

