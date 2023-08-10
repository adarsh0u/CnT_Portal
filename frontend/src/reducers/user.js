const reducer = (state=[],action) =>{
    switch(action.type){
      case 'REGISTER':
          return [...state, action.payload];
      case 'LOGIN':
          return action.payload;
      case 'UPDATE':
          return state.map(item =>
               item.id===action.payload.id?action.payload:item);
      default:
          return state;
    }
  }
  export default reducer;