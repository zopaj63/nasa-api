import "./NasaImage.css";

export default function NasaImage({ title, url, explanation, date, copyright }) {
    return (
        <div className="NasaImage">
            <h2>{title}</h2>
            <figure>
                <img src={url} alt={title} />
                <figcaption>{explanation}</figcaption>
            </figure>
            <p>Copyright: {copyright}, {date}</p>
        </div>
    );
}