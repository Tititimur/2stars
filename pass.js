function start() {
    let now = new Date(Date.now());
    jQuery('#date').text(now.toISOString());
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
