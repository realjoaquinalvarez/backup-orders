import { useMemo } from "react"
import { OrderItem } from "../types"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    onSaveOrder: () => void
}


export default function OrderTotals( {order, tip, onSaveOrder} : OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce( ( total, item ) => ( total + ( item.price * item.quantity ) ), 0 ), [order])
    const tipAmount = useMemo( () => subtotalAmount * tip, [tip, order] )
    const totalAmount = useMemo( () => subtotalAmount + tipAmount, [tip, order] )


    return (
        <>
            <div className="space-y-3">

                <h2 className="font-black text-2xl">Total y Propina:</h2>
                <p>Subtotal a pagar: 
                    <span className="font-bold"> ${subtotalAmount}</span>
                </p>

                <p>Propina: 
                    <span className="font-bold"> ${ tipAmount}</span>
                </p>
                <p>Total a pagar:   
                    <span className="font-bold"> ${ totalAmount }</span>
                </p>
                
            </div>

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={onSaveOrder}
            >Guardar Orden</button>
        </>
    )
}
