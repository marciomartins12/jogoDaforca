import { useEffect, useState } from 'react';
import chaves from '../../Services/chaves.json';
import Style from './homepage.module.css';

const HomePage = () => {

    const [letrasClicadas, setletrasClicadas] = useState([]);
    const [keyContents, setkeyContets] = useState([]);
    const [tentativas, settentativas] = useState(0);
    const [tenteoutravez, setTenteoutravez] = useState();
    let [contadorletrasCorretas, setcontadorletrasCorretas] = useState([]);
    let [venceu, setvenceu] = useState(false);
    let palavraExplode = keyContents[1] ?? "";
    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v'
        , 'w', 'x', 'y', 'z'];

    const eventListenerFal = () => {
        setTenteoutravez(Math.random())
        setletrasClicadas([]);
        setcontadorletrasCorretas([]);
        settentativas(0);
    }


    useEffect(() => {
        let array = chaves['themes'][Math.floor(Math.random() * chaves['themes'].length)]
        setkeyContets([
            array['name'],
            array['words'][Math.floor(Math.random() * array['words'].length)]['word'],
            array['words'][Math.floor(Math.random() * array['words'].length)]['hint']
        ]);

    }, [tenteoutravez]);



    useEffect(() => {
     
        if (keyContents[1] && contadorletrasCorretas.length === palavraExplode.length) {
            let letrasOrdenadasCorretas = [...contadorletrasCorretas].sort().join('');
            let letrasOrdenadasExplode = [...palavraExplode].sort().join('');
            console.log(letrasOrdenadasCorretas, "e", letrasOrdenadasExplode)
            if (letrasOrdenadasCorretas === letrasOrdenadasExplode) {
                setvenceu(true);
                console.log(venceu)
            }
        }
    }, [contadorletrasCorretas]);



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
                                    } else {
                                        setcontadorletrasCorretas((letras) => [...letras, letra])
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
            <div className={tentativas >= 6 ? Style.perdeu : Style.wait}>
                <div>
                    <p>voce perdeu</p>
                    <p>a palavra era <span>'{keyContents[1]}'</span></p>
                    <button onClick={() => {
                        settentativas(0)
                        eventListenerFal()
                    }
                    }>tentar novamente</button>
                </div>
            </div>
            <div className={venceu? Style.vitoria : Style.wait}>
                <div>
                    <p>voce venceu</p>
                    <button onClick={() => {
                        settentativas(0)
                        setvenceu(false)
                        eventListenerFal()
                    }
                    }>jogar novamente</button>
                </div>
            </div>
        </main>

    )
}

export default HomePage;

