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

function onBackbutton() {
    // the intro div is considered home, so exit if user
    // wants to go back with button from there
    if (document.getElementById('api-intro').style.display === 'block') {
        console.log("Exiting app");
        navigator.app.exitApp();
    } else {    
        var divs = document.getElementsByClassName('api-div');   
        for(var i=0; i<divs.length; i++) { 
            divs[i].style.display='none';
        }
        document.getElementById('api-intro').style.display = 'block';
        scroll(0,0);
    }
}
var onDeviceReady = function() {
    console.log("deviceready event fired");
    alert(device.uuid);
 
};

function init() {
    document.addEventListener("deviceready", onDeviceReady, true);

}
