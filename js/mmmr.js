var URI = "http://5.250.176.223:8080";
var tab = [];

if(navigator.onLine) {
    console.log('Connexion internet active');
}else{
    alert('Vérifier votre connexion')
    setTimeout(function(){
        window.location.reload();
    },2000)
}
function toogleInput(element) {
    $("#" + element).toggle(1000);
}
function filterData(value,type) {
    //alert(value)
    var filterText = value; // Récupère le texte du champ d'entrée en minuscules
    var regex = new RegExp(filterText, "i"); // Crée une expression régulière avec le texte saisi (insensible à la casse)
    if (type =="site") {
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
    } else if(type =="parcels") {
        $("#all_parcels li").each(function () {
            var text = $(this).text().toLowerCase(); // Récupère le texte de chaque élément de la liste en minuscules
            if (filterText.length >= 3 && regex.test(text)) {
                // Vérifie si le texte de l'élément correspond à l'expression régulière après trois caractères
                $(this).show(); // Affiche l'élément
                // $(this).find('.collapse').collapse('show');
                console.log($(this).show());
            } else if (filterText.length === 0) {
                // Si l'input est vide, affiche tous les éléments
                $("#all_parcels li").show();
                //$(this).find('.collapse').collapse('hide');
                // $(this).find('.collapse').collapse('show');
            } else {
                $(this).hide(); // Cache les éléments qui ne correspondent pas ou si moins de trois caractères ont été saisis
                console.log("data not found");
            }
        });
    }else if(type =="farms") {
        $("#all_farms li").each(function () {
            var text = $(this).text().toLowerCase(); // Récupère le texte de chaque élément de la liste en minuscules
            if (filterText.length >= 3 && regex.test(text)) {
                // Vérifie si le texte de l'élément correspond à l'expression régulière après trois caractères
                $(this).show(); // Affiche l'élément
                // $(this).find('.collapse').collapse('show');
                console.log($(this).show());
            } else if (filterText.length === 0) {
                // Si l'input est vide, affiche tous les éléments
                $("#all_farms li").show();
                //$(this).find('.collapse').collapse('hide');
                // $(this).find('.collapse').collapse('show');
            } else {
                $(this).hide(); // Cache les éléments qui ne correspondent pas ou si moins de trois caractères ont été saisis
                console.log("data not found");
            }
        });
    }else if(type =="lines") {
        $("#all_lines li").each(function () {
            var text = $(this).text().toLowerCase(); // Récupère le texte de chaque élément de la liste en minuscules
            if (filterText.length >= 3 && regex.test(text)) {
                // Vérifie si le texte de l'élément correspond à l'expression régulière après trois caractères
                $(this).show(); // Affiche l'élément
                // $(this).find('.collapse').collapse('show');
                console.log($(this).show());
            } else if (filterText.length === 0) {
                // Si l'input est vide, affiche tous les éléments
                $("#all_lines li").show();
                //$(this).find('.collapse').collapse('hide');
                // $(this).find('.collapse').collapse('show');
            } else {
                $(this).hide(); // Cache les éléments qui ne correspondent pas ou si moins de trois caractères ont été saisis
                console.log("data not found");
            }
        });
    }else if(type =="trees") {
        $("#all_trees li").each(function () {
            var text = $(this).text().toLowerCase(); // Récupère le texte de chaque élément de la liste en minuscules
            if (filterText.length >= 3 && regex.test(text)) {
                // Vérifie si le texte de l'élément correspond à l'expression régulière après trois caractères
                $(this).show(); // Affiche l'élément
                // $(this).find('.collapse').collapse('show');
                console.log($(this).show());
            } else if (filterText.length === 0) {
                // Si l'input est vide, affiche tous les éléments
                $("#all_trees li").show();
                //$(this).find('.collapse').collapse('hide');
                // $(this).find('.collapse').collapse('show');
            } else {
                $(this).hide(); // Cache les éléments qui ne correspondent pas ou si moins de trois caractères ont été saisis
                console.log("data not found");
            }
        });
    }
   
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
                        let leftBottom = item.geographicalPos.leftBottom;
                        let leftTop = item.geographicalPos.leftTop;
                        let rightBottom = item.geographicalPos.rightBottom;
                        let rightTop = item.geographicalPos.rightTop;
                        //console.log(leftBottom);
                        var content =`<li class="sidebar-item">
                                        <a data-bs-target="#site_${item.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${item.name.toUpperCase()}<br/>
                                            <small class="text-body-tertiary">${item.geneticRessource}</small>
                                        </a>
                                        <i class="fas fa-map-marker-alt map_icon" id="map_icon_${item.id}" title="CLIQUER DESSUS POUR AFFICHER LA MAP" onclick="afficherCarte('${leftBottom}','${leftTop}','${rightBottom}','${rightTop}','${item.name.toUpperCase()}')"></i>	  
                                        <ul class="bg-body-tertiary collapse cursor-default mb-3 sidebar-dropdown width-p" id="site_${item.id}" data-bs-parent="#site_${item.id}">
                                            <div class="card-body p-3">
                                                <div class="row">
                                                    <div class="d-flex gap-1 gm-ui-hover-effect small w-auto">
                                                        <div class="col-md-6 d-grid">
                                                            <span class="px-2 bg-"><b>${item.percentageFarmSite}%</b> champs</span>
                                                            <span class="px-2 bg-"><b>${item.numberMaleTreeNotNormal}%</b> arbre male NC</span>
                                                            <span class="px-2 bg-"><b>${item.numberMaleTreeNormal}%</b> arbre male C</span>
                                                            <span class="px-2 bg-"><b>${item.numberFemaleTreeNotNormal}%</b> arbre femelle NC</span>
                                                            <span class="px-2 bg-"><b>${item.numberFemaleTreeNormal}%</b> arbre femelle C</span>
                                                        </div>
                                                        <div class="col-md-6 d-grid">
                                                            <span class="px-2 bg-"><b>${item.numberFemaleTree}%</b> arbre manquant</span>
                                                            <span class="px-2 bg-"><b>${item.percentageMaleTreeMissing}%</b> arbre male manquant</span>
                                                            <span class="px-2 bg-"><b>${item.numberFemaleTreeMissing}%</b> arbre femelle manquant</span>
                                                            <span class="px-2 bg-"><b>${item.percentageMaleLine}%</b> ligne male</span>
                                                            <span class="px-2 bg-"><b>${item.percentageFemaleLine}%</b> ligne femelle</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>`;
                        $('#all_sites').append(content);
                        $("#site_name").text(item.name.toUpperCase());
                    })
                    //APPEL SITE SELECT BOX
                    var options = "";
                    for (var i = 0; i < tab.length; i++) {
                        options += '<option value="' + tab[i].id + '">' + tab[i].name.toUpperCase() + '</option>';
                    }
                    $('#siteId').html(options);
                    ///console.log(options);

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
/** GET DATA PARCELS */
function getDataParcels(){
    $.ajax({
        url: URI+'/api/parcels',
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {
            console.log('all parcels' ,data);
            if (xhr.status == 200) {
                tab = data;
                if ($.isArray(tab) && tab.length > 0) {
                    $.each(tab, function(index, item) {
                        var content =`<li class="sidebar-item">
                                        <a data-bs-target="#site_${item.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${item.name.toUpperCase()}<br/>
                                            <small class="text-body-tertiary">${item.actualDensity}</small>
                                        </a>
                                        <i class="fas fa-map-marker-alt map_icon" id="map_icon_${item.id}" title="CLIQUER DESSUS POUR AFFICHER LA MAP" onclick="updateMap(3.887649919495665,11.505106234113658,'${item.name.toUpperCase()}')"></i>	  
                                        <ul class="bg-body-tertiary collapse cursor-default mb-3 sidebar-dropdown width-p" id="site_${item.id}" data-bs-parent="#site_${item.id}">
                                            <div class="card-body p-3">
                                                <div class="row">
                                                    <div class="d-flex gap-1 gm-ui-hover-effect small w-auto">
                                                        <div class="col-md-6 d-grid">
                                                            <span class="px-2 bg-"><b>${item.percentageFarmSite}%</b> champs</span>
                                                            <span class="px-2 bg-"><b>${item.numberMaleTreeNotNormal}%</b> arbre male NC</span>
                                                            <span class="px-2 bg-"><b>${item.numberMaleTreeNormal}%</b> arbre male C</span>
                                                            <span class="px-2 bg-"><b>${item.numberFemaleTreeNotNormal}%</b> arbre femelle NC</span>
                                                            <span class="px-2 bg-"><b>${item.numberFemaleTreeNormal}%</b> arbre femelle C</span>
                                                        </div>
                                                        <div class="col-md-6 d-grid">
                                                            <span class="px-2 bg-"><b>${item.numberFemaleTree}%</b> arbre manquant</span>
                                                            <span class="px-2 bg-"><b>${item.percentageMaleTreeMissing}%</b> arbre male manquant</span>
                                                            <span class="px-2 bg-"><b>${item.numberFemaleTreeMissing}%</b> arbre femelle manquant</span>
                                                            <span class="px-2 bg-"><b>${item.percentageMaleLine}%</b> ligne male</span>
                                                            <span class="px-2 bg-"><b>${item.percentageFemaleLine}%</b> ligne femelle</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>`;
                        $('#all_parcels').append(content);
                        // $("#site_name").text(item.name.toUpperCase());
                        //console.log(item.name);
                    })
                    var options = "";
                    for (var i = 0; i < tab.length; i++) {
                        options += '<option value="' + tab[i].id + '">' + tab[i].name.toUpperCase() + '</option>';
                    }
                    $('#parcelId').html(options);
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

/** GET DATA PARCELS */
function getDataFarms(){
    //alert(237)
    $.ajax({
        url: URI+'/api/farms',
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {
            console.log('all farms' ,data);
            if (xhr.status == 200) {
                tab = data;
                if ($.isArray(tab) && tab.length > 0) {
                    $.each(tab, function(index, item) {
                        var content =`<li class="sidebar-item">
                                        <a data-bs-target="#site_${item.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${item.name.toUpperCase()}<br/>
                                            <small class="text-body-tertiary">${item.farmType}</small>
                                        </a>
                                        <i class="fas fa-map-marker-alt map_icon" id="map_icon_${item.id}" title="CLIQUER DESSUS POUR AFFICHER LA MAP" onclick="updateMap(3.887649919495665,11.505106234113658,'${item.name.toUpperCase()}')"></i>	  
                                        <ul class="bg-body-tertiary collapse cursor-default mb-3 sidebar-dropdown width-p" id="site_${item.id}" data-bs-parent="#site_${item.id}">
                                            <div class="card-body p-3">
                                                <div class="row">
                                                    <div class="d-flex gap-1 gm-ui-hover-effect small w-auto">
                                                        <div class="col-md-6 d-grid">
                                                            <span class="px-2 bg-"><b>${item.initialArea}%</b> champs</span>
                                                            <span class="px-2 bg-"><b>${item.initialDensity}%</b> arbre male NC</span>
                                                            <span class="px-2 bg-"><b>${item.lastArea}%</b> arbre male C</span>
                                                            <span class="px-2 bg-"><b>${item.lastDensity}%</b> arbre femelle NC</span>
                                                            <span class="px-2 bg-"><b>${item.floorType}%</b> arbre femelle C</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>`;
                        $('#all_farms').append(content);
                        // $("#site_name").text(item.name.toUpperCase());
                        //console.log(item.name);
                    })
                    var options = "";
                    for (var i = 0; i < tab.length; i++) {
                        options += '<option value="' + tab[i].id + '">' + tab[i].name.toUpperCase() + '</option>';
                    }
                    $('#farmId_line').html(options);
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

/** GET DATA LINE */
function getDataLine(){
    //alert(237)
    $.ajax({
        url: URI+'/api/lines',
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {
            console.log('all Line' ,data);
            if (xhr.status == 200) {
                tab = data;
                if ($.isArray(tab) && tab.length > 0) {
                    $.each(tab, function(index, item) {
                        var content =`<li class="sidebar-item">
                                        <a data-bs-target="#site_${item.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${item.name.toUpperCase()}<br/>
                                            <small class="text-body-tertiary">${item.name}</small>
                                        </a>
                                        <i class="fas fa-map-marker-alt map_icon" id="map_icon_${item.id}" title="CLIQUER DESSUS POUR AFFICHER LA MAP" onclick="updateMap(3.887649919495665,11.505106234113658,'${item.name.toUpperCase()}')"></i>	  
                                        <ul class="bg-body-tertiary collapse cursor-default mb-3 sidebar-dropdown width-p" id="site_${item.id}" data-bs-parent="#site_${item.id}">
                                            <div class="card-body p-3">
                                                <div class="row">
                                                    <div class="d-flex gap-1 gm-ui-hover-effect small w-auto">
                                                        <div class="col-md-6 d-grid">
                                                          
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>`;
                        $('#all_lines').append(content);
                        // $("#site_name").text(item.name.toUpperCase());
                        //console.log(item.name);
                    })
                    var options = "";
                    for (var i = 0; i < tab.length; i++) {
                        options += '<option value="' + tab[i].id + '">' + tab[i].name.toUpperCase() + '</option>';
                    }
                    $('#lineId_tree').html(options);
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

/** GET DATA TREE */
function getDataTree(){
    //alert(237)
    $.ajax({
        url: URI+'/api/trees',
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {
            console.log('all Line' ,data);
            if (xhr.status == 200) {
                tab = data;
                if ($.isArray(tab) && tab.length > 0) {
                    $.each(tab, function(index, item) {
                        var content =`<li class="sidebar-item">
                                        <a data-bs-target="#site_${item.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${item.name.toUpperCase()}<br/>
                                            <small class="text-body-tertiary">${item.name}</small>
                                        </a>
                                        <i class="fas fa-map-marker-alt map_icon" id="map_icon_${item.id}" title="CLIQUER DESSUS POUR AFFICHER LA MAP" onclick="updateMap(3.887649919495665,11.505106234113658,'${item.name.toUpperCase()}')"></i>	  
                                        <ul class="bg-body-tertiary collapse cursor-default mb-3 sidebar-dropdown width-p" id="site_${item.id}" data-bs-parent="#site_${item.id}">
                                            <div class="card-body p-3">
                                                <div class="row">
                                                    <div class="d-flex gap-1 gm-ui-hover-effect small w-auto">
                                                        <div class="col-md-6 d-grid">
                                                            <span class="px-2 bg-"><b>${item.parentMale}</b> Nombre parents male</span>
                                                            <span class="px-2 bg-"><b>${item.parentMale}</b> Nombre parents femelle</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>`;
                        $('#all_trees').append(content);
                        // $("#site_name").text(item.name.toUpperCase());
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

/** APPEL DES FONCTIONS */
getDataGenetic();
getDataSpeculation();
getDataSite();
getDataParcels();
getDataFarms();
getDataLine();
getDataTree();

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
/** POST DATA SITE */
function sendDataWithFormData(e,form){
    e.preventDefault();
    var form_ = $('#'+form)[0];
    var formData = new FormData(form_);

    // Ajout de données supplémentaires à l'objet FormData existant
    var secondJSON = {
        geographicalPos: {
            leftBottom: { 
                latitude: $('#lb_latitude').val() == null ? 0 : $('#lb_latitude').val(),
                longitude: $('#lb_longitude').val() == null ? 0 : $('#lb_longitude').val()
            },
            leftTop: { 
                latitude: $('#lt_latitude').val() == null ? 0 : $('#lt_latitude').val(), 
                longitude: $('#lt_longitude').val() == null ? 0 : $('#lt_longitude').val() 
            },
            rightBottom: { 
                latitude: $('#rb_latitude').val() == null ? 0 : $('#rb_latitude').val(), 
                longitude: $('#rb_longitude').val() == null ? 0 : $('#rb_longitude').val() 
            },
            rightTop: { 
                latitude: $('#rt_latitude').val() == null ? 0 : $('#rt_latitude').val(), 
                longitude: $('#rt_longitude').val() == null ? 0 : $('#rt_longitude').val()
            }
        }
    };
    var formDataObj = {};
    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });
    
    //Conversion de l'objet JavaScript en chaîne JSON
    //var jsonData = JSON.stringify(formDataObj);
    // Convertir les données géographiques en JSON

    // Affichage des données JSON dans la console
    console.log("objet 1",formDataObj);
    console.log("objet 2",secondJSON);    
    
    // Ajout des propriétés du deuxième objet au premier objet
    Object.assign(formDataObj, secondJSON);
    var all_JSON = JSON.stringify(formDataObj);

    // Affichage du premier objet JSON mis à jour dans la console
    console.log('ALL JSON',all_JSON);

    $.ajax({
        url: URI+'/api/sites',
        type: "POST",
        contentType: 'application/json',
        data: all_JSON,
        dataType: "json",
        beforeSend: function() {
            $('.btn_submit').prop('disabled', true);
        },
        success: function(data,status, xhr) {
            console.log(data);
            if (xhr.status == 200 || xhr.status == 201) {
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
        error: function(xhr, status, error) {
            if (xhr.status == 500) {
                console.log('Erreur 500 : ', error);
                $(".alert").removeClass('alert-success').addClass('alert-danger').show()
                $(".alert-message").text('Une erreur est survenue aucours du traitement de votre requete');  
                $('.btn_submit').prop('disabled', false);
            } else {
                $(".alert").removeClass('alert-success').addClass('alert-danger').show()
                $(".alert-message").text(xhr.message+ ' '+error);  
                $('.btn_submit').prop('disabled', false);
                console.log('Erreur : ', status, error);
            }
        }
    });
}
/**POST DATA PARCELS */
function sendDataParcelWithFormData(e,form){
    e.preventDefault();
    var form_ = $('#'+form)[0];
    var formData = new FormData(form_);

    // Ajout de données supplémentaires à l'objet FormData existant
    var secondJSON = {
        geographicalPos: {
            leftBottom: { 
                latitude: $('#lb_latitude_parcel').val() == null ? 0 : $('#lb_latitude_parcel').val(),
                longitude: $('#lb_longitude_parcel').val() == null ? 0 : $('#lb_longitude_parcel').val()
            },
            leftTop: { 
                latitude: $('#lt_latitude_parcel').val() == null ? 0 : $('#lt_latitude_parcel').val(), 
                longitude: $('#lt_longitude_parcel').val() == null ? 0 : $('#lt_longitude_parcel').val() 
            },
            rightBottom: { 
                latitude: $('#rb_latitude_parcel').val() == null ? 0 : $('#rb_latitude_parcel').val(), 
                longitude: $('#rb_longitude_parcel').val() == null ? 0 : $('#rb_longitude_parcel').val() 
            },
            rightTop: { 
                latitude: $('#rt_latitude_parcel').val() == null ? 0 : $('#rt_latitude_parcel').val(), 
                longitude: $('#rt_longitude_parcel').val() == null ? 0 : $('#rt_longitude_parcel').val()
            }
        }
    };
    var formDataObj = {};
    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });

    // Affichage des données JSON dans la console
    console.log("objet 1",formDataObj);
    console.log("objet 2",secondJSON);    
    
    // Ajout des propriétés du deuxième objet au premier objet
    Object.assign(formDataObj, secondJSON);
    var all_JSON = JSON.stringify(formDataObj);

    // Affichage du premier objet JSON mis à jour dans la console
    console.log('ALL JSON',all_JSON);

    $.ajax({
        url: URI+'/api/parcels',
        type: "POST",
        contentType: 'application/json',
        data: all_JSON,
        dataType: "json",
        beforeSend: function() {
            $('.btn_submit').prop('disabled', true);
        },
        success: function(data,status, xhr) {
            console.log(data,status,xhr);
            if (xhr.status == 200 || xhr.status == 201) {
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
        error: function(xhr, status, error) {
            if (xhr.status == 500) {
                console.log('Erreur 500 : ', error);
                $(".alert").removeClass('alert-success').addClass('alert-danger').show()
                $(".alert-message").text('Une erreur est survenue aucours du traitement de votre requete');  
                $('.btn_submit').prop('disabled', false);
            } else {
                $(".alert").removeClass('alert-success').addClass('alert-danger').show()
                $(".alert-message").text(xhr.message+ ' '+error);  
                $('.btn_submit').prop('disabled', false);
                console.log('Erreur : ', status, error);
            }
        }
    });
}
/** POST DATA FARMS */
function sendDataFarmsWithFormData(e,form){
    e.preventDefault();
    var form_ = $('#'+form)[0];
    var formData = new FormData(form_);

    // Ajout de données supplémentaires à l'objet FormData existant
    var secondJSON = {
        geographicalPos: {
            leftBottom: { 
                latitude: $('#lb_latitude_farms').val() == null ? 0 : $('#lb_latitude_farms').val(),
                longitude: $('#lb_longitude_farms').val() == null ? 0 : $('#lb_longitude_farms').val()
            },
            leftTop: { 
                latitude: $('#lt_latitude_farms').val() == null ? 0 : $('#lt_latitude_farms').val(), 
                longitude: $('#lt_longitude_farms').val() == null ? 0 : $('#lt_longitude_farms').val() 
            },
            rightBottom: { 
                latitude: $('#rb_latitude_farms').val() == null ? 0 : $('#rb_latitude_farms').val(), 
                longitude: $('#rb_longitude_farms').val() == null ? 0 : $('#rb_longitude_farms').val() 
            },
            rightTop: { 
                latitude: $('#rt_latitude_farms').val() == null ? 0 : $('#rt_latitude_farms').val(), 
                longitude: $('#rt_longitude_farms').val() == null ? 0 : $('#rt_longitude_farms').val()
            }
        }
    };
    var formDataObj = {};
    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });

    // Affichage des données JSON dans la console
    console.log("objet 1",formDataObj);
    console.log("objet 2",secondJSON);    
    
    // Ajout des propriétés du deuxième objet au premier objet
    Object.assign(formDataObj, secondJSON);
    var all_JSON = JSON.stringify(formDataObj);

    // Affichage du premier objet JSON mis à jour dans la console
    console.log('ALL JSON',all_JSON);

    $.ajax({
        url: URI+'/api/farms',
        type: "POST",
        contentType: 'application/json',
        data: all_JSON,
        dataType: "json",
        beforeSend: function() {
            $('.btn_submit').prop('disabled', true);
        },
        success: function(data,status, xhr) {
            console.log(data,status,xhr);
            if (xhr.status == 200 || xhr.status == 201) {
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
        error: function(xhr, status, error) {
            if (xhr.status == 500) {
                console.log('Erreur 500 : ', error);
                $(".alert").removeClass('alert-success').addClass('alert-danger').show()
                $(".alert-message").text('Une erreur est survenue aucours du traitement de votre requete');  
                $('.btn_submit').prop('disabled', false);
            } else {
                $(".alert").removeClass('alert-success').addClass('alert-danger').show()
                $(".alert-message").text(xhr.message+ ' '+error);  
                $('.btn_submit').prop('disabled', false);
                console.log('Erreur : ', status, error);
            }
        }
    });
}
/** POST DATA LINE */
function sendDataLineWithFormData(e,form){
    e.preventDefault();
    var form_ = $('#'+form)[0];
    var formData = new FormData(form_);

    // Ajout de données supplémentaires à l'objet FormData existant
    var secondJSON = {
        geographicalPos: {
            leftBottom: { 
                latitude: $('#lb_latitude_line').val() == null ? 0 : $('#lb_latitude_line').val(),
                longitude: $('#lb_longitude_line').val() == null ? 0 : $('#lb_longitude_line').val()
            },
            leftTop: { 
                latitude: $('#lt_latitude_line').val() == null ? 0 : $('#lt_latitude_line').val(), 
                longitude: $('#lt_longitude_line').val() == null ? 0 : $('#lt_longitude_line').val() 
            },
            rightBottom: { 
                latitude: $('#rb_latitude_line').val() == null ? 0 : $('#rb_latitude_line').val(), 
                longitude: $('#rb_longitude_line').val() == null ? 0 : $('#rb_longitude_line').val() 
            },
            rightTop: { 
                latitude: $('#rt_latitude_line').val() == null ? 0 : $('#rt_latitude_line').val(), 
                longitude: $('#rt_longitude_line').val() == null ? 0 : $('#rt_longitude_line').val()
            }
        }
    };
    var formDataObj = {};
    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });

    // Affichage des données JSON dans la console
    console.log("objet 1",formDataObj);
    console.log("objet 2",secondJSON);    
    
    // Ajout des propriétés du deuxième objet au premier objet
    Object.assign(formDataObj, secondJSON);
    var all_JSON = JSON.stringify(formDataObj);

    // Affichage du premier objet JSON mis à jour dans la console
    console.log('ALL JSON',all_JSON);

    $.ajax({
        url: URI+'/api/lines',
        type: "POST",
        contentType: 'application/json',
        data: all_JSON,
        dataType: "json",
        beforeSend: function() {
            $('.btn_submit').prop('disabled', true);
        },
        success: function(data,status, xhr) {
            console.log(data,status,xhr);
            if (xhr.status == 200 || xhr.status == 201) {
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
        error: function(xhr, status, error) {
            if (xhr.status == 500) {
                console.log('Erreur 500 : ', error);
                $(".alert").removeClass('alert-success').addClass('alert-danger').show()
                $(".alert-message").text('Une erreur est survenue aucours du traitement de votre requete');  
                $('.btn_submit').prop('disabled', false);
            } else {
                $(".alert").removeClass('alert-success').addClass('alert-danger').show()
                $(".alert-message").text(xhr.message+ ' '+error);  
                $('.btn_submit').prop('disabled', false);
                console.log('Erreur : ', status, error);
            }
        }
    });
}
/** POST DATA TREE */
function sendDataTreeWithFormData(e,form){
    e.preventDefault();
    var form_ = $('#'+form)[0];
    var formData = new FormData(form_);

    // Ajout de données supplémentaires à l'objet FormData existant
    var secondJSON = {
        geographicalPos: {
            leftBottom: { 
                latitude: $('#lb_latitude_tree').val() == null ? 0 : $('#lb_latitude_tree').val(),
                longitude: $('#lb_longitude_tree').val() == null ? 0 : $('#lb_longitude_tree').val()
            },
            leftTop: { 
                latitude: $('#lt_latitude_tree').val() == null ? 0 : $('#lt_latitude_tree').val(), 
                longitude: $('#lt_longitude_tree').val() == null ? 0 : $('#lt_longitude_tree').val() 
            },
            rightBottom: { 
                latitude: $('#rb_latitude_tree').val() == null ? 0 : $('#rb_latitude_tree').val(), 
                longitude: $('#rb_longitude_tree').val() == null ? 0 : $('#rb_longitude_tree').val() 
            },
            rightTop: { 
                latitude: $('#rt_latitude_tree').val() == null ? 0 : $('#rt_latitude_tree').val(), 
                longitude: $('#rt_longitude_tree').val() == null ? 0 : $('#rt_longitude_tree').val()
            }
        }
    };
    var formDataObj = {};
    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });

    // Affichage des données JSON dans la console
    console.log("objet 1",formDataObj);
    console.log("objet 2",secondJSON);    
    
    // Ajout des propriétés du deuxième objet au premier objet
    Object.assign(formDataObj, secondJSON);
    var all_JSON = JSON.stringify(formDataObj);

    // Affichage du premier objet JSON mis à jour dans la console
    console.log('ALL JSON',all_JSON);

    $.ajax({
        url: URI+'/api/trees',
        type: "POST",
        contentType: 'application/json',
        data: all_JSON,
        dataType: "json",
        beforeSend: function() {
            $('.btn_submit').prop('disabled', true);
        },
        success: function(data,status, xhr) {
            console.log(data,status,xhr);
            if (xhr.status == 200 || xhr.status == 201) {
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
        error: function(xhr, status, error) {
            if (xhr.status == 500) {
                console.log('Erreur 500 : ', error);
                $(".alert").removeClass('alert-success').addClass('alert-danger').show()
                $(".alert-message").text('Une erreur est survenue aucours du traitement de votre requete');  
                $('.btn_submit').prop('disabled', false);
            } else {
                $(".alert").removeClass('alert-success').addClass('alert-danger').show()
                $(".alert-message").text(xhr.message+ ' '+error);  
                $('.btn_submit').prop('disabled', false);
                console.log('Erreur : ', status, error);
            }
        }
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
    // $('.collapse').on('show.bs.collapse', function () {
    //     // Fermer tous les éléments Collapse qui ne sont pas celui en train de s'ouvrir
    //     $('.collapse').not($(this)).collapse('hide');
    // });
});
