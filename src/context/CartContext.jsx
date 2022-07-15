import { createContext, useRef, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

const { Provider } = CartContext;

export default function MyProvider({ children }) {
    JSON.parse(localStorage.getItem("cart")) === null && localStorage.setItem("cart", "[]");

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

    const noStock = useRef(false);

    // Método 'some' - ItemDetail - Se va a encargar de detectar si el producto a agregar ya está en el carrito o no. Retorna un booleano.
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    // ItemDetail - Se va a encargar de agregar el producto al cart, sin pisar a los agregados anteriormente. Y si está duplicado, sólo aumenta la cantidad.
    const addItem = (item, qty) => {
        noStock.current = false;
        const newItem = { ...item, qty }; // nuevo objeto con los atributos del producto más la cantidad
        if (isInCart(newItem.id)) {
            const findProduct = cart.find(item => item.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart];
            if ((auxArray[productIndex].qty + qty) <= auxArray[productIndex].stock) {
                auxArray[productIndex].qty += qty;
                setCart(auxArray);
            } else {
                noStock.current = true;
                Swal.fire({
                    color: 'white',
                    background: '#313447',
                    title: 'Error',
                    text: 'No hay stock suficiente',
                    icon: 'error',
                    iconColor: '#9b0000',
                    showConfirmButton: false,
                    showCancelButton: true,
                    cancelButtonText: 'Volver',
                    cancelButtonColor: '#9b0000'
                });
            };
        } else {
            setCart([...cart, newItem]);
        };
    };

    // Vaciar el carrito - Cart
    const emptyCart = () => {
        setCart([]);
    };

    // Método 'filter' - Cart - Se encarga, en función del ID, de retornar un nuevo array sin el producto seleccionado.
    const deleteItem = (id) => {
        return setCart(cart.filter(item => item.id !== id));
    };

    // Método 'reduce' - CartWidget - Retorna la cantidad total de unidades que tiene nuestro state cart.
    const getItemQty = () => {
        if (!cart) {
            return 0;
        } else {
            return cart.reduce((acc, item) => acc + item.qty, 0); // se va acumulando la cantidad de unidades de cada producto  
        }
    };

    // Método 'reduce' - Cart - Retorna el precio total del carrito.
    const getItemPrice = () => {
        return cart.reduce((acc, item) => acc += item.price * item.qty, 0);
    };

    const cartJSON = JSON.stringify(cart);
    cart !== null && localStorage.setItem("cart", cartJSON);

    return <Provider value={{ cart, noStock, setCart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice }}>{children}</Provider>;
};