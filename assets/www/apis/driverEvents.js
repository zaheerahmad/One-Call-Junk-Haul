

var startDriverJobEvent = function(e){
    e.preventDefault();
    activityId = localStorage.getItem("activityId");
    startDriverJobIntialAjax(activityId);    
}


var showPageDetailForDriverJob = function(e){
    e.preventDefault();
    var activityId = $(this).attr('id');
    if(allDriverJob instanceof Array){
        for(var i = 0; i < allDriverJob.length; i++){
            if(activityId == allDriverJob[i].activityId){
                selectedActivity = allDriverJob[i];
                break;                          
            }                       
        }
    } 
    else if(activityId == allDriverJob.activityId){
        selectedActivity = allDriverJob;
    }
    localStorage.setItem("activityId",activityId);
    switchPage("#jobDetailManager");
}



var driverJobRefresh = function(e){
    e.preventDefault();
    var driverId = localStorage.getItem("personId");                        
    var url = '';
    if(isDebug){                                
        url = "http://localhost:82/test_site/GetDriverJobs.php?driverId="+driverId;
    }
    else{
        url = 'http://onecalljunkhaul.com/custom-webservices/GetDriverJobs.php?driverId='+driverId;                         
    }
    makeAjaxCall(url,'getAllDriverJob','');
    localStorage.setItem("isDriverJobPageRefresh","true");
    
}