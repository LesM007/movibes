import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (url) => {

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

   
        useEffect(() => {
           axios(url)
           .then((response) => {
            setData(response.data);
           }) 
           .catch(() => setError("Something went wrong try later"))
           .finally(() => setLoading(false));
        }, [url]);
        data && console.log(data)
        return { data, error, loading }
}
 
export default useAxios;