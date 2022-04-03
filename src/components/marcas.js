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

          <div className="row">
            <div className="col-sm-3">
              <div className="card-group text-center">
                <div className="card text-white text-center mt-2 rounded"> 
                  <img className="img-thumbnail" src={imgEntrada} alt="Card image cap"/> 
                  <div className="card-body bg-success"> 
                    <h5 className="card-title">Ingreso</h5> 
                  </div> 
                </div>

                <div className="card text-white text-center mt-2 rounded"> 
                  <img className="img-thumbnail" src={imgAlmuerzo} alt="Card image cap"/> 
                    <div className="card-body bg-warning  mt-0"> 
                      <h5 className="card-title">Almuerzo</h5> 
                    </div> 
                </div>

                <div className="w-100"></div>
            
                <div className="card text-white mt-2 rounded"> 
                  <img className="img-thumbnail" src={imgRegresar} alt="Card image cap"/> 
                  <div className="card-body bg-info  mt-0"> 
                    <h5 className="card-title">Regreso Almuerzo</h5> 
                  </div> 
                </div> 

                <div className="card text-white mt-2 rounded"> 
                  <img className="img-thumbnail" src={imgSalida} alt="Card image cap"/> 
                  <div className="card-body bg-dark mt-0"> 
                    <h5 className="card-title">Salida</h5> 
                  </div> 
                </div> 
              </div>
            </div>


            <div className="col-sm">
			<div className="card mt-2">
				<h5 className="card-header">
					<a data-toggle="collapse" href="#collapse-example" aria-expanded="true" aria-controls="collapse-example" id="heading-example" className="d-block">
						<i className="fa fa-chevron-down pull-right"></i>
						Registro de marcas
					</a>
				</h5>
				<div id="collapse-example" className="collapse show" aria-labelledby="heading-example">
					<div className="card">
						<table className="table table-striped table-dark"> 
							<thead> 
								<tr> 
									<th scope="col">Fecha</th> 
									<th scope="col">Usuario</th> 
									<th scope="col">Ingreso</th> 
									<th scope="col">Almuerzo</th>
									<th scope="col">Regreso</th>
									<th scope="col">Salida</th>				
								</tr> 
							</thead> 
							<tbody> 
								<tr> 
									<th scope="row">31/03/2022</th> 
									<td>JMONTERO</td> 
									<td>07:55 a.m.</td> 
									<td>12:00 p.m.</td>
									<td>12:57 p.m.</td>
									<td>06:10 p.m.</td>				
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

        </Container>
    </>
  )
}

export default marcas