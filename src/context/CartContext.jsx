import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addCart = (product, quantity) => {
        const filtered = cart.filter((prod)=>{
            return prod.id === product.id
        });
        if (filtered.length > 0) {
            sumarCantidad(product, quantity)
            // console.log(`Ya incluiste ${product.title} en el carrito`)
        } else {
            setCart([...cart, {...product, quantity}])
        };
    }; 

    const sumarCantidad = (product, quantity) => {
        const cartActualized = cart.map((prod)=> {
            if (prod.id === product.id) {
                const productActualized = {
                    ...prod,
                    quantity: prod.quantity + quantity
                }
                return productActualized
            } else {
                return prod
            }
        });
        setCart(cartActualized)
    };

    //corroborar si producto ya esta en carrito
    const isInCart = (product) => {
        const filtered = cart.filter((prod)=>{
            return prod.id === product.id
        });

        if (filtered.length > 0) {
            console.log(`Ya incluiste ${product.title} en el carrito`)
        } else {
            console.log(`${product.title} aún no está en el carrito`)
        };
    };

    // eliminar un solo producto
    const removeProd = (product) => {
        // const indexProd = cart.findIndex((item) => item.id === product.id);
        // cart.splice(indexProd, 1);
        // setCart([...cart]);
        // console.log(`Quitaste ${product.title} del carrito`);

        const filterCart = cart.filter((prod)=> prod.id !== product.id);
        setCart(filterCart)
    }

    //vaciar todo carrito
    const clearCart = () => {
        setCart([]);
        console.log(cart)
    };

//calcular total unidades para el cartwidget
//calcular total precio
//sumar cantidades del mismo producto

    return (
        <CartContext.Provider value={{cart, addCart, isInCart, removeProd, clearCart}}>{children}</CartContext.Provider>
    )
};

export default CartProvider