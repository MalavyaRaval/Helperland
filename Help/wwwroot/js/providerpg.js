
function TabNSClick() {
  $("#NewServReqTab").addClass("active");
  $("#UpcomingServTab").removeClass("active");
  $("#ServHistoryTab").removeClass("active");
  $("#BlockCustTab").removeClass("active");
    $("#MyRatingTab").removeClass("active");
    $("#ServScheduleTab").removeClass("active");

  $(".NewServContainer").show();
  $(".ServHistory").hide();
  $(".UpcomingServiceContainer").hide();
  $(".BlockCust").hide();
    $(".provider-setting").hide();
    $(".RatingContainer").hide();
    $(".ScheduleContainer").hide();
}

function TabUSClick() {
  
  $("#NewServReqTab").removeClass("active");
  $("#UpcomingServTab").addClass("active");
  $("#ServHistoryTab").removeClass("active");
    $("#BlockCustTab").removeClass("active");
    $("#MyRatingTab").removeClass("active");
    $("#ServScheduleTab").removeClass("active");

  $(".NewServContainer").hide();
  $(".ServHistory").hide();
  $(".UpcomingServiceContainer").show();
  $(".BlockCust").hide();
    $(".provider-setting").hide();
    $(".RatingContainer").hide();
    $(".ScheduleContainer").hide();
}

function TabSHClick() {
  
  $("#NewServReqTab").removeClass("active");
  $("#UpcomingServTab").removeClass("active");
  $("#ServHistoryTab").addClass("active");
    $("#BlockCustTab").removeClass("active");
    $("#MyRatingTab").removeClass("active");
    $("#ServScheduleTab").removeClass("active");

  $(".NewServContainer").hide();
  $(".ServHistory").show();
  $(".UpcomingServiceContainer").hide();
  $(".BlockCust").hide();
    $(".provider-setting").hide();
    $(".RatingContainer").hide();
    $(".ScheduleContainer").hide();
}


function TabBCClick() {
  
  $("#NewServReqTab").removeClass("active");
  $("#UpcomingServTab").removeClass("active");
  $("#ServHistoryTab").removeClass("active");
    $("#BlockCustTab").addClass("active");
    $("#MyRatingTab").removeClass("active");
    $("#ServScheduleTab").removeClass("active");

  $(".NewServContainer").hide();
  $(".ServHistory").hide();
  $(".UpcomingServiceContainer").hide();
  $(".BlockCust").show();
    $(".provider-setting").hide();
    $(".RatingContainer").hide();
    $(".ScheduleContainer").hide();
}


function TabMRClick() {

    $("#NewServReqTab").removeClass("active");
    $("#UpcomingServTab").removeClass("active");
    $("#ServHistoryTab").removeClass("active");
    $("#BlockCustTab").removeClass("active");
    $("#MyRatingTab").addClass("active");
    $("#ServScheduleTab").removeClass("active");
    

    $(".NewServContainer").hide();
    $(".ServHistory").hide();
    $(".UpcomingServiceContainer").hide();
    $(".BlockCust").hide();
    $(".provider-setting").hide();
    $(".RatingContainer").show();
    $(".ScheduleContainer").hide();
}


function TabSSClick() {

    $("#NewServReqTab").removeClass("active");
    $("#UpcomingServTab").removeClass("active");
    $("#ServHistoryTab").removeClass("active");
    $("#BlockCustTab").removeClass("active");
    $("#MyRatingTab").removeClass("active");
    $("#ServScheduleTab").addClass("active");


    $(".NewServContainer").hide();
    $(".ServHistory").hide();
    $(".UpcomingServiceContainer").hide();
    $(".BlockCust").hide();
    $(".provider-setting").hide();
    $(".RatingContainer").hide();
    $(".ScheduleContainer").show();

    calendar.render();
}

function TabNSNav() {

  $(".NewServContainer").show();
  $(".ServHistory").hide();
  $(".UpcomingServiceContainer").hide();
  $(".BlockCust").hide();
    $(".provider-setting").hide();
    $(".RatingContainer").hide();
}

function TabUSNav() {

  $(".NewServContainer").hide();
  $(".ServHistory").hide();
  $(".UpcomingServiceContainer").show();
    $(".BlockCust").hide();
    $(".provider-setting").hide();
    $(".RatingContainer").hide();
    $(".ScheduleContainer").hide();
}

function TabSHNav() {

  $(".NewServContainer").hide();
  $(".ServHistory").show();
  $(".UpcomingServiceContainer").hide();
  $(".BlockCust").hide();
    $(".provider-setting").hide();
    $(".RatingContainer").hide();
    $(".ScheduleContainer").hide();
}

function TabBCNav() {

  $(".NewServContainer").hide();
  $(".ServHistory").hide();
  $(".UpcomingServiceContainer").hide();
  $(".BlockCust").show();
    $(".provider-setting").hide();
    $(".RatingContainer").hide();
    $(".ScheduleContainer").hide();
}


function TabMRNav() {

    $(".NewServContainer").hide();
    $(".ServHistory").hide();
    $(".UpcomingServiceContainer").hide();
    $(".BlockCust").hide();
    $(".provider-setting").hide();
    $(".RatingContainer").show();
    $(".ScheduleContainer").hide();
}


function TabSSNav() {

    $(".NewServContainer").hide();
    $(".ServHistory").hide();
    $(".UpcomingServiceContainer").hide();
    $(".BlockCust").hide();
    $(".provider-setting").hide();
    $(".RatingContainer").hide();
    $(".ScheduleContainer").show();
}


function MySetting() {

    $("#NewServReqTab").removeClass("active");
    $("#UpcomingServTab").removeClass("active");
    $("#ServHistoryTab").removeClass("active");
    $("#BlockCustTab").removeClass("active");
    $("#MyRatingTab").removeClass("active");
    $("#ServScheduleTab").removeClass("active");

    $("#MyDetails").addClass("active2")
    $("#change-pass").removeClass("active2")

    $(".NewServContainer").hide();
    $(".ServHistory").hide();
    $(".UpcomingServiceContainer").hide();
    $(".BlockCust").hide();
    $(".provider-setting").show();
    $(".RatingContainer").hide();
    $(".ScheduleContainer").hide();
    $("#tab1").show();
    $("#tab2").hide();
}



function settingTab1() {
    $("#NewServReqTab").removeClass("active");
    $("#UpcomingServTab").removeClass("active");
    $("#ServHistoryTab").removeClass("active");
    $("#BlockCustTab").removeClass("active");
    $("#MyRatingTab").removeClass("active");
    $("#ServScheduleTab").removeClass("active");



    $("#MyDetails").addClass("active2")
    $("#change-pass").removeClass("active2")

    $(".NewServContainer").hide();
    $(".ServHistory").hide();
    $(".UpcomingServiceContainer").hide();
    $(".RatingContainer").hide();
    $(".BlockCust").hide();
    $(".ScheduleContainer").hide();
    $(".provider-setting").show();
    $("#tab1").show();
    $("#tab2").hide();
}
function settingTab2() {
    $("#NewServReqTab").removeClass("active");
    $("#UpcomingServTab").removeClass("active");
    $("#ServHistoryTab").removeClass("active");
    $("#BlockCustTab").removeClass("active");
    $("#MyRatingTab").removeClass("active");
    $("#ServScheduleTab").removeClass("active");

    $("#MyDetails").removeClass("active2")
    $("#change-pass").addClass("active2")

    $(".NewServContainer").hide();
    $(".ServHistory").hide();
    $(".RatingContainer").hide();
    $(".UpcomingServiceContainer").hide();
    $(".ScheduleContainer").hide();
    $(".BlockCust").hide();
    $(".provider-setting").show();
    $("#tab2").show();
    $("#tab1").hide();
}










$(document).ready(function () {

    getServiceHistoryTable();
});

function getServiceHistoryTable() {
    $.ajax({
        type: "GET",
        url: '/UserPage/getServiceHistory',
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function (result) {
            $('#ServiceHistoryTbody').empty();

            for (var i = 0; i < result.length; i++) {

                $('#ServiceHistoryTbody').append(' <tr data-value=' + result[i].serviceRequestId + ' > <td data-label="Service ID" class="SH-ServId">'
                    + '<span>' + result[i].serviceRequestId + '</span></td>'
                    + '<td data-label="Service Date"> <div class="SH-ServDateSpan"><p><img src="/Images/calendar2.png" alt="calender">&nbsp;' + '<span class="service-date">'
                    + result[i].date + ' </span></p >'
                    + '<p><img src="/Images/layer-14.png" alt="clock">&nbsp;' + result[i].startTime + '-' + result[i].endTime + '</p></div></td>'
                    + '<td class="SH-CustDetail" data-label="Customer Details"><p>' + result[i].customerName + '</p>'
                    + '<p><img src="/Images/layer-15.png" alt="Home" style="padding-bottom: 3px;">&nbsp;<span class="detailContent2">' + result[i].address + ' </span>'
                    + '</p></td></tr>');

            }

            ServiceHistoryDatatable();
                

        },
        error: function (error) {
            console.log(error);
        }
    });
}





function getUpcomingServiceTable() {


    $.ajax({
        type: "GET",
        url: '/UserPage/getUpcomingService',
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function (result) {

           


            $('#UpcomingServiceTbody').empty();

            for (var i = 0; i < result.length; i++) {

                $('#UpcomingServiceTbody').append('<tr data-value=' + result[i].serviceRequestId + ' ><td data-label="Service ID"  class="US-ServId">'
                    + result[i].serviceRequestId + '</td>'
                    + '<td data-label="Service Date" class="US-ServDate"> <p><img src="/Images/calendar2.png" alt="calender"><span class="service-date">'
                    + result[i].date + ' </span></p>'
                    + '<p><img src="/Images/layer-14.png" alt="clock">&nbsp;' + result[i].startTime + '-' + result[i].endTime + '</p></td>'
                    + '<td class="US-CustDetail" data-label="Customer details"><p>' + result[i].customerName + '</p>'
                    + '<p><img src="/images/layer-15.png" alt=""><span class="detailContent2">' + result[i].address + ' </span></p></td>'
                    + '<td data-label="Distance" class="US-Dist"> - </td >'
                    + '<td class="usTableCancelbtn"><button class="rounded-pill cancel-button" id="CancelServRequestBtn">Cancel</button></td></tr>'
                );
            }

            upcomingserviceDatatable();

        },
        error: function (error) {
            console.log(error);
        }
    });

}


$(document).ready(function () {

    getUpcomingServiceTable();

});


$(document).ready(function () {
    blockCustomer();
});

function blockCustomer() {

    $.ajax({
        type: "GET",
        url: '/UserPage/GetCustomer',
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function (result) {
            $('#customerGrid').empty();



            for (var i = 0; i < result.length; i++) {

                var unblock = "d-none";
                var block = ""
                if (result[i].favoriteAndBlocked != null) {

                    var status = result[i].favoriteAndBlocked.isBlocked;

                    if (status == true) {
                        block = "d-none";
                        unblock = "";

                    }


                }



                $('#customerGrid').append('<div class="col-md-4 col-sm-4 text-center BlockCustCard"><div class="card"><div class="card-body">' +
                    '<div class="sp-avatar">' +
                    '<img src = "/Images/forma-1-copy-19.png" alt = "SPAvatar" >' +
                    '</div >' +
                    '<h5 class="BlockcustName"> ' + result[i].user.firstName + '  </h5>' +
                    '<button id="' + result[i].user.userId + 'B" class="' + block + ' rounded-pill BlockCustBtn">Block</button>' +
                    '<button id="' + result[i].user.userId + 'U" class="' + unblock + ' rounded-pill BlockCustBtn">UnBlock</button>' +
                    '</div></div></div>'
                );

                //$('.page-control').show();
            }

        },
        error: function (error) {
            console.log(error);
        }
    });

}





$(document).on('click', '.BlockCustBtn', function () {

    var combine = this.id;


    var req = combine.substring(combine.length - 1, combine.length);
    var Id = combine.substring(0, combine.length - 1);



    var data = {};
    data.Id = parseInt(Id);
    data.Req = req;


    $.ajax({
        type: 'GET',
        url: '/UserPage/BlockCustomer',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {

            alert("User Blocked");
            blockCustomer();


        },
        error: function () {

            alert("error");
        }
    });



});











function exportexcel() {
    $("#ServHistoryTable").table2excel({
        name: "Table2Excel",
        filename: "Provider-ServiceHistory",
        fileext: ".xls"
    });
}















$(document).ready(function () {
    getsettingsdata();
    getaddressdata();
});

function getsettingsdata() {

    $.ajax({
        type: 'GET',
        url: '/UserPage/GetProDetail',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

        success: function (result) {

            var firstname = document.getElementById("detail-fname");
            var lastname = document.getElementById("detail-lname");
            var email = document.getElementById("detail-email");
            var phoneno = document.getElementById("detail-mobile");
            

            firstname.value = result.firstName;
            lastname.value = result.lastName;
            email.value = result.email;
            phoneno.value = result.mobile;

            

                var dateOfBirth = result.dateOfBirth.split('T');
                var dateOfBirthArray = dateOfBirth[0].split("-");
                console.log(dateOfBirthArray);
                $("#dobday").val(dateOfBirthArray[2]);
                $("#dobmonth").val(dateOfBirthArray[1]);
                $("#dobyear").val(dateOfBirthArray[0]);
            

            

                $("#Nationality").val(result.nationalityId);

            

            

                $("input[name=Gender][value='" + result.gender + "']").prop("checked", true);
            
       
           
                $("input[name=avtar][value='" + result.userProfilePicture + "']").prop("checked", true);
           


        },
        error: function () {
            alert("Error2");
        }
    });
}




function getaddressdata() {

    $.ajax({
        type: 'GET',
        url: '/UserPage/GetProAddress',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

        success: function (result) {

           /* var Street = document.getElementById("detail-streetname");
            var houseno = document.getElementById("detail-Houseno");
            var pincode = document.getElementById("detail-zipcode");
            var city = document.getElementById("detail-city");


            
                Street.value = result.addressLine2;
                pincode.value = result.postalCode;
                city.value = result.city;
            houseno.value = result.addressLine1;*/


            $("#detail-streetname").val(result.addressLine2);
            $("#detail-zipcode").val(result.postalCode);
            $("#detail-city").val(result.city);
            $("#detail-Houseno").val(result.addressLine1);

                //getCityFromPostalCode(result.address.postalCode);
            


        },
        error: function () {
            alert("Error1");
        }
    });
}


$("#detail-zipcode").keyup(function () {
    if ($("#detail-zipcode").val().length == 6) {
        getCityFromPostalCode($("#detail-zipcode").val(), "#detail-city");
    }
});



$("#DetailsSubmit").on('click', function () {


    var data = {};
    data.user = {};
    data.address = {};

    data.user.firstName = document.getElementById("detail-fname").value;
    data.user.lastName = document.getElementById("detail-lname").value;
    data.user.email = document.getElementById("detail-email").value;
    data.user.mobile = document.getElementById("detail-mobile").value;
    data.user.dateOfBirth = $("#dobday").val() + "-" + $("#dobmonth").val() + "-" + $("#dobyear").val();

    console.log(data.user.dateOfBirth);

    data.user.nationalityId = $("#Nationality").val();
    data.user.gender = document.querySelector('input[name="Gender"]:checked').value;
    data.user.userProfilePicture = document.querySelector('input[name="avtar"]:checked').value;
    data.address.addressLine2 = document.getElementById("detail-streetname").value;
    data.address.addressLine1 = document.getElementById("detail-Houseno").value;
    data.address.postalCode = document.getElementById("detail-zipcode").value;
    data.address.city = document.getElementById("detail-city").value;
    //data.address.state = document.getElementById("SPSettingsState").value;
    data.address.email = document.getElementById("detail-email").value;
    data.address.mobile = document.getElementById("detail-mobile").value;


    $.ajax({
            type: 'POST',
            url: '/UserPage/UpdateProData',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: data,
            success: function (result) {
                if (result.value == "true") {



                    alert("Data Updated");
                    window.location.reload();

                }
                else {
                    alert("Please Try Again");
                }
            },
            error: function () {
                alert("error");
            }
    });

    

});













$("#ChangePassword").on('click', function () {

    var data = {};
    data.oldPassword = document.getElementById("old-password").value;
    data.newPassword = document.getElementById("new-password").value;
    data.confirmPassword = document.getElementById("cnfrm-password").value;


    $.ajax({
            type: "POST",
            url: "/UserPage/ProChangePassword",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            data: data,
            success: function (result) {
                if (result.value == "true") {
                    alert("Password Changed Successfully.");
                    window.location.reload();
                }
                else if (result.value == "false") {
                    alert("Current(Old) Password is wrong! Please try again.");
                }
            },
            error: function (error) {
                alert("Something went wrong! Please try again leter.");
            }
    });
    

});




var serviceRequestId = "";

$("#NewServTable").click(function (e) {


    serviceRequestId = e.target.closest("tr").getAttribute("data-value");


    if (serviceRequestId != null && e.target.classList != "newReqConflictBtn") {

        document.getElementById("spserviceReqdetailsbtn").click();

    }
});
/* all details popup model */

document.getElementById("spserviceReqdetailsbtn").addEventListener("click", function () {

    getAllServiceDetails();

});


function getAllServiceDetails() {
    var data = {};
    data.ServiceRequestId = parseInt(serviceRequestId);
    $.ajax({
        type: 'GET',
        url: '/UserPage/getAllDetails',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {
            if (result != null) {

                showAllServiceRequestDetails(result);

            }
            else {
                alert("result is null");
            }

        },
        error: function () {

            alert("error");
        }
    });
}

function showAllServiceRequestDetails(result) {

    var dateTime = document.getElementById("SpServiceReqDatetime");
    var duration = document.getElementById("SpServiceReqDuration");
    document.getElementById("SpServiceReqId").innerHTML = serviceRequestId;
    var extra = document.getElementById("SpServiceReqExtra");
    var amount = document.getElementById("SpServiceReqAmount");
    var customerName = document.getElementById("SpServiceReqCustomerName");
    var address = document.getElementById("SpServiceReqAddress");
    var comment = document.getElementById("SpServiceReqComment");
    //var Status = document.getElementById("SpServiceReqStatus");


    dateTime.innerHTML = result.date.substring(0, 10) + "<br>" + result.startTime + " - " + result.endTime;
    duration.innerHTML = result.duration + " Hrs";



    var newServiceBtn = "";
    var upcomingServiceBtn = "";
    switch (result.status) {
        case 1: /*new */

            newServiceBtn = "";
            upcomingServiceBtn = "d-none";

            break;
        case 2: /*pending */

            newServiceBtn = "d-none";
            upcomingServiceBtn = "";
            break;
        case 3: /*completed */

            newServiceBtn = "d-none";
            upcomingServiceBtn = "d-none";
            break;

        default: /*other status */
            alert("invalid status ")

    }

    document.getElementById("detailPopUpNew").className = newServiceBtn;

    document.getElementById("detailPopUpUpComing").className = upcomingServiceBtn;



    var popupcompleteclass = "";
    if (result.complete) {
        popupcompleteclass = "CompleteService";
    } else {
        popupcompleteclass = "d-none";
    }

    document.getElementById("newServiceReqCompleteBtn").className = popupcompleteclass;

    extra.innerHTML = "";
    if (result.cabinet == true) {
        extra.innerHTML += "<div class='extraElement '> Inside Cabinet </div>";
    }
    if (result.laundry == true) {

        extra.innerHTML += "<div class='extraElement'>  Laundry Wash & dry </div>";
    }
    if (result.oven == true) {
        extra.innerHTML += "<div class='extraElement'>  Inside Oven  </div>";
    }
    if (result.fridge == true) {
        extra.innerHTML += "<div class='extraElement'> Inside Fridge </div>";
    }
    if (result.window == true) {
        extra.innerHTML += "<div class='extraElement'>  Interior Window</div>";
    }
    amount.innerHTML = " &euro;" + result.totalCost;
    address.innerHTML = result.address;
    customerName.innerHTML = result.customerName;
    comment.innerHTML = "";

    getMap(result.zipCode);
    if (result.comments != null) {
        comment.innerHTML = result.comments;
    }
}



/*---map ----*/
function getMap(zipcode) {



    var embed = "<iframe width='100%25' height='100%25'  frameborder='0'  scrolling='no' marginheight='0' marginwidth='0'     src='https://maps.google.com/maps?&amp;q=" +
        encodeURIComponent(zipcode) +
        "&amp;output=embed'><a href='https://www.gps.ie/car-satnav-gps/'>sat navs</a></iframe>";

    $('#newServiceReqMap').html(embed);

}



$("#newServiceReqAccept").on('click', function () {

    var data = {};

    data.ServiceRequestId = parseInt(serviceRequestId);
    $.ajax({
        type: 'GET',
        url: '/UserPage/acceptService',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {
            if (result == "Suceess") {


                alert("Service Request Accepted!");
                window.location.reload();


            }
            else if (result == "Service Req Not available") {

                alert("Service Request Unavailable!!");
            }
            else if (result == "error") {

                alert("Error Occured!");
            }
            else {
                

                alert("Another service request " + result + " has already been assigned which has time overlap with this service request.You can�t pick this one!")
                var conflictbtn = "#Conflict" + serviceRequestId;

                $(conflictbtn).removeClass('d-none');
                
            }

        },
        error: function () {

            alert("error");
        }
    });

});

/* conflict btn */

$(".newReqConflictBtn").on('click', function () {


    var temp = this.id.toString();
    var id = temp.substring(8, temp.length);
    var data = {};
    data.ServiceRequestId = parseInt(id);

    $.ajax({
        type: 'GET',
        url: '/UserPage/ConflictDetails',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {
            alert(result);


        },
        error: function () {

            alert("error");
        }
    });


});










$("#UpcomingServiceTable").click(function (e) {


    serviceRequestId = e.target.closest("tr").getAttribute("data-value");


    if (serviceRequestId != null) {

        document.getElementById("spserviceReqdetailsbtn").click();

    }
});



$("#newServiceReqCancelBtn").on('click', function () {

    var data = {};

    data.serviceRequestId = serviceRequestId;

    $.ajax({
        type: 'POST',
        url: '/UserPage/cancelRequest',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {
            if (result == "Success") {
                alert("Request Cancelled");
                window.location.reload();

            }
            else {
                alert("fail");
            }
        },
        error: function () {
            alert("error");
        }
    });


});




$("#newServiceReqCompleteBtn").on('click', function () {

    var data = {};

    data.serviceRequestId = serviceRequestId;

    $.ajax({
        type: 'GET',
        url: '/UserPage/CompleteService',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {

            if (result == "true") {
                alert("Service Request marked as completed");
                window.location.reload();

            }
            else {
                alert("opps! something went wrong");

            }

        },
        error: function () {

            alert("error");
        }
    });


});




//City from pincode
function getCityFromPostalCode(zip, Id) {
    $.ajax({
        method: "GET",
        url: "https://api.postalpincode.in/pincode/" + zip,
        dataType: 'json',
        cache: false,
        success: function (result) {
            if (result[0].status == "Error" || result[0].status == "404") {

                alert("Invalid PostalCode");

            }
            else {
                $(Id).val(result[0].PostOffice[0].District).prop("disabled", true);

                state = result[0].PostOffice[0].State;


            }
        },
        error: function (error) {

        }
    });
}


$(document).ready(function () {

    MyRatings();

});


function MyRatings() {

    $.ajax({
        type: 'GET',
        url: '/UserPage/getRatingData',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

        success: function (result) {

            $('#RatingList').empty();

            for (var i = 0; i < result.length; i++) {

                var star = "";


                for (var j = 1; j < 6; j++) {

                    if (j <= result[i].rating) {

                        star += '<i class="fa fa-star " style="color:#ECB91C; "></i>';

                    }
                    else {
                        star += '<i class="fa fa-star " style="color:silver;"></i>'
                    }




                }

                star += '<span> &nbsp;' + result[i].remarks + '</span>'




                $('#RatingList').append('<div class="row  rating-row"><div class="row"><div class="col-3">'
                    + '<p>' + result[i].serviceRequestId + '</p>'
                    + '<p>' + result[i].customerName + '</p></div><div class="col-5">'
                    + '<p> <span><img src="/image/calendar2.png" alt=""></span> <span class="upcoming-date"><b>' + result[i].serviceDate + '</b></span></p>'
                    + ' <p><span><img src="/image/layer-14.png" alt=""></span><span>' + result[i].startTime + ' - ' + result[i].endTime + '</span></p></div>'
                    + '<div class="col-4"><p>Rating</p>'
                    + '<div class="star-ratingmodel text-start">' + star + '</div></div></div><hr />'
                    + '<div class="row"><p><b>Customer Comments</b></p><p>' + result[i].comments + '</p></div></div>'







                );


            }


        },
        error: function () {
            alert("error");
        }
    });




}


$(document).ready(function () {

    addServiceSchedule();

});


var calendarEl = document.getElementById('calendar');
var calendar;

function addServiceSchedule() {

    $.ajax({
        type: 'GET',
        url: "/UserPage/GetServiceSchedule",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",

        success: function (result) {
            console.log(result);
            var events = [];
            if (result != "false") {

                for (let i = 0; i < result.length; i++) {
                    var bgColor = "#555";
                    if (result[i].status == 2) {
                        bgColor = "#146371";
                    }

                    events.push({
                        id: result[i].serviceRequestId,
                        start: result[i].date,
                        title: result[i].startTime + "-" + result[i].endTime,
                        backgroundColor: bgColor,
                        borderColor: "#fff",
                    });
                }

                console.log(events);

                calendar = new FullCalendar.Calendar(calendarEl, {
                    initialView: 'dayGridMonth',

                    headerToolbar: {
                        left: 'prev,next',
                        center: 'title',
                        right: ''
                    },
                    events: events,
                    eventClick: function (info) {

                        console.log(info.event.id);
                        serviceRequestId = info.event.id;
                        $("#spserviceReqdetailsbtn").click();
                    },
                });
                calendar.render();
            }
            else {

                alert("Something went wrong...")

            }
        },
        error: function (error) {
            alert(error);
        },


    });
}












/*pagination for ProviderServiceReq*/



var Newservicerequestpagination = new DataTable("#NewServTable", {
    searching: false,
    lengthMenu: [[5, 10, 20, -1], [5, 10, 20, "All"]],
    lengthChange: true,
    responsive: false,
    pagingType: "full_numbers",
    language: {
        paginate: {
            first: "<img src='/Images/first-page.png' alt='first'/>",
            previous: "<img src='/Images/polygon-1-copy-5.png' alt='previous' />",
            next: "<img src='/Images/polygon-1-copy-5.png' alt='next' style='transform: rotate(180deg)' />",
            last: "<img src='/Images/first-page.png' alt='first' style='transform: rotate(180deg) ' />"
        }
    },
    info: true,
    columnDefs: [{ orderable: false, targets: 4 }]
});



/*ServiceHistoryDatatable  */

function ServiceHistoryDatatable() {
    $("#ServHistoryTable").DataTable({

        searching: false,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, "All"]],
        lengthChange: true,
        responsive: false,
        pagingType: "full_numbers",
        language: {
            paginate: {
                first: "<img src='/Images/first-page.png' alt='first'/>",
                previous: "<img src='/Images/polygon-1-copy-5.png' alt='previous' />",
                next: "<img src='/Images/polygon-1-copy-5.png' alt='next' style='transform: rotate(180deg)' />",
                last: "<img src='/Images/first-page.png' alt='first' style='transform: rotate(180deg) ' />"
            }
        },
        info: true,
        columnDefs: [{ orderable: false, targets: 2 }]

    });

}




function upcomingserviceDatatable() {
    $("#UpcomingServiceTable").DataTable({

        searching: false,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, "All"]],
        lengthChange: true,
        responsive: false,
        pagingType: "full_numbers",
        language: {
            paginate: {
                first: "<img src='/Images/first-page.png' alt='first'/>",
                previous: "<img src='/Images/polygon-1-copy-5.png' alt='previous' />",
                next: "<img src='/Images/polygon-1-copy-5.png' alt='next' style='transform: rotate(180deg)' />",
                last: "<img src='/Images/first-page.png' alt='first' style='transform: rotate(180deg) ' />"
            }
        },
        info: true,
        columnDefs: [{ orderable: false, targets: 4 }]

    });

}








/* document.getElementById("PetsCheck").addEventListener("change", function () {


    if (document.getElementById("PetsCheck").checked == true) {

        Newservicerequestpagination.search("").draw();

    }
    else {

        Newservicerequestpagination.search("false").draw();

    }
});  */
