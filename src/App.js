import React from "react";
import { useEffect, useState } from "react";

function DisplayCard({ quote }) {
  const [captainLogs, setCaptainLogs] = useState([]);

  useEffect(() => {

    fetch({ origin: "https://localhost:6116/" })
      .then((response) => response.json())
      .then((data) => setCaptainLogs(data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const captainsLogReportRender = captainLogs.map((eachCaptainQuote) => {
    const loggedQuote = quote.some((saying) => saying.id === eachCaptainQuote.id)
  }
  
    return (
      <h4>
        <div className="captainName"> {`${eachCaptainQuote.name}`} </> 


        </h4>


          < div className="title" > {`${eachCaptainQuote.title}`} </div>

  )



  export default App;
