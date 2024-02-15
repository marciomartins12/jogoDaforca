import { useEffect, useState } from 'react';
import chaves from '../../Services/chaves.json';
import Style from './homepage.module.css';

const HomePage = () => {

    const [letrasClicadas, setletrasClicadas] = useState([]);
    const [keyContents, setkeyContets] = useState([]);
    const [tentativas, settentativas] = useState(0);
    const [tenteoutravez, setTenteoutravez] = useState();
    
    const eventListenerFal  = ()=>{
        setTenteoutravez(true)
        setletrasClicadas([]);
    }
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

    return (
        <main className={Style.container}>

            <h2>{keyContents[0]}</h2>
            <section className={Style.containerDividido}>
                <div>
                    <div><img src="/public/assets/FORCA.png" alt="imagem da forca" /></div>
                    <div>
                       palavra chave antes da logica == {keyContents[1]}
                    </div>

                </div>
                <div className={Style.containerhintandletras}>

<p>{keyContents[2]}</p>
                    <div className={Style.containerLetras}>
                        {
                            alfabeto.map((letra, indice) =>
                                <button
                                    className={Style.btn}
                                    disabled={letrasClicadas.includes(letra)}
                                    onClick={() => {
                                        setletrasClicadas((item) => [...item, letra]);
                                        settentativas(tentativas+1);
                                        if(tentativas >=6){
                                            eventListenerFal()
                                        }
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
        </main>

    )
}

export default HomePage;

