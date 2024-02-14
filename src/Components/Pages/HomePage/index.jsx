import chaves from '../../Services/chaves.json'


const HomePage = () => {
    console.log(chaves['themes'][0]);
    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return (
        <main>

            <h2>{ }</h2>
            <section>
                <div>


                </div>
                <div>
                    {
                        alfabeto.map((letra, indice) =>
                            <div key={indice}>
                                <h4>{letra}</h4>
                            </div>
                        )
                    }


                </div>
            </section>
        </main>

    )
}

export default HomePage;

