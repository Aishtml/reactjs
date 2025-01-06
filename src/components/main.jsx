import './main.css'
export default function(props) {
    return (
    <main>
        <div className='wrapper'>
        <div className="card">
            <img className="card__image" src={props.data.img} alt="" />
            <h2 className="card__header">{props.data.name}</h2>
            <p>{props.data.size}</p>
            <p className="card__note">{props.data.additional.note}</p>
            <a className="card__link" href={props.data.additional.link}>Read more</a>
        </div>
        </div>
    </main>
    )}