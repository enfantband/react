import React from 'react';

function Function2(props){

    alert(props.contents);
    alert(props.my);
    let  contents   = props.contents;
    let  my  = props.my;

    return (
      <div><h1>{contents}
       {my} assdfa</h1></div>
    )
}



export default Function2;