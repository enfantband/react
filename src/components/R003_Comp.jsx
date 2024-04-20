import React , { Component } from 'react';
import $ from 'jquery'

class R003_Comp extends Component{


    input_alert = (e) => {
        var input_val = $('#inputId').val();
        alert(input_val);
    }





    render(){
        return (
         <div>
           <h2>this is r003 comp</h2>
           <input id ="inputId" name="inputname"/>
           <button id="buttonId" onClick={ e => this.input_alert(e)} > jqurey button </button>
        </div>
        )
    }
}

export default R003_Comp;