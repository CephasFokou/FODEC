var URI = "http://5.250.176.223:8080";
var tab = [];

if(navigator.onLine) {
    //alert(237)
}else{
    alert('Vérifier votre connexion')
    setTimeout(function(){
        window.location.reload();
    },2000)
}
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

// fetch('sidebar.html')
// 	.then(response => response.text())
// 	.then(data => {
// 		document.getElementById('sidebar-nav').innerHTML = data;
// });


/** GET DATA SITE */
function getDataSite(){
    $.ajax({
        url: URI+'/api/sites',
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {
            console.log('all sites' ,data);
            if (xhr.status == 200) {
                tab = data.data;
                if ($.isArray(tab) && tab.length > 0) {
                    $.each(tab, function(index, item) {
                        var content =`<li class="sidebar-item">
                                        <a data-bs-target="#site_${item.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${item.name.toUpperCase()}<br/>
                                            <small>${item.geneticRessource.toUpperCase()}</small>
                                        </a>
                                        <ul class="card mb-3 bg-light cursor-pointer border width-p sidebar-dropdown list-unstyled collapse" id="site_${item.id}" data-bs-parent="#site_${item.id}">
                                            <div class="card-body p-3" onclick="updateMap(3.887649919495665,11.505106234113658,'${item.name.toUpperCase()}')">
                                                <div class="row">
                                                    <div class="col-md-12 display-grid">
                                                        <span><b>${item.percentageFarmSite}%</b> champs</span>
                                                        <span><b>${item.numberMaleTreeNotNormal}%</b> arbre male NC</span>
                                                        <span><b>${item.numberMaleTreeNormal}%</b> arbre male C</span>
                                                        <span><b>${item.numberFemaleTreeNotNormal}%</b> arbre femelle NC</span>
                                                        <span><b>${item.numberFemaleTreeNormal}%</b> arbre femelle C</span>
                                                        <span><b>${item.numberFemaleTree}%</b> arbre manquant</span>
                                                        <span><b>${item.percentageMaleTreeMissing}%</b> arbre male manquant</span>
                                                        <span><b>${item.numberFemaleTreeMissing}%</b> arbre femelle manquant</span>
                                                        <span><b>${item.percentageMaleLine}%</b> ligne male</span>
                                                        <span><b>${item.percentageFemaleLine}%</b> ligne femelle</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>`;
                        $('#all_sites').append(content);
                        $("#site_name").text(item.name.toUpperCase());
                        //console.log(item.name);
                    })
                }else{
                    console.log('Le tableau est vide.');
                }
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
        success: function(data,status, xhr) {
            console.log('geneticRessource',data);
            tab = data;
            if (xhr.status == 200) {
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
            }
          
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
        success: function(data,status, xhr) {
            console.log('speculation',data);
            // console.log('code',xhr.status);
            tab = data;
            if (xhr.status == 200) {
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
            }
        },
        error: function(xhr, status, error) {
            console.error(status + ' : ' + error);
        }
    });
}

/** APPEL DES FONCTIONS */

getDataSite();
getDataGenetic();
getDataSpeculation();

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
        success: function(data,status, xhr) {
            console.log(data);
            if (xhr.status == 200) {
                $(".alert").removeClass('alert-danger').addClass('alert-success').show()
                $(".alert-message").text(data.name.toUpperCase()+ " ENREGISTRE AVEC SUCCES !!!");             
                $("#"+form).get(0).reset();
                setTimeout(function(){
                    window.location.reload(true);
                }, 3000)
            }else{
                $(".alert").removeClass('alert-success').addClass('alert-danger').show()
                $(".alert-message").text(data.message+ ' '+data.httpStatus);  
                $('.btn_submit').prop('disabled', false);
            }
        },
        error: function (status, erreur) {
            $(".alert-success").removeClass('alert-success').addClass('alert-danger').show()
            $(".alert-message").text('Une erreur est survenue aucours du traitement de votre requete');  
            $('.btn_submit').prop('disabled', false);
        },
    });
}


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
    $('.collapse').on('show.bs.collapse', function () {
        // Fermer tous les éléments Collapse qui ne sont pas celui en train de s'ouvrir
        $('.collapse').not($(this)).collapse('hide');
    });
});
