import './style.css'
export default function Answer({ answer }) {
    return (
        <div className='answer'>
            <p>{answer}</p>
            <div className='answers'>
            <div className='answersButton'>Não lembrei</div>
            <div className='answersButton'>Não lembrei</div>
            <div className='answersButton'>Não lembrei</div>
            </div>
        </div>

    )
}