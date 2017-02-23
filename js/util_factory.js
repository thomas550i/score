scotchApp.service('util_SERVICE', ['$http', '$window',  '$rootScope', function ($http, $window,  $rootScope) {
    var urlsd = window.location.href.split("/");
    this.url = "https://cricapi.com/api/";
	this.apikey = "yesERhmmv7QLmtKURBEr0ueMZK32";
	
	
			this.today = new Date();
			var dd = this.today.getDate();
			var mm = this.today.getMonth()+1; //January is 0!
			
			var yyyy = this.today.getFullYear();
			if(dd<10){
			dd='0'+dd;
			} 
			if(mm<10){
			mm='0'+mm;
			} 
			this.today = yyyy+'-'+mm+'-'+dd;
			
			
	this.UsName = "";
	this.UsPass = "";
	this.UsDB = "";
	
    this.config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    }
	
	this.islogin = function()
	{
		if($cookie.get('Islogin')==false || $cookie.get('Islogin')===undefined)
		{
			window.location = "#/";
		}
	}
	
	
	//get GetUPCmatches
    this.GetUPCmatches = function () {
        var promise =  $http.get(this.url + "matches?apikey=" +this.apikey, this.config)
   .success(function (response) {
   });
        return promise;

    };
	
	//get oldmatches
    this.GetOLDmatches = function () {
        var promise =  $http.get(this.url + "cricket?apikey=" +this.apikey, this.config)
   .success(function (response) {
   });
        return promise;

    };
	
	//get player details
	this.GetPlayerDetails = function (pid) {
        var promise =  $http.get(this.url + "playerStats?apikey=" +this.apikey+"&pid="+pid, this.config)
   .success(function (response) {
   });
        return promise;

    };
	
		//get Match  details
	this.GetMatchDetails = function (Mid) {
        var promise =  $http.get(this.url + "fantasySummary?apikey=" +this.apikey+"&unique_id="+Mid, this.config)
   .success(function (response) {
   });
        return promise;

    };

        this.isUndefinedOrNull = function (val) {
            return angular.isUndefined(val) || val === null
        }






    } ]);





//fullscreen btn 
 function maxWindow() {
        window.moveTo(0, 0);


        if (document.all) {
            top.window.resizeTo(screen.availWidth, screen.availHeight);
        }

        else if (document.layers || document.getElementById) {
            if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
                top.window.outerHeight = screen.availHeight;
                top.window.outerWidth = screen.availWidth;
            }
        }
    }