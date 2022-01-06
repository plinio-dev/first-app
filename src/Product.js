import React from "react";

const Prodotto = ({ costoFinale, img, nome, prezzo }) => {
  return (
    <article>
      <div className='card'>
        <img src={img} alt={nome} />
        <h6>{nome}</h6>
        <hr />
        <p className='prezzo1'>{prezzo}</p>
        <p>bamby000</p>
      </div>
      <p className='card-time'>PUNTA</p>
      <button>
        <p>{costoFinale} €</p>
      </button>
    </article>
  );
};

export default Prodotto;
