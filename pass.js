var userList = [
    "Лапутин Тимофей",
    "Воронкова Полина",
    "Кузьминова Арина",
    "Волкова Мария",
    "Мурсалов Тимур",
    "Сергеев Григорий"
];

function start() {
    fillUsers();
}

function fillUsers() {
    let count = userList.length;

    let start = "2024-09-30T00:00:00";
    let dateStart = new Date(start);
    let dayStart = Math.floor(dateStart.getTime() / 1000 / 3600 / 24);

    let dayNow = Math.floor(Date.now() / 1000 / 3600 / 24);
    let plus = Math.floor((dayNow+2-dayStart) / 7) % count;

    for (var i = 0; i < count; i++) {
        let j = (i+plus) % count;
        let user = userList[j];
        jQuery("#users").append('<li>' + user + '</li>');
    }
}

function pass_submit() {
    let pass = document.getElementById("pass").value;
    document.location.href="index.php?pw="+pass;
}

//function showPass() {
//    let show = jQuery("#showPassword").is(':checked');
//    if (show) {
//        jQuery("#pass").attr('type','text');
//    } else {
//        jQuery("#pass").attr('type','password');
//    }
//}
