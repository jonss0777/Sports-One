
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Search() {
    const { country, sportName } = useParams();
    const [leagues, setLeagues] = useState(["Loading..."]);
    const navigate = useNavigate();

    useEffect(() => {
        //console.log(`https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?c=${country}&s=${sportName}`);

        fetch(`https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?c=${country}&s=${sportName}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setLeagues(data.countries);
            }
            )
            .catch(error => console.error(error));
    }, [country, sportName])

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div style={{ padding: "0px", margin: "0px" }}>
            <div style={{ padding: "0px", margin: "0px" }}>
                <h1>Search</h1>
                <form onSubmit={handleSubmit} style={{ display: "flex" }}>
                    <label style={{ padding: "7px", margin: "4px" }} htmlFor="search">Search</label>
                    <input type="text" id="search" name="search" />
                    <br />
                    <button style={{ marginLeft: "10px" }} type="submit">Search</button>
                </form>
            </div>
            <div>
            </div>
            {/* <p>Country: {country}</p>
            <p>Sport: {sportName}</p> */}
            <div>
                {/* <h1>Results</h1> */}
                {leagues === null || leagues.length === 0 ? <p>No results found.</p> :

                    <ul className="custom-select-list">
                        {leagues.map((league) => (
                            <li style={{
                                padding: "10px",
                                cursor: "pointer"
                            }} key={league.idLeague}>
                                <div style={{padding: "15px", margin: "10px"}}>
                                    <div>
                                    <img alt="Image Unavailable" src={league.strFanart1} widht={"200px"} height={"200px"}></img>
                                    
                                    </div>

                                {league.strLeague}
                                <button onClick={() => {navigate('/leagueinformation')}}> Learn More</button>

                                
                                </div>
                                </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    )
}