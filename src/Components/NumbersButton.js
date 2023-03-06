import { colors } from "../utils/logicJS";
const NumbersButton = (props)=>{
return(
<button 
      className="number"
      style={{backgroundColor: colors[props.status]}}
      onClick={()=> props.onClick(props.number,props.status)}  >
      {props.number}
  </button>
);

}

export default NumbersButton;