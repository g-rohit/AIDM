 
    // to shows dates in below formats:

//format1 14/11/2019

//format2 Nov 14th 2019

//format3 Thursday, Nov 14 2019

//format4 Thu, Nov 14 2019

//format5 11-14-2019, Thursday

//format6 14th November, 2019

var monthlist = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  var fulldate = new Date(); //eg: Fri Nov 15 2019 04:50:51 GMT+0530 (India Standard Time)
  var date = fulldate.getDate(); //returns date e: 15
  var month = monthlist[fulldate.getMonth()]; //eg: November
  var dayOftheWeek = daylist[fulldate.getDay()]; //eg: Friday
  var year = fulldate.getFullYear(); //eg : 2019
  let time = new Date(1000 * date).toLocaleTimeString();
  
  function format1() {
    var finalDate = date + "/" + month + "/" + year;
    document.querySelector("#format1").innerHTML = finalDate;
  }
  
  
  function format2() {
    var finalDate = month.substr(0, 3) + " " + date + '<sup>' + 'th' + '</sup>' + " " + year;
    document.querySelector("#format2").innerHTML = finalDate;
  }
  
  function format3() {
    var finalDate = dayOftheWeek+',' +" "+month.substr(0, 3) + " " + date +" " + year;
    document.querySelector("#format3").innerHTML = finalDate;
  }
  
  function format4() {
    var finalDate = dayOftheWeek.substr(0, 3)+',' +" "+month.substr(0, 3) + " " + date +" " + year + ', '+  ' ' +time;;
    document.querySelector("#format4").innerHTML = finalDate;
  }
  
  function format5() {
    var finalDate = (fulldate.getMonth()+1) +"-"+ fulldate.getDate()+ "-" + year+", "+dayOftheWeek +  ' ' +time;
    document.querySelector("#format5").textContent = finalDate;
  }
  
  function format6() {
    var finalDate = date + '<sup>' + 'th' + '</sup>' + " " +month + ", " +  year;
    document.querySelector("#format6").innerHTML = finalDate;
  }

 
  format4()