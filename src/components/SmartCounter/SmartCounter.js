import { useState } from 'react';

function SmartCounter() {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <h2>Smart Counter with hooks</h2>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </>
    );
}

export default SmartCounter;