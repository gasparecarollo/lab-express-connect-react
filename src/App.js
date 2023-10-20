import React from "react";
import { useEffect, useState } from "react";

function DisplayCard({ quote }) {
  const [captainLogs, setCaptainLogs] = useState([]);

  useEffect(() => {

    fetch({ origin: "https://localhost:6116/logs/" })
      .then((response) => response.json())
      .then((data) => setCaptainLogs(data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const captainsLogReportRender = captainLogs.map((eachCaptainQuote) => {

    return (

      <div className="card_container" >

        <div className="captainNameDiv"> <h4> {`${eachCaptainQuote.captainName}`} </h4>  </div>

        <div className="titleDiv"> {`${eachCaptainQuote.title}`} </div>

        <div className="postDiv"> {`${eachCaptainQuote.post}`} </div>

        <div className="mistakesDiv"> {`${eachCaptainQuote.mistakesWereMadeToday}`} </div>

        <div className="daysSinceDiv"> {`${eachCaptainQuote.daysSinceLastCrisis}`} </div>


        <button
          className=""
          onClick={() => updateLog(eachCaptainQuote)}
        >
          Update Captain's Log
        </button>

        <button
          className=""
          onClick={() => deleteLog(eachCaptainQuote)}
        >
          Delete Captain's Log
        </button>
      </div >

    )
  }

  )
}



export default App;
