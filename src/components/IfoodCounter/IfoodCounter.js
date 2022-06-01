import { useEffect, useState } from 'react';
import './IfoodCounter.css';

function SmartCounter() {
    const [quantity, setQuantity] = useState(1);
    const [maxQuantity, ] = useState(10);
    const [price, ] = useState(19.99);
    const [totalPrice, setTotalPrice] = useState(price*quantity);
    const [minusButtonStyle, setMinusButtonStyle] = useState("counter-button-minus-active");
    const [plusButtonStyle, setPlusButtonStyle] = useState("counter-button-plus-active");
    const [showMaxQuantityElement, setShowMaxQuantityElement] = useState(false);

    useEffect( () => {
        setTotalPrice(price * quantity);
    }, [quantity, price]);

    function getFormattedPrice() {
        return price.toFixed(2);
    }

    function getFormattedTotalPrice() {
        return totalPrice.toFixed(2);
    }

    function downQuantity() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setPlusButtonStyle("counter-button-plus-active");
            setShowMaxQuantityElement(false);
        }

        if (quantity <= 1) {
            setMinusButtonStyle("counter-button-minus-deactivated");
        }
    }

    function upQuantity() {
        if (quantity < maxQuantity) {
            setQuantity(quantity + 1);
            setMinusButtonStyle("counter-button-minus-active");
        } else {
            setShowMaxQuantityElement(true);
        }

        if (quantity >= maxQuantity-1) {
            setPlusButtonStyle("counter-button-plus-deactivated");
        }
    }

    return (
        <div class="container-wrapper">
            <h2>iFood Counter with hooks</h2>
            <div class="counter-container">
                <div class="counter-wrapper">
                    <button class={minusButtonStyle} onClick={downQuantity}>-</button>
                    <h3 id="counter-box">{quantity}</h3>
                    <button class={plusButtonStyle} onClick={upQuantity}>+</button>
                </div>
                <div class="price-wrapper">
                    <p class="price-box">R$ {getFormattedPrice()}</p>
                </div>
            </div>
            {showMaxQuantityElement ? <p class="counter-footer">Max.: {maxQuantity}</p> : <></>}
            <div class="price-container">
                <button class="price-button">R$ {getFormattedTotalPrice()} Finish</button>
            </div>
        </div>
    );
}

export default SmartCounter;