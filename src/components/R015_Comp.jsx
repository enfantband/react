import React, {Component} from 'react';

class R015_Comp extends Component{

    componentDidMount(){
        var For_Arr = [3,2,8,8];
        let Map_newArr = Map_Arr.map(x => x)
        console.log("1. Map_newArr");

        let Map_multiArr = Map_arr.map(x => x * 2)
        console.log("2. Map_multiArr : " + Map_multiArr);

        var ObjArray = [{key: 'react', value:'200'},
                        {key: '리엑트',value : 'two hundred'}];

        let Map_objArr = ObjArray.map((obj,index) => {
            var Obj = {};
            Obj[obj.key] = obj.value;
            return Obj;
        });
    }

    render(){
        return(
            <div>this is r015 컴퍼넌트</div>
        )
    }
}

export default R014_Comp