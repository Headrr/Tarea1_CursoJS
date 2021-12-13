import React from 'react'
import RECETAS_DATA from '../../data/recetas.data';
import CardPreview from '../../components/card-preview/card-preview.component';
import { Row, Col } from 'reactstrap';

class Recetas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recetas: RECETAS_DATA,
            opcion: "Opciones"
        }
    }

    render() {
        const { recetas } = this.state

        return (

            <div>
            <Row style={{marginHorizontal: 20, width: '40%', flexDirection: 'row'}}>
                <Col>
                    <h2 
                        style={{
                            backgroundColor: '#24aa87', 
                            borderRadius: 15, 
                            padding: 10, 
                            margin: 20, 
                            color: 'whitesmoke', 
                            textAlign: 'center', 
                            width: '50%'}}
                            >
                                Lista de recetas
                    </h2>
                </Col>
           
                {/* <Col align="right" style={{flexDirection: 'column'}}>
                <Input 
                    type="text" 
                    style={{margin: 20, borderRadius: 10, width: '80%', height: '60%'}}
                    placeholder="Buscar recetas" 
                    >

                </Input>

                <Input type="select" name="opciones" name="opciones" id="opciones">
                    <option hidden>--seleccione</option>
                    <option value="Mundo">Recetas del mundo</option>
                    <option value="Chile">Recetas chilenas</option>
                </Input>

                </Col>
                
                <Col align="left" style={{marginTop: 15}}>
                <Button
                style={{margin: 20, borderRadius: 10, width: '40%', height: '70%'}}>
                    Buscar
                </Button>
                </Col> */}
            </Row>
                {
                    recetas
                        .map(({ id, ...otherCollectionsProps }) => (
                            <CardPreview key={id} {...otherCollectionsProps}/>
                ))}

            </div>
        )
    }
}

export default Recetas