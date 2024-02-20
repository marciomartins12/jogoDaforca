import { useEffect, useState } from 'react';
import chaves from '../../Services/chaves.json';
import Style from './homepage.module.css';

const HomePage = () => {

    const [letrasClicadas, setletrasClicadas] = useState([]);
    const [keyContents, setkeyContets] = useState([]);
    const [tentativas, settentativas] = useState(0);
    const [tenteoutravez, setTenteoutravez] = useState();

    const eventListenerFal = () => {
        setTenteoutravez(Math.random())
        setletrasClicadas([]);
        settentativas(0);
    }
    useEffect(() => {
        if (tentativas >= 6) {
            alert("perdeu. tente novamente")
            eventListenerFal();
        }
    }, [tentativas]);

    useEffect(() => {
        let array = chaves['themes'][Math.floor(Math.random() * chaves['themes'].length)]
        setkeyContets([
            array['name'],
            array['words'][Math.floor(Math.random() * array['words'].length)]['word'],
            array['words'][Math.floor(Math.random() * array['words'].length)]['hint']
        ]);

    }, [tenteoutravez]);





    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v'
        , 'w', 'x', 'y', 'z'];


    let palavraExplode = keyContents[1] ?? ""

    return (

        <main className={Style.container}>

            <h2>{keyContents[0]}</h2>

            <section>
                <div className={Style.imagem}>

                    {
                        <img src={`public/assets/${tentativas}.png`} alt={`tentativa numero ${tentativas}`} />
                    }
                    <div className={Style.containerkeyandDescr}>
                        <div className={Style.lacunas}>
                            {palavraExplode.split("").map((item, indice) => <div key={indice} className={Style.letra}><h5 className={`${letrasClicadas.includes(item) ? Style.don : Style.dnone}`}>{item}</h5></div>)}
                        </div>
                        <p>dica : {keyContents[2]}</p>
                    </div>

                </div>


                <div className={Style.containerLetras}>
                    {
                        alfabeto.map((letra, indice) =>
                            <button
                                key={indice}
                                className={`${palavraExplode.includes(letra) ? Style.btn : Style.btnred}`}
                                disabled={letrasClicadas.includes(letra)}
                                onClick={() => {
                                    setletrasClicadas((item) => [...item, letra]);
                                    if (!palavraExplode.includes(letra)) {
                                        settentativas(tentativas + 1);
                                    }
                                }
                                }
                            >
                                <h4>{letra}</h4>
                            </button>
                        )
                    }
                </div>

            </section>

        </main>

    )
}

export default HomePage;

