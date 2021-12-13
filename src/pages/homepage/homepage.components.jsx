import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const Home = () => {

    return (
        <>
            <h2 
                style={{
                    backgroundColor: '#24aa87', 
                    borderRadius: 15, 
                    padding: 10, 
                    margin: 20, 
                    color: 'whitesmoke', 
                    textAlign: 'center', 
                    width: '19%'}}
                    >
                        Home
            </h2>
        <div style={{padding: 20, margin: 20, alignItems: 'center', alignSelf: 'center', marginLeft: '23%'}}>
        
        <div style={{width: '70%', alignContent: 'center'}}>
            <UncontrolledCarousel
                items={
                    [
                        {
                            altText: 'Slide 1',
                            //   caption: 'Slide 1',
                            key: 1,
                            src: "https://res.cloudinary.com/as-del-sur/image/upload/v1639410048/Cursos%20Y%20Certificaciones/React%20JS/beyhcnnb1umjwc3muy10.jpg"
                        },
                        {
                            altText: 'Slide 2',
                            //   caption: 'Slide 2',
                            key: 2,
                            src: 'https://res.cloudinary.com/as-del-sur/image/upload/v1639410048/Cursos%20Y%20Certificaciones/React%20JS/khzpaqjo3i80x71y4bb1.jpg'
                        },
                        {
                            altText: 'Slide 3',
                            //   caption: 'Slide 3',
                            key: 3,
                            src: 'https://res.cloudinary.com/as-del-sur/image/upload/v1639410048/Cursos%20Y%20Certificaciones/React%20JS/yayzbo5es8mvvht08o7e.jpg'
                        }
                    ]
                }
            />
        </div>
        
        </div>
        </>
    )}

export default Home