import { useReducer } from "react";

const colorChanger = (state, action) => {
if (action.type === "red") {
        if (state?.color === "red") {
            return {color: "blue"};
        } else {
            return {color: "red"};
        }
    }
};

export default function ColorchangeR() {

    const initialColor = {
        color: "white",
    };

    const [state, dispatch] = useReducer(colorChanger, initialColor);
  return (
    <div>
        <div style={{backgroundColor: state.color}}>{state.color}</div>
        <button onClick={() => dispatch({type: "red"})}>Change Color</button>
    </div>
  )
}