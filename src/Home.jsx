import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {

      const [sports, setSports] = useState([]);
      const [countries, setCountries] = useState([]);
      const navigate = useNavigate();
      
      useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/123/all_sports.php")
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setSports(data.sports);
          }
          )
          .catch(error => console.error(error));
      }, [])
    
      useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/123/all_countries.php")
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setCountries(data.countries);
          }
          )
          .catch(error => console.error(error));
      }, [])
    
      function handleSubmit(e, sportName) {
        e.preventDefault();
        const country = e.target.country.value;
        console.log("selected country:", country);
        navigate(`/search/${country}/${sportName}`);
      }
    
    return (<div className="content">
        <h1 style={{textAlign:"center"}}>Sports</h1>
          <ol className="list-of-results">
            {sports.map((sport) => (
              <li key={sport.idSport}>
                  <img src={sport.strSportThumb} alt="Image Unavailable" height={"200px"} width={"200px"}></img>
                  <h2>{sport.strSport}</h2>
                  <p>{sport.strSportDescription}</p>
                  <p>Choose a country and learn more about the leagues.</p>
                  <form onSubmit={ (e) => handleSubmit(e, sport.strSport)}>
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                      {countries.map((country) => (
                        <option key={country.idCountry} value={country.name_en}>{country.name_en}</option>
                      ))}
                    </select>
                    <br />
                    <button type="submit">Search</button>
                  </form>
                
                </li>
            ))}         
          </ol>
        </div>
    )
}