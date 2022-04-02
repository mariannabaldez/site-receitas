import App from "next/app";
import Head from 'next/head'

import Home from '../components/home'
import Doces from "../components/cards-receitas/cads-doces";

export default function ReceitasDoces() {
	return (
	  	<div>
			<Head>
				<title> Receitas Doces</title>
			</Head>
			<Home />
            <Doces />
	  	</div>

	);
};