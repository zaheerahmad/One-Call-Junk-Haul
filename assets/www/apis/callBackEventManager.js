
var getAllUpdatedJobsCallBack =  function(responseJson){
                
                if(responseJson.status.toUpperCase() == "SUCCESS"){
                    getAllOpenedJobsInitialCall();
                }
                else{
                    alert(responseJson.message);                
                }               
}



var getAllActiveJobs = function(responseJson){
    if(responseJson.status == "Success"){                   
        allActiveJobsArray = responseJson.response;
        $('#allActivities').html("");
        var driverInfo;
        var driverInfoHtml = "";
        if(allActiveJobsArray instanceof Array){    
            
            for(var i = 0;i < allActiveJobsArray.length; i++){                              
                
                driverInfoHtml = '';
                if(allActiveJobsArray[i].driverDetail != undefined){
                    driverId  = allActiveJobsArray[i].driverDetail.personId;
                    
                    driverFirstName = allActiveJobsArray[i].driverDetail.fName;
                    driverLastName = allActiveJobsArray[i].driverDetail.lName;
                
                    driverFirstName = driverFirstName != '' ? driverFirstName : 'N/A';
                    driverLastName = driverLastName != '' ? driverLastName : 'N/A';

                    driverInfoHtml = '<p><font color="red"><b>Driver Name : '+driverFirstName+' '+driverLastName+'</b></font></p>'; 
                
                }                       
                $('#allActivities').append("<div data-role='collapsible'><h2>"+allActiveJobsArray[i].title+"</h2><ul data-role='listview' data-theme='a' data-divider-theme='b'><li data-role='list-divider'>Friday, October 8, 2010 <span class='ui-li-count'>2</span></li><li><a href='' id = "+"'"+allActiveJobsArray[i].activityId+"'"+" class = 'assignJob'><h3>"+allActiveJobsArray[i].title+"</h3><p><strong>"+allActiveJobsArray[i].description+"</strong></p><p>"+allActiveJobsArray[i].customerName+"</p><p class='ui-li-aside'><strong>6:24</strong>PM</p>"+driverInfoHtml+"</a></li></ul></div>");                  
            }
        }
        else if(allActiveJobsArray != undefined){
            //driverId = allActiveJobsArray.driverDetail.personId;
            driverInfoHtml = '';
            if(allActiveJobsArray.driverDetail != undefined){
            
                driverFirstName = allActiveJobsArray.driverDetail.fName;
                driverLastName = allActiveJobsArray.driverDetail.lName;
            
                driverFirstName = driverFirstName != '' ? driverFirstName : 'N/A';
                driverLastName = driverLastName != '' ? driverLastName : 'N/A';

                driverInfoHtml = '<p><font color="red"><b>Driver Name :'+driverFirstName+' '+driverLastName+'</b></font></p>';
            
            }               
                
            $('#allActivities').append("<div data-role='collapsible'><h2>"+allActiveJobsArray.title+"</h2><ul data-role='listview' data-theme='a' data-divider-theme='b'><li data-role='list-divider'>Friday, October 8, 2010 <span class='ui-li-count'>2</span></li><li><a href='' id = "+"'"+allActiveJobsArray.activityId+"'"+" class = 'assignJob'><h3>"+allActiveJobsArray.title+"</h3><p><strong>"+allActiveJobsArray.description+"</strong></p><p>"+allActiveJobsArray.customerName+"</p><p class='ui-li-aside'><strong>6:24</strong>PM</p>"+driverInfoHtml+"</a></li></ul></div>");
        }
        else{
            return;
        }
        
        $('#getAllActiveJobsForm').trigger("create");
        $("a.assignJob").on("click",function(e){
            e.preventDefault();
            var activityId = $(this).attr('id');                        
            for(var i = 0; i < allActiveJobsArray.length; i++){
                if(activityId == allActiveJobsArray[i].activityId){
                    selectedActivity = allActiveJobsArray[i];
                    break;                          
                }                       
            }                       
            $(":mobile-pagecontainer").pagecontainer("change", "#jobDetailManager", { });
        
    });
    
    }
    else{                                       
        alert(responseJson.message);
    }
 
 }
 