import React, { useState, useEffect } from 'react'
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col
} from 'reactstrap'

import { collection, getDocs, getDoc, deleteDoc, doc, query, orderBy, where } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

import imgEntrada from "./imagenes/entrada.jpeg";
import imgAlmuerzo from "./imagenes/almuerzo.jpeg";
import imgRegresar from "./imagenes/regresar.jpeg";
import imgSalida from "./imagenes/salir.jpeg";
import './marcas.css';

//
function SetMarca(idMarca) {
	const hoy = new Date();

	console.log("Registrada " + idMarca + ' a las ' + hoy)
}

const Marcas = () => {

	//1- Configuramos los hooks
	const [marcas, SetMarcas] = useState([])

	//2- referenciamos a la DB firestore
	const marcasCollection = collection(db, "marcas")

	//3- Funcion para mostrar todos los docs
	const getMarcas = async () => {
		// const data = await getDocs(marcasCollection)
		const data = await getDocs(query(marcasCollection, orderBy('entrada')))


		SetMarcas(
			data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
		)
	}

	//6- usamos useEffect
	useEffect(() => {
		getMarcas()
	}, [])

	//7- Devolvemos vista de nuestro componente

	return (
		<>
			<Container className='container'>
				<div className="row center bg-gradient-primary text-white border-bottom-primary">
					<div className="col">
						<div className="container-fluid">
							<h1>Control de marcas</h1>
						</div>
					</div>
				</div>

				<hr></hr>
				<div className='row'>
					<div className='col col-md-3 border'>
						<div className='row'>
							<div className='col col-md-6'>
								<div className='card push_card bg-success text-white' onClick={e => SetMarca(1)}>
									<img className='card-imf-top' src={imgEntrada} alt="Entrada oficina"></img>
									<div className='card-body'>
										<h5 className='card-title'>Entrada</h5>
									</div>
								</div>
							</div>
							<div className='col col-md-6'>
								<div className='card push_card bg-warning text-white' onClick={e => SetMarca(2)}>
									<img className='card-imf-top' src={imgAlmuerzo} alt="Almuerzo"></img>
									<div className='card-body'>
										<h5 className='card-title'>Almuerzo</h5>
									</div>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className="w-100">
								<hr></hr>
							</div>
						</div>

						<div className='row'>
							<div className='col col-md-6 '>
								<div className='card push_card bg-info text-white' onClick={e => SetMarca(3)}>
									<img className='card-imf-top' src={imgRegresar} alt="Regreado de almuerzo"></img>
									<div className='card-body'>
										<h5 className='card-title'>Regreso</h5>
									</div>
								</div>
							</div>
							<div className='col col-md-6 '>
								<div className='card push_card bg-dark text-white' onClick={e => SetMarca(4)}>
									<img className='card-imf-top' src={imgSalida} alt="Salida de oficina"></img>
									<div className='card-body'>
										<h5 className='card-title'>Salida</h5>
									</div>
								</div>
							</div>
						</div>

					</div>
					<div className='col col-md-9 border'>
						<div className="col col-sm">
								<div className="card mt-2">
									<h5 className="card-header bg-gradient-primary text-white">
										Registro de marcas
									</h5>
									<div id="collapse-example" className="collapse show" aria-labelledby="heading-example">
										<div className="card">
											<table className="table table-striped table-dark">
												<thead>
													<tr>
														<th className='col-2'>Fecha</th>
														<th className="col-2">Usuario</th>
														<th className="col-2">Ingreso</th>
														<th className="col-2">Almuerzo</th>
														<th className="col-2">Regreso</th>
														<th className="col-2">Salida</th>
													</tr>
												</thead>
												<tbody>
													{marcas.map((marca) => (
														<tr key={marca.id}>
															<td>{marca.entrada.toDate().toLocaleDateString()} </td>
															<td>{marca.usuario} </td>
															<td>{marca.entrada.toDate().toLocaleTimeString('en-US')} </td>
															<td>{marca.almuerzo.toDate().toLocaleTimeString('en-US')} </td>
															<td>{marca.regreso.toDate().toLocaleTimeString('en-US')} </td>
															<td>{marca.salida.toDate().toLocaleTimeString('en-US')} </td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</div>
								</div>

							</div>
						
					</div>
				</div>
			</Container>
		</>
	)
}

export default Marcas