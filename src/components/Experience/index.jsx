import React from 'react';

import { Container } from './styles.js';

function Experience() {
	return (
		<Container id="experience">
			<h1>&lt;Experiência/&gt;</h1>
			<ul>
				<li>
					<h2>Lactec - Estagiário Técnico</h2>
					<small>(2020 - 2021)</small>
					<p>
						Desenvolvi um aplicativo Android, usando AndroidStudio com as linguagens Java e
						Kotlin. Na empresa tive contato com a área de pesquisa e desenvolvimento, onde
						pude obter conhecimentos técnicos como desenvolvimento mobile, comunicação entre
						dispositivos através de Bluetooth Low Energy, construção de layouts responsivos
						e noções de UX, além destes pontos obtive o costume de boas práticas em
						versionamento, documentação, revisão e testes de código.
					</p>
				</li>
			</ul>
		</Container>
	);
}

export default Experience;