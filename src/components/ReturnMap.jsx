import React, {Component} from 'react'

class ReturnMap extends Component{

    render(){
        const element_Arrary=[
            'react','200','Map'
        ]
    return (
        <ul>
        {element_Arrary.map(function(item) {
                return <li>{item}</li>;
         })}

        </ul>

    )

    }
}


export default ReturnMap;