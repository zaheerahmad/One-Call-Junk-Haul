

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