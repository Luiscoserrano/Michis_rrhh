import React from 'react'
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

import imgEntrada from "./imagenes/entrada.jpeg";
import imgAlmuerzo from "./imagenes/almuerzo.jpeg";
import imgRegresar from "./imagenes/regresar.jpeg";
import imgSalida from "./imagenes/salir.jpeg";
import './marcas.css';

//
function SetMarca(idMarca){
	const hoy = new Date();

	console.log("Registrada " + idMarca + ' a las ' + hoy)
}

const marcas = () => {
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
											<tr>
												<th className="col-2">31/03/2022</th>
												<td className="col-2">JMONTERO</td>
												<td className="col-2">07:55 a.m.</td>
												<td className="col-2">12:00 p.m.</td>
												<td className="col-2">12:57 p.m.</td>
												<td className="col-2">06:10 p.m.</td>
											</tr>
											<tr>
												<th scope="row">31/03/2022</th>
												<td>MBURQUE</td>
												<td>08:25 a.m.</td>
												<td>12:00 p.m.</td>
												<td>12:55 p.m.</td>
												<td>06:00 p.m.</td>
											</tr>
											<tr>
												<th scope="row">31/03/2022</th>
												<td>JMIRANDA</td>
												<td>08:30 a.m.</td>
												<td>12:10 p.m.</td>
												<td>01:10 p.m.</td>
												<td>05:55 p.m.</td>
											</tr>
											<tr>
												<th scope="row">31/03/2022</th>
												<td>RREDONDO</td>
												<td>08:20 a.m.</td>
												<td>12:00 p.m.</td>
												<td>12:57 p.m.</td>
												<td>06:05 p.m.</td>
											</tr>
											<tr>
												<th scope="row">31/03/2022</th>
												<td>LCORRALES</td>
												<td>08:30 a.m.</td>
												<td>01:00 p.m.</td>
												<td>02:00 p.m.</td>
												<td>06:00 p.m.</td>
											</tr>
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

export default marcas