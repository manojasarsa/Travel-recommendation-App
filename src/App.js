import "./styles.css";
import { useState } from "react";

const travelDictionary = {
  "Jammu & Kashmir": [
    {
      place: "Srinagar",
      famousFor: "Natural beauty, gardens, waterfronts and houseboats",
      Ratings: "4/5"
    },
    {
      place: "Leh",
      famousFor: "Trekking & adventure destinations with sheer beauty",
      Ratings: "4/5"
    },
    { place: "Gulmarg", famousFor: "The meadow of flowers", Ratings: "3/5" }
  ],

  Goa: [
    {
      place: "Bom Jesus Basilica",
      famousFor: "Oldest churches in Goa & it's architecture",
      Ratings: "4/5"
    },
    {
      place: "Arambol Beach",
      famousFor: "The sweet water lagoon or lake",
      Ratings: "5/5"
    },
    {
      place: "Mapusa Market",
      famousFor: "Handicrafts, artworks, clothes and accessories",
      Ratings: "3/5"
    }
  ],

  "Himachal Pradesh": [
    {
      place: "Shimla",
      famousFor: "Snow-capped peaks in the backdrop",
      Ratings: "5/5"
    },
    { place: "Kullu", famousFor: "Valley of the gods", Ratings: "3/5" },
    {
      place: "Manali",
      famousFor: "Unlimited adventure opportunities",
      Ratings: "4/5"
    }
  ],

  Kerala: [
    { place: "Alleppey", famousFor: "Venice of the East", Ratings: "4/5" },
    {
      place: "Munnar",
      famousFor: "Hill station and Tea plantations",
      Ratings: "4/5"
    },
    {
      place: "Kumarakom",
      famousFor: "Alluring flora and fauna",
      Ratings: "3/5"
    }
  ],

  Rajasthan: [
    { place: "Jaipur", famousFor: "The Pink City", Ratings: "4/5" },
    { place: "Udaipur", famousFor: "The city Of Lakes", Ratings: "5/5" },
    { place: "Jodhpur", famousFor: "A city To Taste Royalty", Ratings: "3/5" }
  ]
};

var travelList = Object.keys(travelDictionary);

export default function App() {
  const [states, setStates] = useState("Goa");

  function statesClickHandler(states) {
    setStates(states);
  }

  return (
    <div className="App">
      <h1 style={{ margin: "1.5rem" }}> Travel Recommedation App</h1>

      <p>
        Checkout my favorite places for travelling in India. Select a state to
        get started!
      </p>

      {travelList.map((states) => (
        <button
          style={{
            cursor: "pointer",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            margin: "1rem 0.5rem"
          }}
          onClick={() => statesClickHandler(states)}
          key={states}
        >
          {states}
        </button>
      ))}

      <hr />

      {/* now rendering the list of places in selected state & famous. For accessing array of objects we will directly access through "travelDictionary and not through LIST" */}

      <div>
        <ul>
          {" "}
          <div
            style={{ textAlign: "center", fontFamily: "'Satisfy', cursive" }}
          >
            The places to visit in {states} are:{" "}
          </div>
          {/* "travelDictionary[states]" --> is a "ARRAY (of obj)" & map() works only with a Array */}
          {travelDictionary[states].map((travelState) => (
            <li
              key={travelState.place}
              style={{
                textAlign: "left",
                padding: "1rem",
                backgroundColor: "lightblue",
                margin: "1.5rem 0rem",
                borderRadius: "1.2rem",
                width: "90%",
                listStyle: "none"
              }}
            >
              <div
                style={{ fontSize: "larger", margin: "0rem 0rem 1rem 0rem" }}
              >
                {travelState.place}
              </div>
              <div style={{ fontSize: "smaller" }}>
                Known For: {travelState.famousFor}
              </div>
              <div style={{ fontSize: "smaller" }}>
                Ratings: {travelState.Ratings}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
