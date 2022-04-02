import Link from "next/link";
import Image from 'next/image';

//import das imagens usadas nos cards
import strogonoff-frango from '../../public/img/strogonoff-frango.webp';
import batata-recheada from '../../public/img/batata-recheada.jpeg';
import arroz-soltinho from '../../public/img/arroz-soltinho.jpg';

const Salgadas = () => (
    <div>
        <h1>Receitas Salgadas</h1>
    <main>
        <ul class="cards">
            <li>
                <h2>Strogonoff de Frango</h2>
                <Image src= {strogonoff-frango}/>
                <p class="tempo-preparo">20 min de preparo</p>
            </li>
            <li>
                <h2>Batata Recheada</h2>
                <Image src= {batata-recheada}}/>
                <p class="tempo-preparo">50 min de preparo</p>
            </li>
            <li>
                <h2>Arroz Soltinho</h2>
                <Image src= {arroz-soltinho}}/>
                <p class="tempo-preparo">25 min de preparo</p>
            </li>
        </ul>
    </main>
    </div>
)

export default Salgadas;