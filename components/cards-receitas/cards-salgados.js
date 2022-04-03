import Link from "next/link";
import Image from 'next/image';

//import das imagens usadas nos cards
import StrogonoffFrango from '../../public/img/strogonoff-de-frango.jpg';
import BatataRecheada from '../../public/img/batata-recheada.jpeg';
import ArrozSoltinho from '../../public/img/arroz-soltinho.jpg';

const CardsSalgados = () => (
    <section>
        <h1>Receitas Salgadas</h1>
    <main>
        <ul class="cards">
            <li className="strogonoff-frango">
                <h2>Strogonoff de Frango</h2>
                <Image src= {StrogonoffFrango}/>
                <p class="tempo-preparo">20 min de preparo</p>
            </li>
            <li className="batata-recheada">
                <h2>Batata Recheada</h2>
                <Image src= {BatataRecheada}/>
                <p class="tempo-preparo">50 min de preparo</p>
            </li>
            <li className="arroz-soltinho">
                <h2>Arroz Soltinho</h2>
                <Image src= {ArrozSoltinho}/>
                <p class="tempo-preparo">25 min de preparo</p>
            </li>
        </ul>
    </main>
    </section>
);
export default CardsSalgados;