let ParcelleSite = [];
let tabHeaders = [];
let tabBody = [] 

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
                        var lb_latitude = item.geographicalPos.leftBottom.latitude;
                        var lb_longitude = item.geographicalPos.leftBottom.longitude;
                        var lt_latitude = item.geographicalPos.leftTop.latitude;
                        var lt_longitude = item.geographicalPos.leftTop.longitude;

                        var rb_latitude = item.geographicalPos.rightBottom.latitude;
                        var rb_longitude = item.geographicalPos.rightBottom.longitude;
                        var rt_latitude = item.geographicalPos.rightTop.latitude;
                        var rt_longitude = item.geographicalPos.rightTop.longitude;
                        
                        console.log(rt_longitude);
                        var content =`<li class="sidebar-item" data-id="${item.id}">`;
                        content += `<a data-bs-target="#site_${item.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${item.name.toUpperCase()}<br/>
                                            <span class="text-body-tertiary small">${item.geneticRessource}</span>
                                        </a>`;
                        content +=      `<i class="fas fa-eye action_icon view_icon" id="view_icon_${item.id}" title="Lister champs du site" onclick="viewList('${item.name}', 'champs', ${item.id})"></i>`;
                        if(roleUser == "ADMINISTRATEUR" || roleUser == "AGENT VALIDATEUR"){
                            content +=      `<i class="fas fa-pencil action_icon edit_icon" title="Cliquez pour editer"></i>`;
                        }
                        content +=      `<i class="fas fa-map-marked-alt action_icon map_icon" id="action_icon map_icon_${item.id}" title="Afficher localisation" 
                                            onclick="updateMap('${lt_latitude}','${lt_longitude}','${lb_latitude}','${lb_longitude}','${rt_latitude}','${rt_longitude}','${rb_latitude}','${rb_longitude}','${item.name.toUpperCase()}')">
                                        </i>`;	  
                        if(roleUser == "ADMINISTRATEUR" || roleUser == "AGENT VALIDATEUR"){
                            content +=     `<i class="fas fa-trash-alt action_icon delete_icon" id="delete_icon_${item.id}" title="Cliquez pour supprimer" onclick="confirmDeleteItem('sites', ${item.id})"></i>`;
                        }
                        content +=     `<ul class="collapse cursor-default mb-3 sidebar-dropdown width-p" id="site_${item.id}" data-bs-parent="#site_${item.id}">
                                            <div class="card-body p-3 bg-body-tertiary">
                                                <div class="row">
                                                    <div class="d-flex gap-1 gm-ui-hover-effect small w-auto">
                                                        <div class="col-md-6 d-grid">
                                                            <span class="px-2 bg- small"><b>${item.percentageFarmSite}%</b> champs</span>
                                                            <span class="px-2 bg- small"><b>${item.numberMaleTreeNotNormal}%</b> arbre male NC</span>
                                                            <span class="px-2 bg- small"><b>${item.numberMaleTreeNormal}%</b> arbre male C</span>
                                                            <span class="px-2 bg- small"><b>${item.numberFemaleTreeNotNormal}%</b> arbre femelle NC</span>
                                                            <span class="px-2 bg- small"><b>${item.numberFemaleTreeNormal}%</b> arbre femelle C</span>
                                                        </div>
                                                        <div class="col-md-6 d-grid">
                                                            <span class="px-2 bg- small"><b>${item.numberFemaleTree}%</b> arbre manquant</span>
                                                            <span class="px-2 bg- small"><b>${item.percentageMaleTreeMissing}%</b> arbre male manquant</span>
                                                            <span class="px-2 bg- small"><b>${item.numberFemaleTreeMissing}%</b> arbre femelle manquant</span>
                                                            <span class="px-2 bg- small"><b>${item.percentageMaleLine}%</b> ligne male</span>
                                                            <span class="px-2 bg- small"><b>${item.percentageFemaleLine}%</b> ligne femelle</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <div class="modal fade" id="editSiteModal${item.id}" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h3 class="modal-title">Edition d'un site</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body m-3">
                                                    <form class="profile-form" id="add_site" method="post" action="#" onsubmit="sendDataWithFormData(event,'add_site')">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="card">
                                                                <div class="card-header" id="heading_1">
                                                                    <h5 class="card-title my-2">
                                                                        <a href="#" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="true" aria-controls="collapse_2">
                                                                            Informations du Site
                                                                        </a>
                                                                    </h5>
                                                                </div>
                                                                <div id="collapse_2" class="collapse show" aria-labelledby="heading_1" data-bs-parent="#accordionExample">
                                                                    <div class="card-body">
                                                                        <div class="row">
                                                                            <div class="mb-3 col-md-6">
                                                                                <label class="form-label" for="NomSite">Nom du site</label>
                                                                                <input type="text" class="form-control" id="name" name="name" placeholder="Site Mpos" required>
                                                                            </div>
                                                                            <div class="mb-3 col-md-6">
                                                                                <label class="form-label" for="speculation">Speculation</label>
                                                                                <select name="speculation" class="form-control speculation" id="speculation">
                                                                                    
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="mb-3 col-md-6">
                                                                                <label class="form-label" for="NbreLigneMale">Génétique Ressource</label>
                                                                                <select name="geneticRessource" class="form-control geneticRessource" id="geneticRessource">
                                                                                    
                                                                                </select>
                                                                            </div>
                                                                            <div class="mb-3 col-md-6">
                                                                                <label class="form-label" for="NbreLigneFemelle">Propriétaire</label>
                                                                                <input type="text" class="form-control" id="userId" name="userId" value="1" placeholder="1" required>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card">
                                                                <div class="card-header" id="heading_2">
                                                                    <h5 class="card-title my-2">
                                                                        <a href="#" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="true" aria-controls="collapse_2">
                                                                            Informations geographiques
                                                                        </a>
                                                                    </h5>
                                                                </div>
                                                                <div id="collapse_2" class="collapse" aria-labelledby="heading_2" data-bs-parent="#accordionExample">
                                                                    <div class="card-body">
                                                                        <div class="row">
                                                                            <div class="mb-3 col-md-6">
                                                                                <label class="form-label" for="lb_latitude">leftBottom Latitude</label>
                                                                                <input type="text" class="form-control" id="lb_latitude"  placeholder="1" >
                                                                            </div>
                                                                            <div class="mb-3 col-md-6">
                                                                                <label class="form-label" for="lb_longitude">leftBottom Longitude</label>
                                                                                <input type="text" class="form-control" id="lb_longitude" placeholder="1" >
                                                                            </div>
                                                                            <div class="mb-3 col-md-6">
                                                                                <label class="form-label" for="lt_latitude">leftTop Latitude</label>
                                                                                <input type="text" class="form-control" id="lt_latitude" placeholder="1" >
                                                                            </div>
                                                                            <div class="mb-3 col-md-6">
                                                                                <label class="form-label" for="lt_longitude">leftTop Longitude</label>
                                                                                <input type="text" class="form-control" id="lt_longitude" placeholder="1" >
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="mb-3 col-md-6">
                                                                                <label class="form-label" for="rb_latitude">rightBottom Latitude</label>
                                                                                <input type="text" class="form-control" id="rb_latitude" placeholder="1" >
                                                                            </div>
                                                                            <div class="mb-3 col-md-6">
                                                                                <label class="form-label" for="rb_longitude">rightBottom Longitude</label>
                                                                                <input type="text" class="form-control" id="rb_longitude"  placeholder="1" >
                                                                            </div>
                                                                            <div class="mb-3 col-md-6">
                                                                                <label class="form-label" for="rt_latitude">rightTop Latitude</label>
                                                                                <input type="text" class="form-control" id="rt_latitude" placeholder="1" >
                                                                            </div>
                                                                            <div class="mb-3 col-md-6">
                                                                                <label class="form-label" for="rt_longitude">rightTop Longitude</label>
                                                                                <input type="text" class="form-control" id="rt_longitude" placeholder="1" >
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mb-3 alert alert-success text-center alert-dismissible" role="alert" style="display: none;text-transform: uppercase;">
                                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                            <div class="alert-message">
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="card-footer">
                                                            <button type="submit" class="btn_submit btn btn-primary form-control btn_submit">Enregistrer</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    `;
                        $('#all_sites').append(content);
                        $("#site_name").text(item.name.toUpperCase());
                    })
                    //APPEL SITE SELECT BOX
                    var options = "";
                    for (var i = 0; i < tab.length; i++) {
                        options += '<option value="' + tab[i].id + '">' + tab[i].name.toUpperCase() + '</option>';
                    }
                    $('.siteId').html(options);
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
// function openModalSiteEdit() {
//     // Gestionnaire d'événements pour l'icône d'édition avec délégation d'événements
//     $('#all_sites').on('click', '.edit_icon', function() {
//         var siteId = $(this).closest('.sidebar-item').data('id');
//         openModalSite(siteId); // Appel de la fonction pour ouvrir le modal
//     });
// }
function openModalSite(siteId) {
    // Construire l'ID du modal correspondant
    var modalId = '#editSiteModal' + siteId;
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    //alert(siteId);
    $(modalId).appendTo('body');
    $(modalId).modal('hide');
}

// GET LIST PARCELLES SITES
function getDataFarmsSite(siteId){
    tabBody = [];
    $.ajax({
        url: URI+'/api/farms/site/'+siteId,
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {
            console.log(`data farm by idSite`, data);
            if (xhr.status == 200) {
                tab = data;
                if ($.isArray(tab) && tab.length > 0) {
                    $.each(tab, function(index, item) {
                        var lb_latitude = item.geographicalPos.leftBottom.latitude;
                        var lb_longitude = item.geographicalPos.leftBottom.longitude;
                        var lt_latitude = item.geographicalPos.leftTop.latitude;
                        var lt_longitude = item.geographicalPos.leftTop.longitude;

                        var rb_latitude = item.geographicalPos.rightBottom.latitude;
                        var rb_longitude = item.geographicalPos.rightBottom.longitude;
                        var rt_latitude = item.geographicalPos.rightTop.latitude;
                        var rt_longitude = item.geographicalPos.rightTop.longitude;
                        
                        console.log('testLong==' +rt_longitude);
                        // Ajouter les données de chaque élément à la liste tabBody
                        tabBody.push([item.id, item.name, item.initialArea, item.lastArea, item.initialDensity, item.lastDensity, item.farmType, convertTimestampToDate(item.creationDate)]);
                    });
                    tabHeaders = ["#ID", "name", "Zone Initiale", "Zone Actuelle", "Densité Initiale", "Densité Actuelle", "Type de ferme", "creationDate"];
                    displayTabHeader(tabHeaders);
                    displayTabBody(tabBody, tabHeaders);
                    console.log(tabBody);
                    
                }else{
                    displayTabHeader([]);
                    displayTabBody(["DATA NOT FOUND"],[]);
                    console.log('Le tableau est vide pour le site ' + siteId);
                }
            }
          
        },
        error: function(xhr, status, error) {
            console.error(status + ' : ' + error);
        }
    });
}
// GET LIST ALL SITES
function allSites(){
    tabBody = [];
    $.ajax({
        url: URI+'/api/sites/all',
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {

            if (xhr.status == 200) {
                var tab ;
                tab = data;
                console.log(`all data sites`, tab);
                if ($.isArray(tab) && tab.length > 0) {
                    $.each(tab, function(index, item) {
                       // Ajouter les données de chaque élément à la liste tabBody
                       tabBody.push([
                        item.id, item.name, item.speculation, item.geneticRessource,item.user, convertTimestampToDate(item.creationDate)
                    ]);
                    });
                        
                    tabHeaders = ["#ID", "name", "speculation", "geneticRessource","User","creationDate"];
                    displayTabHeader(tabHeaders);
                    displayTabBody(tabBody, tabHeaders);
                    console.log(tabBody);
                    
                }else{
                    displayTabHeader([]);
                    displayTabBody(["DATA NOT FOUND"],[]);
                    console.log('Le tableau est vide pour tous les sites');
                }
            }
          
        },
        error: function(xhr, status, error) {
            displayTabHeader([]);
            displayTabBody(["URL API  NOT FOUND"],[]);
            console.error(status + ' : ' + error);
        }
    });
}

$(document).ready(function() {
    $('#all_sites').on('click', '.edit_icon', function() {
        // Obtient l'identifiant du site en utilisant les attributs de données
        var siteId = $(this).closest('.sidebar-item').data('id');
        
        // Ouvre le modal pour le site spécifique
        openModalSite(siteId);
    });
});