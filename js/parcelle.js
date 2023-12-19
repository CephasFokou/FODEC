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
                        var lb_latitude = item.geographicalPos.leftBottom.latitude;
                        var lb_longitude = item.geographicalPos.leftBottom.longitude;
                        var lt_latitude = item.geographicalPos.leftTop.latitude;
                        var lt_longitude = item.geographicalPos.leftTop.longitude;

                        var rb_latitude = item.geographicalPos.rightBottom.latitude;
                        var rb_longitude = item.geographicalPos.rightBottom.longitude;
                        var rt_latitude = item.geographicalPos.rightTop.latitude;
                        var rt_longitude = item.geographicalPos.rightTop.longitude;
                        console.log("parcels", lb_latitude)
                        var content =`<li class="sidebar-item">
                                        <a data-bs-target="#parcel_${item.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${item.name.toUpperCase()}<br/>
                                            <span class="text-body-tertiary small">${item.actualDensity}</span>
                                        </a>
                                        <i class="fas fa-map-marked-alt action_icon map_icon" id="action_icon map_icon_${item.id}" title="Afficher localisation" 
                                            onclick="updateMap('${lt_latitude}','${lt_longitude}','${lb_latitude}','${lb_longitude}','${rt_latitude}','${rt_longitude}','${rb_latitude}','${rb_longitude}','${item.name.toUpperCase()}')">
                                        </i>	  
                                        <ul class="collapse cursor-default mb-3 sidebar-dropdown width-p" id="parcel_${item.id}" data-bs-parent="#parcel_${item.id}">
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
                                                            <span class="px-2 bg- small"><b>${item.percentageMaleTreeMissing}%</b> arbre M manquant</span>
                                                            <span class="px-2 bg- small"><b>${item.numberFemaleTreeMissing}%</b> arbre F manquant</span>
                                                            <span class="px-2 bg- small"><b>${item.percentageMaleLine}%</b> ligne male</span>
                                                            <span class="px-2 bg- small"><b>${item.percentageFemaleLine}%</b> ligne femelle</span>
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