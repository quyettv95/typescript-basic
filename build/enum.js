"use strict";
var Session;
(function (Session) {
    Session[Session["Spring"] = 0] = "Spring";
    Session[Session["Summer"] = 1] = "Summer";
    Session[Session["Fall"] = 2] = "Fall";
    Session[Session["Winter"] = 3] = "Winter";
})(Session || (Session = {}));
const currentSession = 1;
if (currentSession.valueOf() === Session.Spring) {
    console.log("Đi chơi");
}
if (currentSession.valueOf() === Session.Summer) {
    console.log("Đi bơi");
}
