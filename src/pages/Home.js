/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HorizontalList from "../components/HorizontalList";
import useAxios from "../customHooks/useAxios";
import { theme } from "../themes/theme";

const Home = () => {

    const ImgContainer = css`
    max-width: 57rem;
    max-height: 18.75rem;
    border-radius: 2rem;
    background-color: ${theme.colors.secondary};
    `

    const url = "https://api.themoviedb.org/3/movie/505642/images?api_key=d27cfb6baa191e1cd0eaa5f32b9e1d80&language=en-US"

    const {data: images, loading } = useAxios(url);

    //images && console.log(images.backdrops)

    return loading ? <p>loading...</p> :(
        <div css={ImgContainer}>
            hej
            <HorizontalList />
        </div>
     );
}
 
export default Home;