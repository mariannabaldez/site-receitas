import Link from "next/link";
import Image from 'next/image';

//import das imagens usadas nos cards
import chocoQuente from '../../public/img/choco-quente.jpeg';
import cafeProteico from '../../public/img/cafe-proteico.png';
import mojito from '../../public/img/mojito.jpg';

const CardsBebidas = () => (
    <section>
        <h1>Receitas de CardsBebidas</h1>
        <main>
            <ul class='cards'>
                <li className="choco-quente">
                    <h2>Chocolate Quente</h2>
                    <Image src={chocoQuente}/>
                    <p class="tempo-preparo"></p>
                </li>
                <li className="cafe-proteico">
                    <h2>Café Proteico com Whey</h2>
                    <Image src={cafeProteico}/>
                    <p class="tempo-preparo"></p>
                </li>
                <li className="mojito">
                    <h2>Mojito</h2>
                    <Image src={mojito}/>
                    <p class="tempo-preparo"></p>
                </li>
            </ul>
        </main>
    </section>

);
export default CardsBebidas;