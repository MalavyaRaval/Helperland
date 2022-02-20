
function Tab1Click() {
    $("#tab1").addClass("active");
    $("#tab2").removeClass("active").addClass("tabs");
    $("#tab3").removeClass("active").addClass("tabs");
    $("#tab4").removeClass("active").addClass("tabs");

    $("#tab-content2").hide();
    $("#tab-content3").hide();
    $("#tab-content4").hide();
    $("#tab-content1").show();
}

function Tab2Click() {
    if ($("#tab3").hasClass("active") || $("#tab4").hasClass("active")) {

        $("#tab2").addClass("active");
        $("#tab1").addClass("active");
        $("#tab3").removeClass("active").addClass("tabs");
        $("#tab4").removeClass("active").addClass("tabs");
        $("#tab-content1").hide();
        $("#tab-content3").hide();
        $("#tab-content4").hide();
        $("#tab-content2").show();

    }
}

function SearchZipCode() {

    var data = $("#form1").serialize();

    $.ajax({
        type: 'POST',
        url: '/ServiceRequest/ValidPostalCode',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {
            if (result.value == "true") {
                $("#tab2").addClass("active");
                $("#tab-content1").hide();
                $("#tab-content3").hide();
                $("#tab-content4").hide();
                $("#tab-content2").show();
            }
            else {
                alert("zipcode is not valid");
            }
        }
    });

}

function SaveServiceDetail() {


    var data = $("#form2").serialize();
    console.log(data);

    $.ajax({
        type: 'POST',
        url: '/ServiceRequest/ScheduleService',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {
            if (result.value == "true") {

                $("#tab3").addClass("active");
                $("#tab-content1").hide()
                $("#tab-content2").hide();
                $("#tab-content4").hide();
                $("#tab-content3").show();

                loadAddress();
            }
            else {
                alert("Schedule is not valid");
            }
        },
        error: function () {
            alert('Failed to receive the Data');
            console.log('Failed');
        }
    });


}

function Tab3Click() {
    if ($("#tab4").hasClass("active")) {

        $("#tab3").addClass("active");
        $("#tab2").addClass("active");
        $("#tab1").addClass("active");
        $("#tab4").removeClass("active").addClass("tabs");
        $("#tab-content1").hide();
        $("#tab-content2").hide();
        $("#tab-content4").hide();
        $("#tab-content3").show();

    }
}
//$('#element').click(function () {
//    if ($('#address'+i+'').is(':checked')) { alert("it's checked"); }
//});
function SaveAddressForm() {
    
        $("#tab4").addClass("active");
        $("#tab3").addClass("active");
        $("#tab2").addClass("active");
        $("#tab1").addClass("active");

        $("#tab-content1").hide();
        $("#tab-content2").hide();
        $("#tab-content3").hide();
        $("#tab-content4").show();
    
}


$(document).ready(function () {
    $('#ZipCode').on('input change', function () {
        if ($(this).val() != '') {
            $('#zipcode-search').prop('disabled', false);
        }
        else {
            $('#zipcode-search').prop('disabled', true);
        }
    });
});

$(function () {
    $(".date-picker").datepicker();
});






$(document).ready(function () {

    let clickNum = 1;
    $('#insideCabinetCheck').on("click", function(){
        clickNum++;

        if (clickNum % 2 == 0) {
            $('#extra-svg1').addClass('extraclicked');
        }
        else {
            $('#extra-svg1').removeClass('extraclicked');
        }
    });
});
$(document).ready(function () {

    let clickNum = 1;
    $('#insideFridgeCheck').on("click", function () {
        clickNum++;

        if (clickNum % 2 == 0) {
            $('#extra-svg2').addClass('extraclicked');
        }
        else {
            $('#extra-svg2').removeClass('extraclicked');
        }
    });
});
$(document).ready(function () {

    let clickNum = 1;
    $('#insideOvenCheck').on("click", function () {
        clickNum++;

        if (clickNum % 2 == 0) {
            $('#extra-svg3').addClass('extraclicked');
        }
        else {
            $('#extra-svg3').removeClass('extraclicked');
        }
    });
});
$(document).ready(function () {

    let clickNum = 1;
    $('#laundryCheck').on("click", function () {
        clickNum++;

        if (clickNum % 2 == 0) {
            $('#extra-svg4').addClass('extraclicked');
        }
        else {
            $('#extra-svg4').removeClass('extraclicked');
        }
    });
});
$(document).ready(function () {

    let clickNum = 1;
    $('#interiorCheck').on("click", function () {
        clickNum++;

        if (clickNum % 2 == 0) {
            $('#extra-svg5').addClass('extraclicked');
        }
        else {
            $('#extra-svg5').removeClass('extraclicked');
        }
    });
});


function addAddressdiv() {
    
    $("#addAddressBtn").hide();
    $("#addNewaddressDiv").show();

    /*$("#ZipCode").change(function () {
        $("#addAddressPostalCode").val($("#ZipCode").val());
    });*/

    $("#addAddressPostalCode").addClass("disable-div");

    document.getElementById('addAddressPostalCode').value = document.getElementById("ZipCode").value;

}



function loadAddress() {
    var data = $("#form1").serialize();
    
    $.ajax({
        type: 'get',
        url: '/ServiceRequest/DetailsService',
        contenttype: 'application/x-www-form-urlencoded; charset=utf-8',
        data: data,
        success: function (result) {
            var address = $("#address");
            address.empty();
            address.append('<p class="details-text">Please select your address:</p>');
            if (result.length == 0) {

                document.getElementById("addAddressBtn").click();

            }
            else {
                for (let i = 0; i < result.length; i++) {
                var checked = "";
                if (result[i].isDefault == true) {
                    checked = "checked";
                }
                address.append(' <div class="radiobutton">' +
                    '<input type="radio" id=" '+i+' " ' + checked + ' name="address" value="' + result[i].addressId + '" />' +
                    '<label for=" ' + i + ' "><span><strong>Address: </strong></span>&nbsp;<span>' + result[i].addressLine1 + '</span>,&nbsp;<span>' + result[i].addressLine2 + '</span>&nbsp;<span>' + result[i].city + '</span>-&nbsp;<span>' + result[i].postalCode + '</span>' +
                    '<br><span><strong>Phone Number: </strong></span> ' + result[i].mobile + ' <span></span></label></div>');
                checked = "";
                }
                console.log(result);
            }
        },
        error: function () {
            alert('failed to receive the data');
            console.log('failed ');
        }
    });
}



function saveAddress() {
    //alert("In Address 1")
    var data = {};
    data.AddressLine1 = document.getElementById("AddressLine1").value;
    data.AddressLine2 = document.getElementById("AddressLine2").value;
    data.PostalCode = document.getElementById("addAddressPostalCode").value;
    data.City = document.getElementById("City").value;
    data.Mobile = document.getElementById("Mobile").value;
    //alert("In Address 2")


    $.ajax({
        type: 'POST',
        url: '/ServiceRequest/AddNewAddress',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: data,
        success: function (result) {
            if (result.value == "true") {
                document.getElementById("addressCancelBtn").click();
                loadAddress();
            }
            else {
                alert('Sorry! Something went wrong please try again later.');
            }
        },
        error: function () {
            alert('Failed to receive the Data');
            console.log('Failed ');
        }
    });
}



function cancelAddress() {
    document.getElementById("addNewaddressDiv").style.display = "none";
    document.getElementById('addAddressBtn').style.display = "block";
}



/*$(document).ready(function () {
    
        if ($('#address').val() != '') {
            $('#AddContbtn').prop('disabled', false);
        }
        else {
            $('#AddContbtn').prop('disabled', true);
        }
   
});*/
