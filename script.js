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

    // localStorage.setItem("tasks", JSON.stringify(tasks));

    // set current date and time in jumbotron
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    showTasks();

    colorTime();

    // When the save button is clicked, task input is saved to local storage.
    $("button").click(function () {
        var storedTasks = JSON.parse(localStorage.getItem("tasks"));
        var taskInput = $(this).prev().val();
        var time = $(this).prev().attr("id");
        var task = { time: time, task: taskInput };
        var taskIndex = $(this).prev().attr("data-index");
        storedTasks.splice(taskIndex, 1, task);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    });

    // Create a function to color each task block depending on if task is in the past, present, or future.
    function colorTime() {

        var currentHour = moment().hour();

        $("input").each(function () {
            var taskHour = parseInt($(this).attr("data-hour"));

            console.log(currentHour);
            console.log(taskHour);

            if (taskHour < currentHour) {
                // future
                $(this).css("background-color", "#b7b6b6")
            } else if (taskHour > currentHour) {
                //past 
                $(this).css("background-color", "#1ac0c6")
            } else {
                // present
                $(this).css("background-color", "#fb7756")
            }
            console.log(this)
        })
    }

    // Create a function to get the tasks from local storage and render them in the appropriate input field.
    function showTasks() {

        var storedTasks = JSON.parse(localStorage.getItem("tasks"));
        console.log("show tasks on page");
        console.log(storedTasks);

        for (var i = 0; i < storedTasks.length; i++) {
            $("#" + storedTasks[i].time).val(storedTasks[i].task);
        }
    }
})