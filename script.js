$(document).ready(function () {

    var tasks = [{
        time: "9am", task: ""
    }, {
        time: "10am", task: ""
    }, {
        time: "11am", task: ""
    }, {
        time: "12pm", task: ""
    }, {
        time: "1pm", task: ""
    }, {
        time: "2pm", task: ""
    }, {
        time: "3pm", task: ""
    }, {
        time: "4pm", task: ""
    }, {
        time: "5pm", task: ""
    }];


    // set current date and time in jumbotron
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    showTasks();

    $("button").click(function () {
        var storedTasks = JSON.parse(localStorage.getItem("tasks"));
        var taskInput = $(this).prev().val();
        var time = $(this).prev().attr("id");
        var task = { time: time, task: taskInput };
        var taskIndex = $(this).prev().attr("data-index");
        storedTasks.splice(taskIndex, 1, task);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    });

    function showTasks() {

        var storedTasks = JSON.parse(localStorage.getItem("tasks"));
        console.log("show tasks on page");
        console.log(storedTasks);

        for (var i = 0; i < storedTasks.length; i++) {
            $("#" + storedTasks[i].time).val(storedTasks[i].task);
        }
    }
})