import {createStore} from 'redux'
const intialState={
    count :10

};
const reducer=(state=intialState , action)=>{
    switch(action.type)
    {
        case 'INCREMENT':
        return Object.assign({},state,{count: state.count+1})
        default: return state;
    }
  

}
const Store= createStore(reducer)
export default Store ;