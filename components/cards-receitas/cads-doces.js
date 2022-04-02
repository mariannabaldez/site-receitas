import Link from "next/link";
import Image from 'next/image';

//import das imagens usadas nos cards
import PalhaItaliana from '../../public/img/palha-italiana.jpg';
import BoloChocoProteico from '../../public/img/bolo-choco-proteico.jpg';
import PudimChocoProteico from '../../public/img/pudim-proteico.jpg';

const CardsDoces= () => (
    <section>
        <h1>Receitas Doces</h1>
        <main>
            <ul class="cards">
                <li>
                    <h2>Palha Italiana</h2>
                    <Image src= {PalhaItaliana}/>
                    <p class="tempo-preparo">10 min de preparo</p>
                </li>
                <li>
                    <h2>Bolo de Chocolate Proteico</h2>
                    <Image src= {BoloChocoProteico}/>
                    <p class="tempo-preparo">50 min de preparo</p>
                </li>    
                <li>
                    <h2>"Pudim" Proteico de Chocolate</h2>
                    <Image src= {PudimChocoProteico}/>
                    <p class="tempo-preparo">25 min de preparo</p>
                </li>
            </ul>
        </main>
    </section>
);
export default CardsDoces