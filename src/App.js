import "./styles.css";
import { useState } from "react";

const travelDictionary = {
  "Jammu & Kashmir": [
    {
      place: "Srinagar",
      famousFor:
        "Srinagar, the summer capital of Jammu and Kashmir is located in the heart of the Kashmir valley at an altitude of 1,730 m above sea level. Spread on both sides of the river Jhelum the city is famous for its natural beauty, gardens, waterfronts and houseboats.",
      Ratings: "5/5"
    },
    {
      place: "Leh",
      famousFor:
        "Located in the Ladakh region of Jammu and Kashmir, Leh is known for its stunning scenic locales, Buddhist temples and pristine environment. Due to the strong influence of Tibetan Buddhism, Leh is also known as Little Tibet or the Land of Lamas. Also known for Trekking & adventure destinations with sheer beauty.",
      Ratings: "4/5"
    },
    {
      place: "Gulmarg",
      famousFor:
        "A picturesque beauty, it is known for its ski resort which was established in 1927, the Gulmarg Gondola - Asia's second longest cable car ride and the highest golf course in the world at an elevated altitude of 2,650 meters. Gulmarg is an absolute delight for nature lovers and adventure seekers.",
      Ratings: "3/5"
    }
  ],

  Goa: [
    {
      place: "Arambol Beach",
      famousFor:
        "Arambol Beach is famous for the sweet water lagoon or lake that is located at the end of the adjacent beach i.e. Kalacha beach. It is accessible only on foot and its shallow waters are wonderfully calm to swim in. The sand here is also known to have healing properties.",
      Ratings: "5/5"
    },
    {
      place: "Bom Jesus Basilica",
      famousFor:
        "Probably the most famous church in Goa and one of the most revered by Christians globally, the Basilica of Bom Jesus in Old Goa is famed for housing the mortal remains of St Francis Xavier.",
      Ratings: "4/5"
    },
    {
      place: "Mapusa Market",
      famousFor:
        "The market is especially known for spices, marinated pork sausages, strings of Goan home-made chourico, cashew nut shops and of course fenny stores. Seedless tamarind, pickles, vegetables, coir mats and ropes are also sold here. Handicrafts, artworks, clothes and accessories are the major attractions.",
      Ratings: "3/5"
    }
  ],

  "Himachal Pradesh": [
    {
      place: "Shimla",
      famousFor:
        "Situated at an altitude of 2,205 meters, it used to be the summer capital of British India with a well-planned architecture. The town is famous for pleasant walking experiences on hillsides surrounded by pine and oak forests. This capital city of Himachal Pradesh is famous for The Mall, ridge, and toy train.",
      Ratings: "5/5"
    },
    {
      place: "Kullu",
      famousFor:
        "Kullu, a valley of the gods, is an open valley formed by the Beas River between Manali and Larji. It is famous for its temples, vast and beautiful majestic hills which are covered in Pine and Deodar forests.",
      Ratings: "3/5"
    },
    {
      place: "Manali",
      famousFor:
        "A gift of the Himalayas to the world, Manali is a beautiful township nestled in the picturesque Beas River valley. It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains and Unlimited adventure opportunities.",
      Ratings: "4/5"
    }
  ],

  Kerala: [
    {
      place: "Alleppey",
      famousFor:
        "Venice of the East - Alappuzha, famous for its boat races, beaches, marine products and coir industry, is a world renowned backwater tourist destination of India. Kuttanad, Alappuzha backwaters and Alappuzha beach are the must-see tourist attractions in the district.",
      Ratings: "4/5"
    },
    {
      place: "Munnar",
      famousFor:
        "Munnar is a famous hill station in Kerala. The hill station enjoys a favorable and pleasant climate all year round and is famous for its lush green hills and tea plantations.",
      Ratings: "4/5"
    },
    {
      place: "Kumarakom",
      famousFor:
        "Kumarakom is a popular tourism destination located near the city of Kottayam in Kerala, India, famous for its backwater tourism. It is set in the backdrop of the Vembanad Lake, the largest lake in the state of Kerala.",
      Ratings: "3/5"
    }
  ],

  Rajasthan: [
    {
      place: "Udaipur",
      famousFor:
        "Udaipur is a tourist destination and is known for its history, culture, scenic locations and the Rajput-era palaces. It is popularly known as the City of Lakes because of its sophisticated lake system.",
      Ratings: "5/5"
    },
    {
      place: "Jaipur",
      famousFor:
        "Jaipur is famous as Pink City of India and it is also the Capital City of Rajasthan. Jaipur is famous for Rajasthani traditional Jewelry, traditional fabrics and handicrafts, and also for traditional rajasthani cuisine.",
      Ratings: "4/5"
    },
    {
      place: "Jodhpur",
      famousFor:
        "Also known as a city To Taste Royalty is famous for the distinctive colour of its buildings, a reminder of the Brahmins, who used to paint their houses blue to deter insects and keep the dwellings cool during the summer.",
      Ratings: "3/5"
    }
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
                margin: "1.5rem 1.5rem",
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
              <div style={{ fontSize: "smaller" }}>{travelState.famousFor}</div>
              <br></br>
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
