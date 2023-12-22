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
                                                var lb_latitude = item.geographicalPos.leftBottom.latitude;
                        var lb_longitude = item.geographicalPos.leftBottom.longitude;
                        var lt_latitude = item.geographicalPos.leftTop.latitude;
                        var lt_longitude = item.geographicalPos.leftTop.longitude;

                        var rb_latitude = item.geographicalPos.rightBottom.latitude;
                        var rb_longitude = item.geographicalPos.rightBottom.longitude;
                        var rt_latitude = item.geographicalPos.rightTop.latitude;
                        var rt_longitude = item.geographicalPos.rightTop.longitude;

                        var content =`<li class="sidebar-item">
                                        <a data-bs-target="#line_${item.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${item.name.toUpperCase()}<br/>
                                            <span class="text-body-tertiary small">${item.name}</span>
                                        </a>
                                        <i class="fas fa-eye action_icon view_icon" id="view_icon_${item.id}" title="Lister champs du site" onclick="viewList('${item.name}', 'arbres', ${item.id})"></i>
                                        <i class="fas fa-pencil action_icon edit_icon" id="edit_icon_${item.id}" title="Cliquez pour editer" onclick="editSite(${item.id})"></i>
                                        <i class="fas fa-map-marked-alt action_icon map_icon" id="action_icon map_icon_${item.id}" title="Afficher localisation" 
                                            onclick="updateMap('${lt_latitude}','${lt_longitude}','${lb_latitude}','${lb_longitude}','${rt_latitude}','${rt_longitude}','${rb_latitude}','${rb_longitude}','${item.name.toUpperCase()}')">
                                        </i>	  
                                        <i class="fas fa-trash-alt action_icon delete_icon" id="delete_icon_${item.id}" title="Cliquez pour supprimer" onclick="confirmDeleteItem('sites', ${item.id})"></i>
                                        <ul class="collapse cursor-default mb-3 sidebar-dropdown width-p" id="line_${item.id}" data-bs-parent="#line_${item.id}">
                                            <div class="card-body p-3 bg-body-tertiary">
                                                <div class="row">
                                                    <div class="d-flex gap-1 gm-ui-hover-effect small w-auto">
                                                        <div class="col-md-6 d-grid">
                                                        <span class="px-2 bg- small">Parcel<b>${item.parcel}</b> champs</span>
                                                        <span class="px-2 bg- small">Nbre arbre <b>${item.trees.length}</b> champs</span>
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

// GET LIST Line BY PARCEL
function getDataTreeByLine(lineId){
    tabBody = [];
    $.ajax({
        url: URI+'/api/trees/line/'+lineId,
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {

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
                        tabBody.push([
                            item.id,
                            '<img src="' + URI + '/api/images/' + item.image + '">',
                            item.name,
                            item.parentMale,
                            item.parentFemale,
                            item.altitude,
                            convertTimestampToDate(item.creationDate)
                        ]);                    
                    });
                    tabHeaders = ["#ID", "Image","Name","Parent Male","Parent Femelle","Altitude","creationDate"];
                    displayTabHeader(tabHeaders);
                    displayTabBody(tabBody, tabHeaders);
                    console.log(tabBody)
                    
                }else{
                    displayTabHeader([]);
                    displayTabBody(["DATA NOT FOUND"],[]);
                    console.log('Le tableau est vide pour le champ ' + lineId);
                }
            }
          
        },
        error: function(xhr, status, error) {
            displayTabHeader([]);
            displayTabBody(["URL API NOT FOUND"],[])
            console.error(status + ' : ' + error);
        }
    });
}