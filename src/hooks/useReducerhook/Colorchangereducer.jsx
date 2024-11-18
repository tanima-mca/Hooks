import React, { useReducer } from 'react';

const colorReducer = (state, action) => {
//   const c = colorVariant.find((e) => e.value === action.type); 
//   if (c) {
  // return { color: c.value }; 
    return { color: action.type}; 
//   }
//   return state;
 };

const colorVariant = [
  { name: "Red", value: '#d50000' },
  { name: "Blue", value: '#1a237e' },
  { name: "Green", value: '#2e7d32' },
  { name: "Brown", value: '#4e342e' },
  { name: "Black", value: '#000000' },
];

const Colorchangereducer = () => {
  const initialstate = { color: "#922B21" }; 

  const [state, dispatch] = useReducer(colorReducer, initialstate);

  return (
    <>
      <select name="colorchange" onChange={(e) => dispatch({ type: e.target.value })}>
        {colorVariant.map((item) => (
          <option key={item.name} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <div style={{ backgroundColor: state.color, height: "100px", width: "100px" }}></div>
    </>
  );
};

export default Colorchangereducer;
