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
						Desenvolvi um aplicativo através da plataforma Android Studio inicialmente desenvolvido em Java.
						A aplicação consistia em se comunicar com uma placa utilizando Bluetooth Low Energy para
						transmitir e recuperar dados da placa e apresentando estes dados no dispositivo.<br />
						Após o mvp concretizado desta aplicação, tomei liberdade em propor alterações no projeto em
						relação a arquiterua e utilização de padrões de projetos, no caso foi sugerido MVVM,
						além da transcrição do código para Kotlin, recriação dos layouts seguindo as guidelines
						do material design e a utilização de ConstraintLayout para tornar a interface mais
						responsiva.<br />
					</p>
				</li>
			</ul>
		</Container >
	);
}

export default Experience;