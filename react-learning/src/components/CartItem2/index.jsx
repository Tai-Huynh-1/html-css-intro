import { useState } from "react"
import CartCounter from "./CartCounter"
import chair1 from "../../assets/e-comm/chair1.webp"
import { MyReactComponent } from "./Mock/index"

const CartItem2 = (props) => {
    console.log("props from cart item component", props)

    const [counter, setCounter] = useState(1)

    return (
        <div className="border border-black flex py-6">
            <div className="w-3/12 flex">
                <img className="my-auto mx-auto" src={chair1} alt="Osmond Armchair" width="128" height="128"/>
            </div>

            <div className="w-7/12 space-y-4">
                <div className="space-y-3">
                    <h3 className="text-start">
                        <strong>Osmond Armchair</strong>
                    </h3>
                    <div className="text-start text-sm">
                        <strong><span className="text-gray-400">Color</span> Gunnared beige</strong>
                    </div>
                </div>

                <div className="w-full md:w-7/12">
                    <CartCounter counter={counter} setCounter={setCounter} />
                </div>
            </div>

            <h3 className="w-2/12 text-lg">
                <strong>{`(${counter})`} - ${counter * 149.99}</strong>
            </h3>

            {MyReactComponent}
        </div>
    )
}

export default CartItem2