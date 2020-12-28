(function() {
    alert("hello");
    'use strict';
           if (window.location.href.indexOf('SAMLRequest') > 0) {
                console.log("Redirect to LibCal");
				setTimeout(function(){ window.location.href = "https://libcalendar.ntu.edu.sg/"; }, 3000);
            }
})();

