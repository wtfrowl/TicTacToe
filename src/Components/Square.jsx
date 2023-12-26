export default function Square(props) {
    return(
<button onClick={props.onClick} className="bg-green-100 w-16 h-16 text-black font-bold border-purple-900 border-2 rounded">{props.value}</button>


    )   }
