import React from 'react'

import '../../styles/CRC.scss'

function CRC() {
  const showcrc = 'cards1';
  const [cards, setCards] = React.useState([]);
  const [clase, setClase] = React.useState("");
  const [responsabilidad, setResponsabilidad] = React.useState("");
  const [colaboracion, setColaboracion] = React.useState("");
  const [cardEditing, setCardEditing] = React.useState(null);
  const [editingClase, setEditingClase] = React.useState("");
  const [editingResp, setEditingResp] = React.useState("");
  const [editingColab, setEditingColab] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem(showcrc);
    const loadedcards = JSON.parse(json);
    if (loadedcards) {
      setCards(loadedcards);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(cards);
    localStorage.setItem(showcrc, json);
  }, [cards]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      id: new Date().getTime(),
      clase: clase,
      responsabilidad: responsabilidad,
      colaboracion: colaboracion
    };
    setCards([...cards].concat(newCard));
    setClase("");
    setResponsabilidad("");
    setColaboracion("");
  }

  const deleteCard = (id) => {
    let updateCards = [...cards].filter((card) => card.id !== id);
    setCards(updateCards);
  }


  const submitEdits = (id) => {
    const updateCards = [...cards].map((card) => {
      if (card.id === id) {
        card.clase = editingClase;
        card.responsabilidad = editingResp;
        card.colaboracion = editingColab;
      }
      return card;
    });
    setCards(updateCards);
    setCardEditing(null);
  }

  const cancelEdit = (id) => {
    return !setCardEditing(id)
  }

  return (
    <>
      
      <div id="card-list">
        <h1>CRC cards Generator</h1>
        <form >
          <p>Clase</p>
          <input
            type="text"
            onChange={(e) => setClase(e.target.value)}
            value={clase}
          />
          <p>Responsabilidad</p>
          <input
            type="text"
            onChange={(e) => setResponsabilidad(e.target.value)}
            value={responsabilidad}
          />
          <p>Colaboracion</p>
          <input
            type="text"
            onChange={(e) => setColaboracion(e.target.value)}
            value={colaboracion}
          />
          <button className="button__add" onClick={handleSubmit}>Add Card</button>
        </form>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-text">

              {card.id === cardEditing ? (
                <>
                  <p>Clase</p>
                  <input
                    type="text"
                    onChange={(e) => setEditingClase(e.target.value)}
                  />
                  <p>Responsabilidad</p>
                  <input
                    type="text"
                    onChange={(e) => setEditingResp(e.target.value)}
                  />
                  <p>Colaboracion</p>
                  <input
                    type="text"
                    onChange={(e) => setEditingColab(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <div className="card__clase">
                    Clase:
                    {card.clase}
                  </div>
                  <div className="card__responsabilidad">
                    Responsabilidad:
                    {(card.responsabilidad.split(" ")).map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </div>
                  <div className="card__colaboracion">
                    Colaboracion:
                    {(card.colaboracion.split(" ")).map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </div>
                </>
              )}
            </div>
            <div className="card-actions">
              {card.id === cardEditing ? (
                <>
                  <button onClick={() => submitEdits(card.id)}>Submit Edits</button>
                  <button onClick={() => cancelEdit(card.id)}>Cancel Edit</button>
                </>
              ) : (
                <button onClick={() => setCardEditing(card.id)}>Edit</button>
              )}

              <button onClick={() => deleteCard(card.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { CRC };