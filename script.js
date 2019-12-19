$(document).ready(function () {

    var tasks = JSON.parse(localStorage.getItem("tasks"));

    initiateTasks();

    // Set current date and time in jumbotron
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    colorTimeBlocks();

    // When the save button is clicked, task input is saved to local storage.
    $("button").click(function () {

        tasks = JSON.parse(localStorage.getItem("tasks"));
        var taskInput = $(this).prev().val();
        var time = $(this).prev().attr("id");
        var task = { time: time, task: taskInput };
        var taskIndex = $(this).prev().attr("data-index");
        tasks.splice(taskIndex, 1, task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log(tasks);
    });

    // Assign background color to each task block depending on if task is in the past, present, or future.
    function colorTimeBlocks() {

        var currentHour = moment().hour();

        $("input").each(function () {
            var taskHour = parseInt($(this).attr("data-hour"));

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
        })
    }

    // Determine if local storage already exists. If not, create blank array and save to local storage.
    function initiateTasks() {

        if (tasks == null) {

            tasks = [];

            console.log("tasks is null");

            $("input").each(function () {
                var taskInput = $(this).val();
                var time = $(this).attr("id");
                var task = { time: time, task: taskInput };
                tasks.push(task);
            })
            localStorage.setItem("tasks", JSON.stringify(tasks));
            console.log(tasks);

        } else {

            showTasks();
        }
    }

    // Get tasks from local storage and render them in the appropriate input field.
    function showTasks() {

        tasks = JSON.parse(localStorage.getItem("tasks"));
        console.log("show tasks on page");
        console.log(tasks);

        for (var i = 0; i < tasks.length; i++) {
            $("#" + tasks[i].time).val(tasks[i].task);
        }
    }

})
