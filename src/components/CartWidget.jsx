import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget({cantidad}) {
  return (
      <>
        <ShoppingCartIcon sx={{ color: 'white' }}/>
        {cantidad ? <span style={{color: "white"}}>{cantidad}</span> : null}
      </>
  )
}

export default CartWidget