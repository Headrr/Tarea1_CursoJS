import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col, CardSubtitle, CardTitle, CardFooter, CardImg, Button,  Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import { Clock, User, Bookmark } from 'react-feather';
import Flags from 'country-flag-icons/react/3x2'

const CardItem = (props) => {
    const {name, descripcion, prep, etiquetas, tiempo, porciones, receta, tipo, url} = props;

    const [centeredModal, setCenteredModal] = useState(false);
    useEffect(() => {
      const openModal = async () => {
        setCenteredModal(centeredModal);
      };
    openModal();
    }, [centeredModal]);

    const openModal = () => {
        setCenteredModal(!centeredModal);
    };
    console.log(receta?.MASA)

    const masa = Object.entries(receta?.MASA).map(([key, value]) => (

        <li>
          {value}
        </li>

    ));   

    const relleno = Object.entries(receta?.RELLENO).filter((receta)=> receta.length > 0). map(([key, value]) => (

        <li style={{listStyle: 'outside'}}>
          {value}
        </li>

    )); 
    console.log(relleno);

    const topping = Object.entries(receta?.TOPPING).filter((receta)=> receta.length > 0). map(([key, value]) => (
   
        <li>
          {value}
        </li>
    
    )); 
    
    const ingredientes = Object.entries(receta?.INGREDIENTES).filter((receta)=> receta.length > 0). map(([key, value]) => (
   
        <li>
          {value}
        </li>
    
    )); 
    
    // console.log("JSON",JSON.stringify(receta?.MASA));
    // const listado = JSON.stringify(receta?.MASA[1]);
    // console.log("LISTADO", listado);

    const tipoComida = (tipo) => {
        if (tipo === 'China') return (<Flags.CH title="China" style={{width: '12%', borderRadius: 10}}/>)
        if (tipo === 'Española') return (<Flags.ES title="España" style={{width: '12%'}}/>)
        if (tipo === 'Chilena') return (<Flags.CL title="Chile" style={{width: '12%'}}/>)
        if (tipo === 'Italiana') return (<Flags.IT title="Italia" style={{width: '12%'}}/>)
    }
    return (

    <div style={{display: 'flex', flexDirection: 'column', height: 550, width: '22%', alignItems: 'center', marginRight: 20, marginLeft: 20, marginBottom: 40}}>
        <Card style={{borderRadius: 15, marginBottom: 20}}>
            <CardHeader style={{backgroundColor: '#a0a0a0ba', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
                <CardTitle>
                    <Row style={{justifyContent: 'space-between', margin: 10}}>
                        <h3>{name}</h3>
                        {tipoComida(tipo)}                           
                    </Row>                        
                </CardTitle>
                <CardSubtitle>
                    <Row align="left">
                        <Col>                              
                            {etiquetas.map(item => (
                                <span style={{margin: 3}}><i>{item}</i></span>
                            ))}
                        </Col>

                    </Row>
                </CardSubtitle>
            </CardHeader>
            <CardBody>
                <CardImg
                    component="img"
                    height="194"
                    // src="https://mui.com/static/images/cards/paella.jpg"
                    src={url}
                    alt="Paella dish"
                    style={{borderRadius: 10}}
                />

                <div style={{textAlign: 'justify', marginTop: 10, height: 110}}>
                    <i>{descripcion}</i>
                </div>

                <Row>
                    <Col align="right">
                        <Button size="sm" color="light" style={{backgroundColor: '#ff530d', color: 'white'}}
                        onClick={() => openModal()}>Ver receta</Button>
                    </Col>
                </Row>

            </CardBody>
            <CardFooter style={{backgroundColor: '#a0a0a0ba', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
                <Col>
                    <Clock size={20}/> Tiempo de preparación: <strong>{tiempo}</strong> minutos
                </Col>

                <Col>
                    <User size={20}/> Porciones: <strong>{porciones}</strong>
                </Col>

            </CardFooter>
        </Card>

        <Modal
            isOpen={centeredModal}
            toggle={() => setCenteredModal(!centeredModal)}
            className="modal-xl"
            centered={true}
            style={{marginTop:'7%'}}
        >
            <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>
                <h4> Receta {name} </h4>
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col style={{width: '25%', textAlign: 'left'}} align="center">
                    <div>
                    <strong><h3> <Bookmark size={25}/> <i>Ingredientes</i></h3></strong>
                    <hr/>
                        <Row>
                        {receta?.MASA.length > 0 ?  
                            <Col>
                                Masa:
                                <br/>
                                <span>{masa}</span><br/>
                            </Col> : null}
                            
                        {receta?.RELLENO.length > 0 ?  
                            <Col colSpan={4} style={{width: 100}}>
                                Relleno:
                                <br/>
                                <span>{relleno}</span><br/>
                            </Col> : null}

                        {receta?.TOPPING.length > 0 ? 
                            <Col style={{width: '10%'}}>
                                Topping:
                                <br/>
                                <span>{topping}</span><br/>
                            </Col> : null}

                        {receta?.INGREDIENTES.length > 0 ?  
                            <Col>
                            <br/>
                            <span>{ingredientes}</span><br/>
                        </Col> : null}

                        </Row>

                    </div>
                </Col>
                </Row>
                <Row>
                <Col style={{textAlign: 'justify', width: '20%'}}>
                    <div style={{textAlign: 'justify'}}>
                        <hr/>
                    <strong><h3> <Bookmark size={25}/> <i>Preparación</i></h3></strong>
                    <hr/>
                        {prep}
                    </div>
                </Col>
            </Row>

            </ModalBody>
            <ModalFooter></ModalFooter>
        </Modal>
          
    </div>
)};

export default CardItem
