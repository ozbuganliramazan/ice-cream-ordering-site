import axios from 'axios';
import React, { useEffect, useState } from 'react';



const Tooppings=()=>{
    const [soslar, setSoslar] = useState([]);
  const [sepet, setSepet] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3030/soslar')
      .then((res) => setSoslar(res.data))
      .catch((err) => console.log(err));
  }, []);
  function handleSos(e, sos) {
    if (e.target.checked) {
      setSepet([...sepet, sos]);
    } else {
      const cikart = sepet.filter((i) => i.name !== sos.name);
      setSepet(cikart);
    }
  }
    return(
        <div className="container">
        <h1 className="text-start">Soslar</h1>
        <p className="text-start">Tanesi: 2$</p>
        <h2 className="text-start" data-testid="ucret">
          Ücret: {sepet.length * 2}
        </h2>
        <div className="row gap-4">
          {soslar.map((sos) => (
            <div
              className="col-3 d-flex flex-column align-items-center justify-content-between"
              style={{ width: '150px', minHeight: '200px' }}
              key={sos.name}
            >
              <img src={sos.imagePath} className="w-100" alt="" />
              <label htmlFor={sos.name} className="lead">
                {sos.name}
              </label>
              <input
                id={sos.name}
                type="checkbox"
                className="checkbox"
                style={{ width: '20px', height: '20px' }}
                onChange={(e) => handleSos(e, sos)}
              />
            </div>
          ))}
        </div>
      </div> 
    )
}

export default Tooppings
