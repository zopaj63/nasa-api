import { useEffect, useState } from "react";
import NasaImage from "../../components/NasaImage";
import NasaVideo from "../../components/NasaVideo";
import "./NasaPlanetary.css";


export default function NasaPlanetary() {

    const [state, setState] = useState(null);
    const [error, setError] = useState(null);

    // useEffect(() => { }, []);
    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            //.then(response => response.json())
            //.then(json => setState(json));
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    setError(response);
                }
            })
            .then(json => setState(json))
            .catch(error => setError(error));
    }, []);

    if (error !== null) {
        return <div>Something went wrong!(</div>;
    }

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
                copyright={state.copyright}
                date={state.date}
            />
            <a
                className="App-link"
                href="https://github.com/zopaj63/nasa-api"
                target="_blank"
                rel="noreferrer"
            >
                My GitHub Repository
            </a>
        </div>
    );
}