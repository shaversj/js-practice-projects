"use strict";

class DatePicker {
    constructor(id, dateSelectionCallback) {
        this.id = id;
        this.dateSelectionCallback = dateSelectionCallback;
    }

    render(dateObject){
    //
    }
}

var datePicker = new DatePicker("div1", function (id, fixedDate) {
    console.log("DatePicker with id", id,
        "selected date:", fixedDate.month + "/" + fixedDate.day + "/" + fixedDate.year);
});
// datePicker.render(new Date("July 4, 1776"));