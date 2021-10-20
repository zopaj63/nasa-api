import response from "./response.json";

function NasaVideo({ title, url, explanation }) {
    return (
        <div className="NasaVideo">
            <div>{title}</div>
            <iframe width="640" height="480" src={url} title={title} />
            <div>{explanation}</div>
        </div>
    );
}

function NasaImage({ title, url, explanation }) {
    return (
        <div className="NasaImage">
            <div>{title}</div>
            <figure>
                <img src={url} alt={title} />
                <figcaption>{explanation}</figcaption>
            </figure>
        </div>
    );
}

export default function NasaPlanetary() {
    /*     fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => response.json())
            .then(json => console.log(json)); */
    console.log(response);

    const Component = response.media_type === "video" ? NasaVideo : NasaImage;

    return (
        <div className="NasaPlanetary">
            <h1>NASA Planetary</h1>
            <Component
                title={response.title}
                explanation={response.explanation}
                url={response.url}
            />
        </div>
    );
}