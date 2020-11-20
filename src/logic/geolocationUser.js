
function getUserLocation(callback) {

    function geo_success(position) {
        const userLocation = [position.coords.latitude, position.coords.longitude];
        return callback(userLocation)
     }
     
     function geo_error() {
      console.log("Sorry, no position available.");
     
    }
    


    return navigator.geolocation.getCurrentPosition(geo_success,geo_error);

}

export default getUserLocation;



