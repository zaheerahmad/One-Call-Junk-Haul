

var getAllJobDriver2  = function(){
    
    role = localStorage.getItem('role');
    $("#driverActivity").empty();
    $("#endDayDriver").remove();
    $("#getAllJobDriver").remove();

    if(role != undefined && role.toUpperCase() == "MANAGER"){
        //$("#driverJobHeader").append('<h1>One Call Junk Haul</h1>');
    }
    else{                       
        $("#driverJobHeader").append('<a data-role="button" id="endDayDriver" data-rel="refresh" data-transition="slidedown" href="#dayEndingScreen" class="ui-btn-left" id="endJobButton" data-icon="gear">End Day</a><a data-role="button" data-rel="refresh" class="ui-btn-right" id="getAllJobDriver" data-icon="gear">Refresh</a>');
        $("#getAllJobDriver").on("click",driverJobRefresh);
    }
    $("#driverJobHeader").trigger('create');
    $("#driverActivity").empty();                       
    //allDriverJob = allActiveJobsArray[2];
    if(allDriverJob != undefined && allDriverJob instanceof Array){
        for(var i = 0;i < allDriverJob.length; i++){                    
            
            //var date = new Date(allDriverJob[i].startTime.toString().split(" ")[0]);
            //var jobStartDate = date.getMonthName()+","+date.getDayName()+","+date.getFullYear();
            jobStartDate = convertDateToString(allDriverJob[i].startTime.toString().split(" ")[0]);
            $('#driverActivity').append("<div data-role='collapsible'><h2>"+allDriverJob[i].title+"</h2><ul data-role='listview' data-theme='a' data-divider-theme='b'><li data-role='list-divider'>"+jobStartDate+"<span class='ui-li-count'>2</span></li><li><a href='' id = "+"'"+allDriverJob[i].activityId+"'"+" class = 'detailDriverJob'><h3>"+allDriverJob[i].title+"</h3><p><strong>"+allDriverJob[i].description+"</strong></p><p>"+allDriverJob[i].customerName+"</p><p class='ui-li-aside'><strong>"+allDriverJob[i].startTime+"</strong></p></a></li></ul></div>");
    
        }
    }
    else if(allDriverJob != undefined){
        $('#driverActivity').append("<div data-role='collapsible'><h2>"+allDriverJob.title+"</h2><ul data-role='listview' data-theme='a' data-divider-theme='b'><li data-role='list-divider'>Friday, October 8, 2010 <span class='ui-li-count'>2</span></li><li><a href='' id = "+"'"+allDriverJob.activityId+"'"+" class = 'detailDriverJob'><h3>"+allDriverJob.title+"</h3><p><strong>"+allDriverJob.description+"</strong></p><p>"+allDriverJob.customerName+"</p><p class='ui-li-aside'><strong>"+allDriverJob.startTime+"</strong></p></a></li></ul></div>");
    }
    else{
        return;
    }
    $('#driverJob').trigger("create");
    $('a.detailDriverJob').on('click',showPageDetailForDriverJob);    
    
}

var startDriverJobCallBackEvent = function(responseJson){
    if(responseJson.status.toUpperCase() == "SUCCESS"){
        alert(responseJson.message);        
    }
    else{
        alert(responseJson.message);        
    }
    
}