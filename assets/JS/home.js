var category_boxes = document.querySelectorAll(".list-category");

//to handle the task that have category "other"
for (i = 0; i < category_boxes.length; i++) {
    if (category_boxes[i].innerText == 'Other') {
        category_boxes[i].style.display = 'none';
    }
}

var date_values = document.querySelectorAll("#task-date-value");
for (let i = 0; i < date_values.length; i++) {
    if (date_values[i].innerText == '') {
        date_values[i].innerText = "No Deadline";
    }
}


