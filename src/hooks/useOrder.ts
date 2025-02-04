import { useState } from "react"
import { MenuItem, OrderItem } from '../types/index';

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    // Añadir producto clickeado
    // Se añade uno nuevo a order si no existe (agregandole quantity)
    // Se suma a quantity en caso de que ya existe
    const addItem = (item: MenuItem) => { 
        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if (itemExist) {
            const updatedOrder: OrderItem[] = order.map((orderItem) => orderItem.id === item.id
                ? { ...orderItem, quantity: orderItem.quantity + 1 }
                : orderItem
            )
            setOrder(updatedOrder)
        } else {
            const newValue: OrderItem = { ...item, quantity: 1 }
            setOrder([...order, newValue])
        }


    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter( item => item.id !== id ))
    } 

    const onSaveOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        addItem,
        order,
        tip,
        setTip,
        removeItem,
        onSaveOrder
        
    }
}

