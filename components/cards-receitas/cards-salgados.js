import Link from "next/link";
import Image from 'next/image';

//import das imagens usadas nos cards
import strogonoffFrango from '../../public/img/strogonoff-de-frango.jpg';
import batataRecheada from '../../public/img/batata-recheada.jpeg';
import arrozSoltinho from '../../public/img/arroz-soltinho.jpg';

//import receitas

const CardsSalgados = () => (
    <section>
        <h1>Receitas Salgadas</h1>
    <main>
        <ul class="cards">
            <li className="strogonoff-frango">
                <h2>Strogonoff de Frango</h2>
                <Image src= {strogonoffFrango}/>
                <p class="tempo-preparo">20 min de preparo</p>

                
            </li>
            <li className="batata-recheada">
                <h2>Batata Recheada</h2>
                <Image src= {batataRecheada}/>
                <p class="tempo-preparo">50 min de preparo</p>
            </li>
            <li className="arroz-soltinho">
                <h2>Arroz Soltinho</h2>
                <Image src= {arrozSoltinho}/>
                <p class="tempo-preparo">25 min de preparo</p>
            </li>
        </ul>
    </main>
    </section>
);
export default CardsSalgados;