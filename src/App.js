import "./styles.css";
import { useState } from "react";

const travelDictionary = {
  "Jammu & Kashmir": [
    {
      place: "Srinagar",
      famousFor: "Natural beauty, gardens, waterfronts and houseboats"
    },
    {
      place: "Leh",
      famousFor: "Trekking & adventure destinations with sheer beauty"
    },
    { place: "Gulmarg", famousFor: "The meadow of flowers" }
  ],

  Goa: [
    {
      place: "Bom Jesus Basilica",
      famousFor: "Oldest churches in Goa & it's architecture"
    },
    { place: "Arambol Beach", famousFor: "The sweet water lagoon or lake" },
    {
      place: "Mapusa Market",
      famousFor: "Handicrafts, artworks, clothes and accessories"
    }
  ],

  "Himachal Pradesh": [
    { place: "Shimla", famousFor: "Snow-capped peaks in the backdrop" },
    { place: "Kullu", famousFor: "Valley of the gods" },
    { place: "Manali", famousFor: "Unlimited adventure opportunities" }
  ],

  Kerala: [
    { place: "Alleppey", famousFor: "Venice of the East" },
    { place: "Munnar", famousFor: "Hill station and Tea plantations" },
    { place: "Kumarakom", famousFor: "Alluring flora and fauna" }
  ],

  Rajasthan: [
    { place: "Jaipur", famousFor: "The Pink City" },
    { place: "Udaipur", famousFor: "The city Of Lakes" },
    { place: "Jodhpur", famousFor: "A city To Taste Royalty" }
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
