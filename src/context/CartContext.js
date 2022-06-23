import { createContext, useState } from "react";
import Item from '../components/Item';

export const CartContext = createContext();

const { Provider } = CartContext;

export default function MyProvider({ children })  {
    const [cart, setCart] = useState([]); // se inicializa con un array vacío

    // Método 'some' - ItemDetail - Se va a encargar de detectar si el producto a agregar ya está en el carrito o no. Retorna un booleano.
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };
    
    // ItemDetail - Se va a encargar de agregar el producto al cart, sin pisar a los agregados anteriormente. Y si está duplicado, sólo aumenta la cantidad.
    const addItem = (item, qty) => {
        const newItem = { ...item, qty }; // nuevo objeto con los atributos del producto más la cantidad
        if (isInCart(newItem.id)) {
            const findProduct = cart.find(item => item.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart];
            if ((auxArray[productIndex].qty + qty) <= auxArray[productIndex].stock) {
                auxArray[productIndex].qty += qty;
                setCart(auxArray);
                alert(`Agregaste ${qty} producto/s al carrito.`);
                console.log(cart);
            } else {
                alert("No hay stock suficiente.");
            };
        } else{
            setCart([...cart, newItem]);
            alert(`Agregaste ${qty} producto/s al carrito.`);
            console.log(cart);
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
        return cart.reduce((acc, item) => acc + item.qty, 0); // se va acumulando la cantidad de unidades de cada producto     
    };
    
    // Método 'reduce' - CartWidget - Retorna el precio total del carrito.
    const getItemPrice = () => {
        return cart.reduce((acc, item) => acc += item.price * item.qty, 0);
    };
    
    return <Provider value={{ cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice }}>{children}</Provider>;
};