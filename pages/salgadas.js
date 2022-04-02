import App from "next/app";
import Head from 'next/head';

import Home from '../components/home';
import Salgadas from '../components/cards-receitas/cards-salgados';

export default function Page() {
	return (
	  	<div className="conteudo">
			<Head>
				<title> Receitas Salgadas</title>
			</Head>
			<Home />
            <Salgadas />
	  	</div>
	);
};