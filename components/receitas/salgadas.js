import Link from "next/link";
import Image from 'next/image'
import picture from '../../public/img/strogonoff-frango.webp'

const Salgadas = () => (
    <div>
        <h1>Receitas Salgadas</h1>
    <main>
        <ul class="cards">
            <li>
                <h2>Strogonoff de Frango</h2>
                <Image src= {picture}/>
                <p class="tempo-preparo">20 min de preparo</p>
            </li>
            <li>
                <h2>Batata Recheada</h2>
                {/* <img src="../img/batata-recheada.jpeg"> */}
                <p class="tempo-preparo">50 min de preparo</p>
            </li>
            <li>
                <h2>Arroz Soltinho</h2>
                {/* <img src="../img/arroz-soltinho.jpg"> */}
                <p class="tempo-preparo">25 min de preparo</p>
            </li>
        </ul>
    </main>
    </div>
)

export default Salgadas;