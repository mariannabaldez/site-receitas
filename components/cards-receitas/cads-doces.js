import Link from "next/link";
import Image from 'next/image';

//import das imagens usadas nos cards
import palha-italiana from '../../public/img/palha-italiana.jpg';
import bolo-choco-proteico from '../../public/img/bolo-choco-proteico.jpg';
import pudim-proteico from '../../public/img/pudim-proteico.jpg';

export default const CardsDoces= () => (
    <section>
        <h1>Receitas Doces</h1>
        <main>
            <ul class="cards">
                <li>
                    <h2>Palha Italiana</h2>
                    <Image src= {palha-italiana}/>
                    <p class="tempo-preparo">10 min de preparo</p>
                </li>
                <li>
                    <h2>Bolo de Chocolate Proteico</h2>
                    <Image src= {bolo-choco-proteico}/>
                    <p class="tempo-preparo">50 min de preparo</p>
                </li>    
                <li>
                    <h2>"Pudim" Proteico de Chocolate</h2>
                    <Image src= {pudim-proteico}/>
                    <p class="tempo-preparo">25 min de preparo</p>
                </li>
            </ul>
        </main>
    </section>
);