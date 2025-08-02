export default function Titulo(props){
    return(
        <div>
            <h1 className="text-4xl text-purple-500 font-extrabold mb-10 text-center">
                {props.titulo}    
            </h1>
        </div>
        
    );
}