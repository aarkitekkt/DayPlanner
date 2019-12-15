$(document).ready(function () {

    // set current date and time in jumbotron
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    $("button").click(function () {
        $(this).prev().attr("style", "background: red");
    });
})