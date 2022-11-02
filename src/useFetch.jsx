import { useState, useEffect } from "react";
import { Dna } from "react-loader-spinner";
import { User } from "./components";

export function UseFetch() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const url = "https://api.github.com/users/anotherjesse";
    setLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((response) => setData(response))
        .then(() => setLoading(false))
        .catch(setError);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div id="loading">
        <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
/>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Somesing went wrong .....</h2>
      </div>
    );
  }
  if (data) {
    return (
      <User name={data.name} company={data.company} avatar={data.avatar_url} />
    );
  }
}
