/* Copyright (c) 2012 Mobile Developer Solutions. All rights reserved.
 * This software is available under the MIT License:
 * The MIT License
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, 
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies 
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// IMPORTANT: see device.js for document.addEventListener() for each event
var onSearchKeyDown = function() {
    console.log("searchbutton event fired");
    document.getElementById('eventOutput').innerHTML = 
        '<span id="searchbuttontext" style="color:#2b8;"><code>searchbutton</code> fired</span>';
};
var onMenuButtonDown = function() {
    console.log("menubutton event fired");
    document.getElementById('eventOutput').innerHTML = 
        '<span id="menubuttontext" style="color:#2b8;"><code>menubutton</code> fired</span>';
};
var onEventFired = function() {  // generic logging event handler
    console.log("an event fired");
};





/*var getAllJobDriver2  = function(){
    
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
            $('#driverActivity').append("<div data-role='collapsible'><h2>"+allDriverJob[i].title+"</h2><ul data-role='listview' data-theme='a' data-divider-theme='b'><li data-role='list-divider'>Friday, October 8, 2010 <span class='ui-li-count'>2</span></li><li><a href='' id = "+"'"+allDriverJob[i].activityId+"'"+" class = 'detailDriverJob'><h3>"+allDriverJob[i].title+"</h3><p><strong>"+allDriverJob[i].description+"</strong></p><p>"+allDriverJob[i].customerName+"</p><p class='ui-li-aside'><strong>6:24</strong>PM</p></a></li></ul></div>");
    
        }
    }
    else if(allDriverJob != undefined){
        $('#driverActivity').append("<div data-role='collapsible'><h2>"+allDriverJob.title+"</h2><ul data-role='listview' data-theme='a' data-divider-theme='b'><li data-role='list-divider'>Friday, October 8, 2010 <span class='ui-li-count'>2</span></li><li><a href='' id = "+"'"+allDriverJob.activityId+"'"+" class = 'detailDriverJob'><h3>"+allDriverJob.title+"</h3><p><strong>"+allDriverJob.description+"</strong></p><p>"+allDriverJob.customerName+"</p><p class='ui-li-aside'><strong>6:24</strong>PM</p></a></li></ul></div>");
    }
    else{
        return;
    }
    $('#driverJob').trigger("create");
    $('a.detailDriverJob').on('click',showPageDetailForDriverJob);    
    
}*/


// IMPORTANT: see device.js for document.addEventListener() for each event
