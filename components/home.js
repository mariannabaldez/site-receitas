import Link from "next/link";
import Image from "next/image";

import utensilios from '../public/img/utensilios-de-cozinha.png';

const linkStyle = {
    marginRight: 15
}
const Home = () => (
    <header>
        <div class="centralizar-cabecalho">
            <Image src={utensilios}/>
            <div class="titulo-cabecalho"><h2>Receitas da Marianna</h2></div>

            <nav>
                <ul>
                    <li><a href="./">home</a></li>
                    <li><a href="/salgadas">receitas salgadas</a></li>
                    <li><a href="/doces">receitas doces</a></li>
                    <li><a href="/bebidas">bebidas</a></li>
                </ul>
            </nav>
        </div>    
    </header>
)

export default Home;