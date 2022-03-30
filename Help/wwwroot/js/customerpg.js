function Tab1Click() {
    $("#dashboardBtn").addClass("active");
    $("#historyBtn").removeClass("active");

    $(".dashboard-table").show();
    $(".main-table").hide();
    $(".my-setting").hide();
    
}

function Tab2Click() {
    
    $("#dashboardBtn").removeClass("active");
    $("#historyBtn").addClass("active");

    $(".dashboard-table").hide();
    $(".main-table").show();
    $(".my-setting").hide();

}

function Tab1Nav() {

    $(".dashboard-table").show();
    $(".main-table").hide();
    $(".my-setting").hide();
}

function Tab2Nav() {

    $(".dashboard-table").hide();
    $(".main-table").show();
    $(".my-setting").hide();

}


/*var checkTextarea = (e) => {
    const content = $("#canText").val().trim();
    $('#cancelServBtn').prop('disabled', content === '');
  };
  
  $(document).on('keyup', '#canText', checkTextarea);*/




function MySetting() {
    
    $("#dashboardBtn").removeClass("active");
    $("#historyBtn").removeClass("active");
    $("#MyDetails").addClass("active2")
    $("#MyAddress").removeClass("active2")
    $("#change-pass").removeClass("active2")

    $(".dashboard-table").hide();
    $(".main-table").hide();
    $(".my-setting").show();
    $("#tab1").show();
    $("#tab2").hide();
    $("#tab3").hide();
}

function settingTab1(){
    $("#dashboardBtn").removeClass("active");
    $("#historyBtn").removeClass("active");
    $("#MyDetails").addClass("active2")
    $("#MyAddress").removeClass("active2")
    $("#change-pass").removeClass("active2")

    $(".dashboard-table").hide();
    $(".main-table").hide();
    $(".my-setting").show();
    $("#tab1").show();
    $("#tab2").hide();
    $("#tab3").hide();
}
function settingTab2(){
    $("#dashboardBtn").removeClass("active");
    $("#historyBtn").removeClass("active");
    $("#MyAddress").addClass("active2")
    $("#MyDetails").removeClass("active2")
    $("#change-pass").removeClass("active2")

    $(".dashboard-table").hide();
    $(".main-table").hide();
    $(".my-setting").show();
    $("#tab2").show();
    $("#tab1").hide();
    $("#tab3").hide();
}
function settingTab3(){
    $("#dashboardBtn").removeClass("active");
    $("#historyBtn").removeClass("active");
    $("#MyAddress").removeClass("active2")
    $("#MyDetails").removeClass("active2")
    $("#change-pass").addClass("active2")

    $(".dashboard-table").hide();
    $(".main-table").hide();
    $(".my-setting").show();
    $("#tab3").show();
    $("#tab1").hide();
    $("#tab2").hide();
}



/************************************************************************* */

var serviceRequestId = "";

$("#DashboardTable").click(function (e) {


    serviceRequestId = e.target.closest("tr").getAttribute("data-value");


    if (serviceRequestId != null) {

        document.getElementById("serviceReqdetailsbtn").click();

    }
});
/* all details popup model */

document.getElementById("serviceReqdetailsbtn").addEventListener("click", function () {

    getAllServiceDetails();

});




function getAllServiceDetails() {
    var data = {};
    data.ServiceRequestId = parseInt(serviceRequestId);
    $.ajax({
        type: 'GET',
        url: '/UserPage/DashbordServiceDetails',
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
    var dateTime = document.getElementById("serviceDetailDateTime");
    var duration = document.getElementById("serviceDetailDuration");
    document.getElementById("serviceDetailId").innerHTML = serviceRequestId;
    var extra = document.getElementById("serviceDetailExtra");
    var amount = document.getElementById("serviceDetailAmount");
    var address = document.getElementById("serviceDetailAddress");
    var phone = document.getElementById("serviceDetailPhone");
    var email = document.getElementById("serviceDetailEmail");
    var comment = document.getElementById("serviceDetailComment");
    var Status = document.getElementById("serviceDetailStatus");
    dateTime.innerHTML = result.date.substring(0, 10) + " " + result.startTime + " - " + result.endTime;
    duration.innerHTML = result.duration + " Hrs";
    extra.innerHTML = "";
    var varStatus = "";
    var dashbtn = "";
    var servicehistorybtn = "";
    switch (result.status) {
        case 1: /*new */
            varStatus = "new";
            dashbtn = "";
            servicehistorybtn = "d-none";

            break;
        case 2: /*pending */
            varStatus = "pending";
            dashbtn = "";
            servicehistorybtn = "d-none";
            break;
        case 3: /*completed */
            varStatus = "completed";
            dashbtn = "d-none";
            servicehistorybtn = "";
            break;
        case 4: /*cancelled*/
            varStatus = "cancelled";
            dashbtn = "d-none";
            servicehistorybtn = "d-none";
            break;
        default: /*other status */
            alert("invalid status ")

    }

    document.getElementById("customerdashboardbtn").className = dashbtn;

    document.getElementById("customerServiceHistorybtn").className = servicehistorybtn;

    Status.innerHTML = " Status: <button disabled class=" + varStatus+"-status>" + varStatus + "</button > "


    if (result.cabinet == true) {
        extra.innerHTML += "<div class='extraElement '> Inside Cabinet </div> ";
    }
    if (result.laundry == true) {

        extra.innerHTML += "<div class='extraElement'>  Laundry Wash & dry </div> ";
    }
    if (result.oven == true) {
        extra.innerHTML += "<div class='extraElement'>  Inside Oven  </div> ";
    }
    if (result.fridge == true) {
        extra.innerHTML += " <div class='extraElement'> Inside Fridge </div>  ";
    }
    if (result.window == true) {
        extra.innerHTML += "<div class='extraElement'>  Interior Window</div> ";
    }
    amount.innerHTML = "<span class='DashModalAmount'> &euro;" + result.totalCost + "</span>";
    address.innerHTML = result.address;
    phone.innerHTML = result.phoneNo;
    email.innerHTML = result.email;
    comment.innerHTML = "";
    if (result.comments != null) {
        comment.innerHTML = result.comments;
    }
}







document.getElementById("RescheduleUpdateBtn").addEventListener("click", function () {
    var data = {};
    data.Date = document.getElementById("RescheduledDate").value;
    data.startTime = document.getElementById("RescheduledTime").value;
    data.serviceRequestId = parseInt(serviceRequestId);

    $.ajax({
        type: 'POST',
        url: '/UserPage/RescheduleService',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {
            if (result.value == "true") {

                alert("Service Rescheduled");
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





document.getElementById("cancelServBtn").addEventListener("click", function () {

    var ServiceRequestId = parseInt(serviceRequestId);
    var Comments = document.getElementById("canText").value;
    var data = {};

    data.serviceRequestId = ServiceRequestId;
    data.comments = Comments;

    $.ajax({
        type: 'POST',
        url: '/UserPage/CancelService',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {
            if (result.value == "true") {
                alert("Booking Cancelled");
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







$("#HistoryTable").click(function (e) {
    serviceRequestId = e.target.closest("tr").getAttribute("data-value");

    if (serviceRequestId != null) {


        document.getElementById("serviceReqdetailsbtn").click();

    }
});





/* rating star hover */


$(document).ready(function () {

    $("#myRatingModal .modal-body .fa-star").css("color", "silver");
    $("#myRatingModal .modal-body").hover(function () {
        $(".ratingfortimearrival").hover(function () {

            $("#ontime1").click(function () {
                $("#ontime2,#ontime3,#ontime4,#ontime5").css("color", "silver");
                $("#ontime1").css("color", "#ECB91C");
                $(".infomsg").text("1");
            });
            $("#ontime2").click(function () {
                $("#ontime3,#ontime4,#ontime5").css("color", "silver");
                $("#ontime1,#ontime2").css("color", "#ECB91C");
                $(".infomsg").text("2");
            });
            $("#ontime3").click(function () {
                $("#ontime4,#ontime5").css("color", "silver");
                $("#ontime1,#ontime2,#ontime3").css("color", "#ECB91C");
                $(".infomsg").text("3");
            });

            $("#ontime4").click(function () {
                $("#ontime5").css("color", "silver");
                $("#ontime1,#ontime2,#ontime3,#ontime4").css("color", "#ECB91C");
                $(".infomsg").text("4");
            });

            $("#ontime5").click(function () {
                $("#ontime1,#ontime2,#ontime3,#ontime4,#ontime5").css("color", "#ECB91C");
                $(".infomsg").text("5");
            });

        });

        $(".ratingforfriendly").hover(function () {

            $("#friendly1").click(function () {
                $("#friendly2,#friendly3,#friendly4,#friendly5").css("color", "silver");
                $("#friendly1").css("color", "#ECB91C");
                $(".friendlymsg").text("1");
            });
            $("#friendly2").click(function () {
                $("#friendly3,#friendly4,#friendly5").css("color", "silver");
                $("#friendly1,#friendly2").css("color", "#ECB91C");
                $(".friendlymsg").text("2");
            });
            $("#friendly3").click(function () {
                $("#friendly4,#friendly5").css("color", "silver");
                $("#friendly1,#friendly2,#friendly3").css("color", "#ECB91C");
                $(".friendlymsg").text("3");
            });

            $("#friendly4").click(function () {
                $("#friendly5").css("color", "silver");
                $("#friendly1,#friendly2,#friendly3,#friendly4").css("color", "#ECB91C");
                $(".friendlymsg").text("4");
            });

            $("#friendly5").click(function () {
                //    $(".fa-star").css("color", "silver");
                $("#friendly1,#friendly2,#friendly3,#friendly4,#friendly5").css("color", "#ECB91C");
                $(".friendlymsg").text("5");
            });
        });
        $(".ratingforquality").hover(function () {

            $("#quality1").click(function () {
                $("#quality2,#quality3,#quality4,#quality5").css("color", "silver");
                $("#quality1").css("color", "#ECB91C");
                $(".qualitymsg").text("1");
            });
            $("#quality2").click(function () {
                $("#quality3,#quality4,#quality5").css("color", "silver");
                $("#quality1,#quality2").css("color", "#ECB91C");
                $(".qualitymsg").text("2");
            });
            $("#quality3").click(function () {
                $("#quality4,#quality5").css("color", "silver");
                $("#quality1,#quality2,#quality3").css("color", "#ECB91C");
                $(".qualitymsg").text("3");
            });

            $("#quality4").click(function () {
                $("#quality5").css("color", "silver");
                $("#quality1,#quality2,#quality3,#quality4").css("color", "#ECB91C");
                $(".qualitymsg").text("4");
            });

            $("#quality5").click(function () {
                //    $(".fa-star").css("color", "silver");
                $("#quality1,#quality2,#quality3,#quality4,#quality5").css("color", "#ECB91C");
                $(".qualitymsg").text("5");
            });


        });
    })




});









$(document).on('click', '.rateSPSerrvHistory', function () {

    var data = {};
    data.ServiceRequestId = parseInt(serviceRequestId);
    $.ajax({
        type: 'GET',
        url: '/UserPage/GetRating',
        contenttype: 'application/x-www-form-urlencoded; charset=utf-8',
        data: data,
        success: function (result) {
            if (result == null) {
                document.getElementById("show_rating_model").className = "d-none";

            } else {
                document.getElementById("show_rating_model").className = "show_rating_model";
                var rating = parseInt(result.averageRating);
                $('.star-ratingmodel').html("");


                $('.service-provider-ratingmodel').html(result.serviceProvider);
                $("#show_rating_model img.spavtar").attr("src", result.userProfilePicture);
                for (var i = 0; i < 5; i++) {
                    if (i < rating) {
                        $('.star-ratingmodel').append('<i class="fa fa-star " style="color:#ECB91C;" ></i>');
                    } else {
                        $('.star-ratingmodel').append('<i class="fa fa-star " style="color:silver;"></i>');
                    }
                }
                $('.star-ratingmodel').append(result.averageRating);
            }
        },
        error: function () {

            alert("Unable to Fetch Rating");
        }
    });
});







document.getElementById("confirm_rating").addEventListener("click", function () {

    var data = {};
    data.onTimeArrival = $(".infomsg").text();
    data.friendly = $(".friendlymsg").text();
    data.qualityOfService = $(".qualitymsg").text();
    data.ratings = parseFloat((parseFloat(data.onTimeArrival) + parseFloat(data.friendly) + parseFloat(data.qualityOfService)) / 3);

    data.comments = $("#feedbackcomment").val();
    data.serviceRequestId = serviceRequestId;

    $.ajax({

        type: "POST",
        url: "/UserPage/RateServiceProvider",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: data,
        success: function (result) {
            if (result.value == "true") {
                $("#myRatingModal").modal("hide");
                //console.log("submited");

            }
            else {

                alert("Rating Already Given !");


            }
        },
        error: function (error) {
            alert("error");
        }

    });


});



/************************************************************************* */




var currentYear = new Date().getFullYear()
var option = "";
for (var year = 1940; year <= currentYear; year++) {

    var option = document.createElement("option");
    option.text = year;
    option.value = year;

    document.getElementById("dobyear").appendChild(option)

}
document.getElementById("dobyear").value = currentYear;





$(document).ready(function () {


    $.ajax({
        type: 'GET',
        url: '/UserPage/GetCustomerData',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

        success: function (result) {



            var form1_firstname = document.getElementById("detail-fname");
            var form1_lastname = document.getElementById("detail-lname");
            var form1_email = document.getElementById("detail-email");
            var form1_phoneno = document.getElementById("detail-mobile");

            form1_firstname.value = result.firstName;
            form1_lastname.value = result.lastName;
            form1_email.value = result.email;
            form1_phoneno.value = result.mobile;


            console.log(result.dateOfBirth);

            if (result.dateOfBirth != null) {
                var dateOfBirth = result.dateOfBirth.split('T');
                var dateOfBirthArray = dateOfBirth[0].split("-");
                console.log(dateOfBirthArray);
                $("#dobday").val(dateOfBirthArray[2]);
                $("#dobmonth").val(dateOfBirthArray[1]);
                $("#dobyear").val(dateOfBirthArray[0]);
            }


        },
        error: function () {
            alert("error");
        }
    });
});






$("#SaveDetails").on('click', function () {



    var data = {};
    data.firstName = document.getElementById("detail-fname").value;
    data.lastName = document.getElementById("detail-lname").value;
    data.email = document.getElementById("detail-email").value;
    data.mobile = document.getElementById("detail-mobile").value;
    data.dateOfBirth = $("#dobday").val() + "-" + $("#dobmonth").val() + "-" + $("#dobyear").val();

    console.log(data.dateOfBirth);
    
    
    $.ajax({
            type: 'POST',
            url: '/UserPage/UpdateCustomer',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: data,
            success: function (result) {

                if (result.value == "true") {

                    
                    alert("Details Updated Sucessfully.");
                    setTimeout(function () {
                        window.location.reload();
                    }, 5000);
                 
                }
                else {

                    alert("Update Unsuccessful Please Try Again!!")
                }
            },
            error: function () {
                    alert("error");
            }
    });
    

});











$(document).ready(function () {

    getAddress();

});

function getAddress() {
    $.ajax({
        type: 'GET',
        url: '/UserPage/GetUserAddress',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

        success: function (result) {
            if (result != false) {

                console.log(result);

                for (var i = 0; i < result.length; i++) {

                    $("#addressRows").append(

                        '<tr data-value=' + result[i].addressId + ' >'
                        + '<td class="address-details" data-label="Addresses"><div class="addressdetaildiv text-start"><p><strong> Address: </strong>' + result[i].addressLine1 + ", " + result[i].addressLine2 + ', ' + result[i].city + ' - ' + result[i].postalCode + '</p>'
                        + '<p><strong>Phone number: </strong>' + result[i].mobile + '</p></div></td>'
                        + '<td class="myAddressBtns" data-label="Action"><div class="address-action"><p>' +
                        '<button id = "editAddress" class= "btn-primary rounded-pill editAddress" style = "margin-right:5px;padding: 5px 15px; border: none;" data-value=' + result[i].addressId + '>Edit</button >' +
                        '<button id="deleteAddress" class="btn-danger rounded-pill deleteAddress" style="padding: 5px 15px; border: none;" data-value=' + result[i].addressId + '>Delete</button >' +
                        '</p></div></td >'

                       
                    );

                   /* $("#addressRows").attr('data-value', result[i].addressId);

                    $("#addressTr").append(
                        "<span>" + result[i].addressLine1 + ", " + result[i].addressLine2 + ', ' + result[i].city + ' - ' + result[i].postalCode + "</span>"
                    );

                    $("#phoneTr").append(
                        "<span>" + result[i].mobile + "</span>"
                    );

                    $("#editAddress").attr('data-value', result[i].addressId);
                    $("#deleteAddress").attr('data-value', result[i].addressId);*/

                }


            }
            else {
                alert("something wrong");
            }
        },
        error: function () {
            alert("error");
        }
    });
}




$("#addAddresssave").on('click', function () {



    var data = {};
    data.addressLine1 = document.getElementById("addAddressLine1").value;
    data.addressLine2 = document.getElementById("addAddressLine2").value;
    data.postalCode = document.getElementById("addAddressPostalCode").value;
    data.city = document.getElementById("addAddressCity").value;
    data.mobile = document.getElementById("addAddressMobile").value;
    data.email = document.getElementById("detail-email").value;
   

    
        $.ajax({
            type: "POST",
            url: "/UserPage/AddUserAddress",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            data: data,
            success: function (result) {
                if (result.value == "true") {

                    
                    document.getElementById("addAddresscancel").click();
                    alert("Address Added Successfully!");

                    setTimeout(function () {
                        window.location.reload();
                    }, 5000);

                    getAddress();
                }
                else {
                    alert("not saved");
                }

            },
            error: function (error) {
                alert(error);
            }

        });
    
});



var addressId;

$("#tab2").on('click', function (e) {
    var element = e.target.closest("button");

    console.log(element);
    if (element != null) {
        if (element.classList.contains("editAddress")) {
            addressId = element.getAttribute("data-value");
            console.log("editaddress");

            var data = {};
            data.addressId = addressId;

            $.ajax({
                type: 'GET',
                url: '/UserPage/EditAddressView',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: data,
                success: function (result) {
                    if (result != false) {

                        document.getElementById("editAddressLine1").value = result.addressLine1;
                        document.getElementById("editAddressLine2").value = result.addressLine2;
                        document.getElementById("editAddressPostalCode").value = result.postalCode;
                        document.getElementById("editAddressCity").value = result.city;
                        document.getElementById("editAddressMobile").value = result.mobile;
                    }
                },
                error: function (error) {
                    alert(error);
                }
            });

            console.log(addressId);
            $("#editAddressModal").modal("show");



        }
        if (element.classList.contains("deleteAddress")) {
            console.log("delete");
            addressId = element.getAttribute("data-value");
            $("#deleteAddressModal").modal("show");
        }
    }

});










$("#editAddressUpdate").on('click', function () {


    var data = {};
    data.addressId = addressId;
    data.addressLine1 = document.getElementById("editAddressLine1").value;
    data.addressLine2 = document.getElementById("editAddressLine2").value;
    data.postalCode = document.getElementById("editAddressPostalCode").value;
    data.city = document.getElementById("editAddressCity").value;
    data.mobile = document.getElementById("editAddressMobile").value;
    data.email = document.getElementById("detail-email").value;




   
   
        $.ajax({
            type: "POST",
            url: "/UserPage/EditUserAddress",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            data: data,
            success: function (result) {
                if (result.value == "true") {

                    alert("Address Changes !");

                    window.setTimeout(function () {
                        $("#editAddressModal").modal("hide");
                        document.getElementsByClassName("editAddresscancel").click();
                    }, 500);

                    window.location.reload();

                    getAddress();

                }
                else {
                    alert("not saved");
                }
                

            },
            error: function (error) {
                alert(error);
            }

        });
    

});






$("#deleteUserAddress").click(function () {
    var data = {};
    data.addressId = addressId;
    $.ajax({
        type: "POST",
        url: "/UserPage/DeleteUserAddress",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {
            if (result == true) {

                alert("Address Deleted !");
                $("#deleteAddressModal").modal("hide");

                getAddress();
            }
            else {
                alert("fail");
            }
        },
        error: function (error) {

        }
    });

});
















$("#changePass").on('click', function () {

    var data = {};
    data.oldPassword = document.getElementById("old-password").value;
    data.newPassword = document.getElementById("new-password").value;
    data.confirmPassword = document.getElementById("cnfrm-password").value;


    
        $.ajax({
            type: "POST",
            url: "/UserPage/ChangePassword",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            data: data,
            success: function (result) {
                if (result.value == "true") {
                    alert("Password Changed Successfully.");
                }
                else {
                    alert("Password is wrong! Please try again.");
                }
            },
            error: function (error) {
                alert("Something went wrong! Please try again leter.");
            }
        });
    

});




function exportexcel() {
    $("#HistoryTable").table2excel({
        name: "Table2Excel",
        filename: "Customer-ServiceHistory",
        fileext: ".xls"
    });
}



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


$("#editAddressPostalCode").keyup(function () {
    if ($("#editAddressPostalCode").val().length == 6) {
        getCityFromPostalCode($("#editAddressPostalCode").val(), "#editAddressCity");
    }
});

$("#addAddressPostalCode").keyup(function () {
    if ($("#addAddressPostalCode").val().length == 6) {
        getCityFromPostalCode($("#addAddressPostalCode").val(), "#addAddressCity");
    }
});



const dashbordTablepagination = new DataTable("#DashboardTable", {
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

const ServiceHistoryTablepagination = new DataTable("#HistoryTable", {
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