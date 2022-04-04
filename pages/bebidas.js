import App from "next/app";
import Head from 'next/head'

import Home from '../components/home'
import Bebidas from "../components/cards-receitas/cards-bebidas";

export default function ReceitasdeBebidas() {
	return (
	  	<div>
			<Head>
				<title> Bebidas</title>
			</Head>
			<Home />
            <Bebidas />
	  	</div>

	);
};