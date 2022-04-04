import Link from "next/link";
import Image from 'next/image';

//import das imagens usadas nos cards
import palhaItaliana from '../../public/img/palha-italiana.jpg';
import boloChocoProteico from '../../public/img/bolo-choco-proteico.jpg';
import pudimChocoProteico from '../../public/img/pudim-proteico.jpg';

const CardsDoces= () => (
    <section>
        <h1>Receitas Doces</h1>
        <main>
            <ul class="cards">
                <li className="palha-italiana">
                    <h2>Palha Italiana</h2>
                    <Image src= {palhaitaliana}/>
                    <p class="tempo-preparo">10 min de preparo</p>
                </li>
                <li className="bolo-choco-proteico">
                    <h2>Bolo de Chocolate Proteico</h2>
                    <Image src= {boloChocoProteico}/>
                    <p class="tempo-preparo">50 min de preparo</p>
                </li>    
                <li className="pudim-choco-proteico">
                    <h2>"Pudim" Proteico de Chocolate</h2>
                    <Image src= {pudimChocoProteico}/>
                    <p class="tempo-preparo">25 min de preparo</p>
                </li>
            </ul>
        </main>
    </section>
);
export default CardsDoces;