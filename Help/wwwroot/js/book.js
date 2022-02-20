
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
        $("#tab-content3").hide();
        $("#tab-content4").hide();
        $("#tab-content2").show();

    }
}

function SaveAddress() {
    $("#tab4").addClass("active");
    $("#tab3").addClass("active");
    $("#tab2").addClass("active");
    $("#tab1").addClass("active");

    $("#tab-content1").hide();
    $("#tab-content2").hide();
    $("#tab-content3").hide();
    $("#tab-content4").show();
   /* $("#confirmZipCode").html($("#ZipCode").val()); */
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

function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '/' + mm + '/' + dd;
    console.log(today);
    document.getElementById("date").value = today;
}
window.onload = function () {
    getDate();
};




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