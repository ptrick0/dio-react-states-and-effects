function Counter() {
    let quantity = 1;

    function upQuantity() {
        quantity++;
        document.getElementById("counter-box").innerHTML = quantity;
    }

    function downQuantity() {
        quantity--;
        document.getElementById("counter-box").innerHTML = quantity;
    }
    
    return (
        <>
            <h2>Counter without hooks</h2>
            <button onClick={downQuantity}>-</button>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>+</button>
        </>
    );
}

export default Counter;