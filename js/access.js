
$(document).ready(function () {
    //alert(roleUser)
    if(roleUser == "ROLE_USER"){
        $(".sidebar-item .cursor-pointer").hide();            
    }
    
    if(roleUser == "ADMINISTRATEUR" || roleUser =="ROLE_ADMIN"){
        $("#li_users").show();            
    }
    if(roleUser == "AGENT VALIDATEUR" || roleUser == "AGENT DE TERRAIN" || roleUser == "ROLE_USER" || roleUser == "PROPRIETAIRE"){
        $("#li_users").hide();            
    }
});