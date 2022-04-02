import Link from "next/link";

const linkStyle = {
    marginRight: 15
}
const Home = () => (

    <header>
        <div class="centralizar-cabecalho">
            {/* <h1><img src="./img/utensilios-de-cozinha.png"></h1> */}
            <div class="titulo-cabecalho"><h2>Receitas da Marianna</h2></div>

            <nav>
                <ul>
                    <li><a href="./">home</a></li>
                    <li><a href="/salgadas">receitas salgadas</a></li>
                    <li><a href="/doces">receitas doces</a></li>
                </ul>
            </nav>
        </div>
            
    </header>
    )


export default Home;