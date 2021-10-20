import { useEffect, useState } from "react";

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

    const [state, setState] = useState(null);

    // useEffect(() => { }, []);
    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => response.json())
            .then(json => setState(json));
    }, []);

    if (state === null) {
        return <div>Loading...</div>;
    }

    const Component = state.media_type === "video" ? NasaVideo : NasaImage;

    return (
        <div className="NasaPlanetary">
            <h1>NASA Planetary</h1>
            <Component
                title={state.title}
                explanation={state.explanation}
                url={state.url}
            />
        </div>
    );
}