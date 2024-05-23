// Code Keypad Component Here

function Keypad() {

    function handleInputChange() {
        console.log('Entering password...')
    }


    return (
        <div>
            <label htmlFor="password-input">Enter Password</label>
            <input type="password" id="password-input" onChange={handleInputChange} />
        </div>
    )
}

export default Keypad;