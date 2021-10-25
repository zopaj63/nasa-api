import "./NasaVideo.css";

export default function NasaVideo({ title, url, explanation, date, copyright }) {
    return (
        <div className="NasaVideo">
            <h2>{title}</h2>
            <iframe width="640" height="480" src={url} title={title} />
            <div>{explanation}</div>
            <p>Copyright: {copyright}, {date}</p>
        </div>
    );
}