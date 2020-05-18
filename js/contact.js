// Opening Hours
$(document).ready(function () {
    function tConvert(time) {
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) {
            time = time.slice(1);
            time[5] = +time[0] < 12 ? 'AM' : 'PM';
            time[0] = +time[0] % 12 || 12;
        }
        return time.join('');
    }

    var data = JSON.parse($('#data').html());

    var today = new Date();

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    data.openingHoursSpecification.map(openingsItem => {
        document.getElementById('schedule').innerHTML = `${openingsItem.dayOfWeek[0].substring(0, 3)} to ${openingsItem.dayOfWeek[6].substring(0, 3)} ${tConvert(openingsItem.opens)} to ${tConvert(openingsItem.closes)}`;
    });
});
if ($('#contact-form').length) {
    $('#contact-form').each(function(){
        $(this).validate({
            errorClass: 'error wobble-error',
            submitHandler: function(form){
                $.ajax({
                    type: "POST",
                    url:"./includes/mail.php",
                    data: $(form).serialize(),
                    success: function() {
                        document.querySelector('.alert-contact').style.display = 'block';
                        console.log("Success")
                    },

                    error: function(){
                        document.querySelector('.alert-contact-error').style.display = 'block';
                        console.log("Fail")
                    }
                });
            }
        });
    });
}