import './style.css'
export default function Questions (){
const bolinha=[
    {question:"pergunta 0", answer:"resposta 0"},
    {question:"pergunta 1", answer:"resposta "},
    {question:"pergunta 0", answer:"resposta 0"},
    {question:"pergunta 1", answer:"resposta "}, 
    {question:"pergunta 0", answer:"resposta 0"},
    {question:"pergunta 1", answer:"resposta "},     
]
function Question ({question,index}){
    return (
        <div className="question" > <p>Pergunta {index+1}</p><ion-icon name="play-outline"></ion-icon> </div>
    )
}

    return (
        <div className="questions" >        
        {bolinha.map ( (question,index)=> <Question question={question} index={index} />  )}   
        </div>     
    )
}