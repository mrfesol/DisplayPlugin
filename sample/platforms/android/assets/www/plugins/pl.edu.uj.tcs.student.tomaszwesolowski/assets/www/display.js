cordova.define("pl.edu.uj.tcs.student.tomaszwesolowski.Display", function(require, exports, module) {var display = {
    setBrightness: function(brightness, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'Display', // mapped to our native Java class called "DisplayPlugin"
            'setBrightness', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "brightness": brightness
            }]
        ); 
    },
	
	setOrientation: function(orientation, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'Display', // mapped to our native Java class called "DisplayPlugin"
            'setOrientation', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "orientation": orientation
            }]
        ); 
    }
}
module.exports = display;});