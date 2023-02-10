import React, { useEffect, useState } from "react";
import axios from "axios";

const Scoops = () => {
  const [cesitler, setCesitler] = useState([]);
  const [sepet, setSepet] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/cesitler")
      .then((res) => {
        setCesitler(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleReset(cesit) {
    const resetlendi = sepet.filter((item) => item.name !== cesit.name);
    setSepet(resetlendi);
  }
  function adetBul(cesit) {
    const miktar = sepet.filter((item) => item.name === cesit.name);
    return miktar.length;
  }

  return (
<div className="container">
<h1 className="text-start">Çeşitler</h1>
      <p className="text-start">Tanesi 3$</p>
      <h2 className="text-start" data-testid="ucret">
        ÇeşitlerÜcret: {sepet.length * 3} $
      </h2>
      <div className="row d-flex gap-4">
        {cesitler.map((cesit) => {
          const sayac = adetBul(cesit);
          return (
            <div
              className="col-3 d-flex flex-column align-items-center mx-5"
              style={{ maxWidth: '150px' }}
              key={cesit.name}
            >
              <img
                id={cesit.name}
                className="w-100 "
                src={cesit.imagePath}
                alt="cesit"
              />
              <label htmlFor={cesit.name}>{cesit.name}</label>
              <div className="d-flex gap-3 my-3">
                <button
                  className="btn btn-danger"
                  onClick={() => handleReset(cesit)}
                >
                  Sıfırla
                </button>
                <span className="lead">{sayac}</span>
                <button
                  id={cesit.name}
                  className="btn btn-info"
                  onClick={() => setSepet([...sepet, cesit])}
                >
                  Ekle
                </button>
              </div>
            </div>
          );
        })}
      </div>
</div>
  );
};

export default Scoops;
