import App from "next/app";
import Home from '../components/home/home'
import Head from 'next/head'
import Salgadas from '../components/receitas/salgadas'

export default function Page() {
	return (
	  	<div>
			<Head>
				<title> Receitas da Marianna</title>
			</Head>
			<Home />
            <Salgadas />
			


	  	</div>

	)
}