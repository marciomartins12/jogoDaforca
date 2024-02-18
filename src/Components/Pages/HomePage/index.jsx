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
        if (tentativas > 5) {
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
            <section className={Style.containerDividido}>
                <div className={Style.divimgs}>
                    <div><img src="/public/assets/FORCA.png" alt="imagem da forca" /></div>

                </div>
                <div className={Style.containerhintandletras}>


                    <div className={Style.containerLetras}>
                        {
                            alfabeto.map((letra, indice) =>
                                <button
                                    className={`${palavraExplode.includes(letra) ? Style.btn : Style.btnred}`}
                                    disabled={letrasClicadas.includes(letra)}
                                    onClick={() => {
                                        setletrasClicadas((item) => [...item, letra]);
                                        settentativas(tentativas + 1);

                                    }
                                    }
                                    key={indice}
                                >
                                    <h4>{letra}</h4>
                                </button>
                            )
                        }


                    </div>
                </div>
            </section>
            <div className={Style.containerkeyandDescr}>

                <div className={Style.containerPalavraChave}>
                    {palavraExplode.split("").map((item, indice) => <div key={indice} className={Style.letra}><h5 className={`${letrasClicadas.includes(item) ? Style.don : Style.dnone}`}>{item}</h5></div>)}
                </div>
                <p>{keyContents[2]}</p>
            </div>

        </main>

    )
}

export default HomePage;

