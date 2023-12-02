var URI = "http://5.250.176.223:8080";
var tab = [];
function toogleInput(element) {
    $("#" + element).toggle(1000);
}
function filterData(value) {
    //alert(value)
    var filterText = value; // Récupère le texte du champ d'entrée en minuscules
    var regex = new RegExp(filterText, "i"); // Crée une expression régulière avec le texte saisi (insensible à la casse)
    $("#all_sites li").each(function () {
        var text = $(this).text().toLowerCase(); // Récupère le texte de chaque élément de la liste en minuscules
        if (filterText.length >= 3 && regex.test(text)) {
            // Vérifie si le texte de l'élément correspond à l'expression régulière après trois caractères
            $(this).show(); // Affiche l'élément
            // $(this).find('.collapse').collapse('show');
            console.log($(this).show());
        } else if (filterText.length === 0) {
            // Si l'input est vide, affiche tous les éléments
            $("#all_sites li").show();
            //$(this).find('.collapse').collapse('hide');
            // $(this).find('.collapse').collapse('show');
        } else {
            $(this).hide(); // Cache les éléments qui ne correspondent pas ou si moins de trois caractères ont été saisis
            console.log("data not found");
        }
    });
}
function searchFunction(value) {
    var input, filter, ul, li, a, i, txtValue;
    input = value.toUpperCase();
    ul = $('#all_sites');
    li = ul.find('li');

    // Loop through all list items, and hide those who don't match the search query
    li.each(function() {
        a = $(this).find('a').first();
        txtValue = a.text().toUpperCase();
        if (txtValue.indexOf(input) > -1) {
            $(this).show();
            $(this).find('.collapse').collapse('hide');
        } else {
            $(this).hide();
        }
    });
}
// function searchFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("filterInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("all_sites");
//     li = ul.getElementsByTagName("li");

//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

function collapseData(value){
    $('#site_'+value).toggle();
}

fetch('sidebar.html')
	.then(response => response.text())
	.then(data => {
		document.getElementById('sidebar-nav').innerHTML = data;
});
/** GET DATA SITE */
function getDataSite(){
    $.ajax({
        url: URI+'/api/sites',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            tab = data.data;
            if ($.isArray(tab) && tab.length > 0) {
                $.each(tab, function(index, item) {
                    var content =`<li class="sidebar-item">
                                <a data-bs-target="#site_${item.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                    ${item.name.toUpperCase()}
                                </a>
                                <div id="site_${item.id}" class="list-unstyled collapse">                
                                    <a class="sidebar-link" data-bs-target="#">${item.geneticRessource}</a>
                                </div>
                            </li>`;
                    $('#all_sites').append(content);
                    //console.log(item.name);
                })
            }else{
                console.log('Le tableau est vide.');
            }
          
        },
        error: function(xhr, status, error) {
            console.error(status + ' : ' + error);
        }
    });
}
/**GET DATA GENETIC RESSOURCE */
function getDataGenetic(){
    $.ajax({
        url: URI+'/api/dictionaries/3/values',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            tab = data;
            //if (data.code == 200) {
                if ($.isArray(tab) && tab.length > 0) {
                    var options = '';
                    var j = tab;
                    for (var i = 0; i < j.length; i++) {
                        options += '<option value="' + j[i].label + '">' + j[i].label.toUpperCase() + '</option>';
                        //console.log(options);
                    }
                    $('#geneticRessource').html(options);
                        //console.log(item.name);
                }else{
                    $('#geneticRessource').html($("<option></option>").attr("value", "").text('AUCUNE DONNEE DISPONIBLE'));
                }
            //}
          
        },
        error: function(xhr, status, error) {
            console.error(status + ' : ' + error);
        }
    });
}
/** GET DATA SPECULATION */
function getDataSpeculation(){
    $.ajax({
        url: URI+'/api/dictionaries/2/values',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            tab = data;
            //if (data.code == 200) {
                if ($.isArray(tab) && tab.length > 0) {
                    var options = '';
                    var j = tab;
                    for (var i = 0; i < j.length; i++) {
                        options += '<option value="' + j[i].label + '">' + j[i].label.toUpperCase() + '</option>';
                        //console.log(options);
                    }
                    $('#speculation').html(options);
                        //console.log(item.name);
                }else{
                    $('#speculation').html($("<option></option>").attr("value", "").text('AUCUNE DONNEE DISPONIBLE'));
                }
            //}
        },
        error: function(xhr, status, error) {
            console.error(status + ' : ' + error);
        }
    });
}
function sendDataForm(e,form){
    e.preventDefault();
    var datas = $("#"+form).serializeArray();
    // var jsonData = JSON.stringify(datas);
    var formData = {};
    $.each(datas, function(index, field) {
        formData[field.name] = field.value;
    });

    // Conversion de l'objet en chaîne JSON
    var jsonData = JSON.stringify(formData);

    // Affichage des données JSON dans la console
    console.log(jsonData);       

    $.ajax({
        url: URI+'/api/sites',
        type: "POST",
        contentType: 'application/json',
        data: jsonData,
        dataType: "json",

        // contentType: 'application/json',
        // contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        beforeSend: function() {
            $('.btn_submit').prop('disabled', true);
        },
        success: function (data) {
            console.log(data);
            //if (data.code == 200) {
                $(".alert").removeClass('alert-danger').addClass('alert-success')
                $(".alert-message").text(data.name+ "ENREGISTRE AVEC SUCCES !!!").show(1000);             
                $("#"+form).get(0).reset();
                setTimeout(function(){
                    window.location.reload(true);
                }, 2000)
            //}else{
                //$(".alert").removeClass('alert-danger').addClass('alert-danger')
                // $(".alert-message").text('Une erreur est survenue aucours du traitement de votre requete').fadeIn(1000);  
                // $('.btn_submit').prop('disabled', false);
            //}
        },
        error: function (statut, erreur) {
            $(".alert").removeClass('alert-danger').addClass('alert-danger')
            $(".alert-message").text('Une erreur est survenue aucours du traitement de votre requete').show(1000);  
            $('.btn_submit').prop('disabled', false);
        },
    });
}
/** APPEL DES FONCTIONS */

getDataSite();
getDataGenetic();
getDataSpeculation();

$(document).ready(function () {
    $.ajax({
        url: $("#login-form").attr("action"),
        type: "POST",
        data: $("#login-form").serialize(),
        dataType: "json",
        beforeSend: function() {
            $('.auth-form-btn').prop('disabled', true);
        },
        success: function (data) {
            if (data.code == 200) {                
                $("#login-form").get(0).reset();
                $('.auth-form-btn').prop('disabled', true);
            } else if(data.code == 204) {
                $('.auth-form-btn').prop('disabled', false);
            }else{
                $('.auth-form-btn').prop('disabled', false);
            }
        },
        error: function (statut, erreur) {
            $('.auth-form-btn').prop('disabled', false);
        },
    });
});
