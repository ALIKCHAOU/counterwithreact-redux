import React  from 'react';
import { connect } from "react-redux";



const Counter=(props)=>
           {
               console.log('rerender',props);
               return (
            <div className="counter">
                <h1>i'm a counter </h1>
                <p>count: {props.count}</p>
                <button onClick={props.onIncrementClick}>Increment </button>
            </div>)
            };
       
function MapstatetoProps(state)
{ console.log('mapstate to props',state)
    return {
        count:state.count
    }
}
function  mapDispatchToProps (dispatch)
{
    return {
      onIncrementClick:()=>{
      console.log('clickin');
      const action ={type:'INCREMENT'};
      dispatch(action);
      }
    }
}


export default connect (MapstatetoProps,mapDispatchToProps)(Counter);
