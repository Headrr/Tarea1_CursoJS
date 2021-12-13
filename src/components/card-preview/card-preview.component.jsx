import React from 'react'
import CardItemComponent from '../card-item/card-item.component';

const CardPreview = ({ items }) => (

    <div>
        <div 
            style={{
                display: 'flex', 
                justifyContent: 'space-between'
                }}>
                    {items
                        // .filter((item, idx) => idx < 4)
                        .map(({ id, ...otherItemsProps }) => (
                            <CardItemComponent key={id} {...otherItemsProps}/>

                        ))
                    }
        </div>
    </div>
) 

export default CardPreview
