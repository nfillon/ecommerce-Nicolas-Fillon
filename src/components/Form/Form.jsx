import { addDoc, collection } from "@firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/GlobalStateContext";
import db from "../../service/firebase";
import Swal from "sweetalert2";

export const Form = ({ total }) => {
  const { cartItems } = useContext(CartContext);

  const [orderID, setOrderID] = useState();

  const mostrarOrder = (order) => {
    if (order) {
      Swal.fire({
        title:
          "Felicidades. Su compra ha sido exitosa. Su numero de orden es: " +
          order,
        html: "<i>precione ok para terminar el proceso</i>",
        icon: "success",
      });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormulario({
      ...formulario,
      buyer: {
        ...formulario.buyer,
        [id]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const oCollection = collection(db, "orders");
      console.log(formulario);
      await addDoc(oCollection, formulario).then(({ id }) => setOrderID(id));
    } catch (error) {
      console.log(error);
    }
  };

  const itemsCar = cartItems.map(({ id, short_description, price, stock }) => ({
    id,
    short_description,
    price,
    stock,
  }));

  const [formulario, setFormulario] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: itemsCar,
    date: Date(),
    total: total,
  });

  useEffect(() => {
    mostrarOrder(orderID);
  });

  return (
    <form
      className="g-3 form needs-validation"
      onSubmit={handleSubmit}
      id="form"
    >
      <div className="col-md-8">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={handleChange}
          required
        />
        <div className="invalid-feedback">Ingrese su nombre</div>
      </div>
      <div className="col-md-8">
        <label className="form-label">Teléfono</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          onChange={handleChange}
          required
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
        <div className="invalid-feedback">Ingrese su teléfono</div>
      </div>
      <div className="col-md-8">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="inputGroupPrepend"
          onChange={handleChange}
          required
        />
        <div className="invalid-feedback">Ingrese su email</div>
      </div>

      <div className="col-12">
        <button
          className="btn btn-primary"
          type="submit"
          style={{ marginTop: "3%" }}
        >
          Terminar compra por un total $ {total}
        </button>
      </div>
    </form>
  );
};

export default Form;
