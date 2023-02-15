/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../themes/theme";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";

const FeaturedMovie = () => {

    const style = css`
    width: 100%;
    height: 100%;
    border-radius: 2rem;

    `

    const [feature, setFeature] = useState();
    const [backdrop, setBackdrop] = useState();
    const [loading, setLoading] = useState(true);
    const [reloadImage, setReloadImage] = useState(true);

    useEffect(() => {
        if (reloadImage){
        let random = Math.floor(Math.random()*19)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=d27cfb6baa191e1cd0eaa5f32b9e1d80&language=en`)
        .then(response => setFeature(response.data.results[random]))
        .finally( () => setReloadImage(false))}
    }, [reloadImage])

    useEffect(() => {
        if (feature) {
            axios(`https://api.themoviedb.org/3/movie/${feature.id}/images?api_key=d27cfb6baa191e1cd0eaa5f32b9e1d80&language=en`)
            .then(response => {
                if (response.data.backdrops[0] !== undefined) {setBackdrop(response.data.backdrops[0])}
                else {setReloadImage(true)}
            })
            .finally( () => setLoading(false))
        }
    }, [feature])

    //feature && console.log(feature)

    return loading ? <p>loading...</p> :(
        <img css={style} src={`https://image.tmdb.org/t/p/w1280${backdrop.file_path}`} />
     );
}
export default FeaturedMovie;