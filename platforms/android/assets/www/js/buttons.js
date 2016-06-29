var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);

        // document.getElementById('greenDiv').addEventListener('click', changeColor);
        // document.getElementById('blueDiv').addEventListener('click', changeColor);
        // document.getElementById('orangeDiv').addEventListener('click', changeColor);

        // document.getElementById('sBtn').addEventListener('click', changeSize);
        // document.getElementById('dBtn').addEventListener('click', changeSize);
        // document.getElementById('lBtn').addEventListener('click', changeSize);
        //
        // document.getElementById('circleShape').addEventListener('click', changeShape);
        // document.getElementById('roundShape').addEventListener('click', changeShape);
        // document.getElementById('squareShape').addEventListener('click', changeShape);

        console.log('Received Event: ' + id);
    }
};

function changeColor(color){
  document.getElementById('customButton').style.background = color;
}

function changeSize(size){
  document.getElementById('customButton').style.fontSize = size;
}

function changeShape(radius){
  document.getElementById('customButton').style.padding = "10px 20px 10px 20px";
  document.getElementById('customButton').style.borderRadius = radius;
}

function changeShapeCircle(radius){
  document.getElementById('customButton').style.padding = "28px 0 28px 0";
  document.getElementById('customButton').style.borderRadius = radius;
}
