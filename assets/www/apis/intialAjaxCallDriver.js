

var startDriverJobIntialAjax = function(activityId){    
    url = "";
    if(isDebug){
        url = "http://localhost:82/test_site/StartJob.php?activityId="+activityId;
    }
    else{
        url = "http://onecalljunkhaul.com/custom-webservices/StartJob.php?activityId="+activityId;        
    }
    makeAjaxCall(url,"startDriverJobCallBackEvent","");
    
}


var getDriverJobIntialAjax = function(driverId){
                          
    var url = '';
    if(isDebug){                                
        url = "http://localhost:82/test_site/GetDriverJobs.php?driverId="+driverId;
    }
    else{
        url = 'http://onecalljunkhaul.com/custom-webservices/GetDriverJobs.php?driverId='+driverId;                         
    }
    makeAjaxCall(url,'getAllDriverJob','');
}