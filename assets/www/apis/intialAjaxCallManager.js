var updateActivityInitialCall = function(){    
    var updatedUrl = "";    
    if(isDebug){
        updatedUrl = "http://localhost:82/test_site/UpdateActivities.php";                      
    }
    else{
        updatedUrl = "http://onecalljunkhaul.com/custom-webservices/UpdateActivities.php";                                      
    }
    makeAjaxCall(updatedUrl,"getAllUpdatedJobs","");    
    
}

var getAllOpenedJobsInitialCall = function(){
    var updateUrl1 = "";
    if(isDebug){                                            
        updatedUrl1 = 'http://localhost:82/test_site/GetAllOpenedJobs.php';     
    }
    else{
        updatedUrl1 = 'http://onecalljunkhaul.com/custom-webservices/GetAllOpenedJobs.php';
    }
    makeAjaxCall(updatedUrl1,"getAllActiveJobs","");
    
}
