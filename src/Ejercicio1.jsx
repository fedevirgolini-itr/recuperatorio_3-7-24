import React from 'react'

export default function Ejercicio1() {

  const [formData, setFormData] = useState({
    nombreproducto: '',
    precio: '',
    metodosdepago: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    <p>form enviado</p>
    window.alert('form enviado');
  };

  return (
    <div>
      <h2>Ejercicio 1: Formulario y lista desplegable</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombreproducto">nombreproducto:</label>
          <input
            type="text"
            id="nombreproducto"
            name="nombreproducto"
            value={formData.nombreproducto}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="precio">precio:</label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="metodosdepago">metodosdepago:</label>
          <input
            type="select"
            id="metodosdepago"
            name="metodosdepago"
            value={formData.metodosdepago}
            onChange={handleChange}
          />

          if (metodosdepago == pagaefectivo) {
            //descuento 20%
          }elif (metodosdepago == pagatransferencia) {
            //descuento 15%
          }elif (metodosdepago == tarjetadedebito) {
            //descuento 5%
          }else (metodosdepago == tarjetadecredito) {
            //no hay descuento
          }

        </div>
        <button type="submit">Enviar</button>
      </form>

    </div>
  )
}
