import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

let api_key = "api_key=d27cfb6baa191e1cd0eaa5f32b9e1d80"

const Results = () => {
    let [searchParams] = useSearchParams();
    let search = searchParams.get("search")
    const [results, setResults] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/multi?query=${search}&`+api_key)
        .then(response => setResults(response.data.results))
        .finally(()=> setLoading(false))
    }, [search]);


    return loading ? <p>loading...</p> :( 
        <>
        <p>Resultater</p>
        {results.map(result=>(
            <p style={{color:"white"}} key={result.id}>{result.name}</p>
        ))}
        </>
     );
}
 
export default Results;