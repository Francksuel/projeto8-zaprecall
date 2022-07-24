import './style.css';
import Card from '../Card/Card';

export default function Questions({ cards, status, setStatus }) {
    return (
        <div className="questions" >
            {cards.map((question, index) =>
                <Card question={question} index={index} status={status} setStatus={setStatus} key={index} />
            )}
        </div>
    )
}