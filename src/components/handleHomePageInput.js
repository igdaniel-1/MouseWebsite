// open socket to server




const HandleHomePageInput = () => {
    const socket = new WebSocket('ws://localhost:8080');
    // handle open, receive message, and close 
    socket.onopen = function(event){
        // connection alert
        alert('connected to server')}

    socket.onmessage = function(event){
        // collect web browser client input
        const outputContent = document.getElementById('output');
        outputContent.innerHTML += `<p>Received "${event.data}" from server.</p>`
    }

    socket.onclose = function(event){
        console.log('disconnected from server...');
    }

    // {/* // handle posting message to server */}
    const sendMessage = () => {
        console.log("send message button pressed: ");
        // target the input section of the webpage
        const messageInput = document.getElementById('messageInput');
        // extract data from input
        const message = messageInput.value;
        // console.log(message);
        socket.send(message);
        // reset input section
        messageInput.value = '';
    }

    // form field for input
    return(
        <div className="container">
            <label>Send Message to Server:</label> 
            <input type="text" id="messageInput"></input>
            <button onClick={sendMessage}>Send</button>
            <div id="output"></div>
        </div>
    );
    
    
}
export default HandleHomePageInput;