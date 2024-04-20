import React, { PureComponent } from 'react'

class PureComp extends PureComponent{

    constructor(props){

        super(props);
        this.state = {
            StateString : 'react',
            SatateArrayObj: ['react',{react:'200'}]
        }
    }
    

    buttonClick = (type) =>{
        if(type === 'String'){
            alert('react');
            this.setState({ StateString: 'react'});
        }else{
            alert('array');
            this.setState({ SatateArrayObj: ['react',{react:'200'}]})
        }
    }

    render(){
        alert('tt');
        return(
            <div>
                <button onClick={e => this.buttonClick('String')}>  문자열 변경 </button>
                <button onClick={e => this.buttonClick('ArrayObject')} >  겍체 배열 변경</button>
            </div>
        )
    }
}

export default PureComp;