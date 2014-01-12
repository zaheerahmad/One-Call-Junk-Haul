var convertDateToString = function(date){
    var dayInNumeric = date.split('-')[2];
    if(dayInNumeric != undefined){
        var date = new Date(date);
        var jobStartDate = date.getDayName()+","+date.getMonthName()+" "+dayInNumeric+","+date.getFullYear();
        return jobStartDate;
    } 
}