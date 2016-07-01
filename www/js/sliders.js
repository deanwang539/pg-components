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

        // Initialize a new plugin instance for element or array of elements.
        var slider = document.querySelectorAll('input[type="range"]');
        rangeSlider.create(slider, {
            polyfill: true,     // Boolean, if true, custom markup will be created
            rangeClass: 'rangeSlider',
            disabledClass: 'rangeSlider--disabled',
            fillClass: 'rangeSlider__fill',
            bufferClass: 'rangeSlider__buffer',
            handleClass: 'rangeSlider__handle',
            startEvent: ['mousedown', 'touchstart', 'pointerdown'],
            moveEvent: ['mousemove', 'touchmove', 'pointermove'],
            endEvent: ['mouseup', 'touchend', 'pointerup'],
            min: null,          // Number , 0
            max: null,          // Number, 100
            step: null,         // Number, 1
            value: null,        // Number, center of slider
            buffer: null,       // Number, in percent, 0 by default
            stick: null,        // [Number stickTo, Number stickRadius] : use it if handle should stick to stickTo-th value in stickRadius
            borderRadius: 10,    // Number, if you use buffer + border-radius in css for looks good,
            onInit: function () {
                console.log('onInit');
            },
            onSlideStart: function (position, value) {
                console.log('onSlideStart, position: ' + position, 'value: ' + value);
            },
            onSlide: function (position, value) {
                console.log('onSlide, position: ' + position, 'value: ' + value);
            },
            onSlideEnd: function (position, value) {
                console.log('onSlideEnd, position: ' + position, 'value: ' + value);
            }
        });

        console.log('Received Event: ' + id);
    }
};

function changeColor(color){
  $("#js-rangeSlider-1 .rangeSlider__fill" ).css("background", color);
}

function changeSizeS(){
  $("#js-rangeSlider-1.rangeSlider" ).css("height", '10px');
  $("#js-rangeSlider-1 .rangeSlider__fill" ).css("height", '10px');
  $("#js-rangeSlider-1 .rangeSlider__handle" ).css({"width": "20px", "height": "20px", "top": "-6px"});
}

function changeSizeM(){
  $("#js-rangeSlider-1.rangeSlider" ).css("height", '18px');
  $("#js-rangeSlider-1 .rangeSlider__fill" ).css("height", '20px');
  $("#js-rangeSlider-1 .rangeSlider__handle" ).css({"width": "40px", "height": "40px", "top": "-10px"});
}

function changeSizeL(){
  $("#js-rangeSlider-1.rangeSlider" ).css("height", '26px');
  $("#js-rangeSlider-1 .rangeSlider__fill" ).css("height", '30px');
  $("#js-rangeSlider-1 .rangeSlider__handle" ).css({"width": "60px", "height": "60px", "top": "-14px"});
}

function changeShape(radius){
  $("#js-rangeSlider-1.rangeSlider" ).css("border-radius", radius);
  $("#js-rangeSlider-1 .rangeSlider__fill" ).css("border-radius", radius);
}
