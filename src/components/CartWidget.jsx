import React from 'react'

function CartWidget({cantidad}) {
  return (
      <>
        <img src="images/cart.png" style={{height: 30, marginLeft: 10, marginTop: 5}} alt="Imagen de Carrito"/>
        {cantidad ? <p style={{color: "white", marginLeft: 10, marginTop: 8, marginBottom: 0}}>{cantidad}</p> : null}
      </>
  )
}

export default CartWidget