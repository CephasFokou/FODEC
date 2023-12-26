/** GET DATA TREE */
function getDataTree(){
    //alert(237)
    $.ajax({
        url: URI+'/api/trees',
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {
            console.log('all arbre' ,data);
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
                        var content =`
                                    <li class="sidebar-item">
                                        <a data-bs-target="#tree_${item.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${item.name.toUpperCase()}<br/>
                                            <span class="text-body-tertiary small">${item.name}</span>
                                        </a>
                                        <i class="fas fa-eye action_icon view_icon" id="view_icon_${item.id}" title="Lister fruits d'un arbre'" onclick="viewList('${item.name}', 'fruits', ${item.id})"></i>
                                        <i class="fas fa-pencil action_icon edit_icon" id="edit_icon_${item.id}" title="Cliquez pour editer" onclick="editArbre(${item.id})"></i>
                                        <i class="fas fa-map-marked-alt action_icon map_icon" id="action_icon map_icon_${item.id}" title="Afficher localisation" 
                                            onclick="updateMap('${lt_latitude}','${lt_longitude}','${lb_latitude}','${lb_longitude}','${rt_latitude}','${rt_longitude}','${rb_latitude}','${rb_longitude}','${item.name.toUpperCase()}')">
                                        </i>	  
                                        <i class="fas fa-trash-alt action_icon delete_icon" id="delete_icon_${item.id}" title="Cliquez pour supprimer" onclick="confirmDeleteItem('trees', ${item.id})"></i>	  
                                        <div class="collapse sidebar-dropdown border-1 border-bottom mx-4 row" id="tree_${item.id}">
                                            <div class="col-6 d-grid justify-content-center p-0">
                                                <div class="card card-image">
                                                    <img src="${URI}/api/images/${item.image}" onerror="this.onerror=null; this.src='./img/standard-img.png';" alt="" class="img-tree image-fuild">
                                                </div>
                                            </div>
                                            <div class="col-6 lh-base p-0  text-capitalize text-muted">
                                                <div class="d-grid">
                                                    <div class="d-flex">
                                                        <span class=""><strong>Nbr Parent M :</strong> </span>
                                                        <span class="">${item.parentMale}</span>
                                                    </div>
                                                    <div class="d-flex">
                                                        <span class=""><strong>Nbr Parent F :</strong> </span>
                                                        <span class="">${item.parentMale}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>`;
                        $('#all_trees').append(content);
                        // $("#site_name").text(item.name.toUpperCase());
                        //console.log(item.name);
                    })
                    var options = "";
                    for (var i = 0; i < tab.length; i++) {
                        options += '<option value="' + tab[i].id + '">' + tab[i].name.toUpperCase() + '</option>';
                    }
                    $('#treeId_fruit').html(options);
                    $('#treeId_leave').html(options);
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

function getTreeById(treeId){
    $.ajax({
        url: URI+'/api/trees/1',
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {
            console.log('treeData' ,data);
            if (xhr.status == 200) {
                        var lb_latitude = data.geographicalPos.leftBottom.latitude;
                        var lb_longitude = data.geographicalPos.leftBottom.longitude;
                        var lt_latitude = data.geographicalPos.leftTop.latitude;
                        var lt_longitude = data.geographicalPos.leftTop.longitude;

                        var rb_latitude = data.geographicalPos.rightBottom.latitude;
                        var rb_longitude = data.geographicalPos.rightBottom.longitude;
                        var rt_latitude = data.geographicalPos.rightTop.latitude;
                        var rt_longitude = data.geographicalPos.rightTop.longitude;
                        var content =`
                                    <li class="sidebar-item">
                                        <a data-bs-target="#tree_${data.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${data.name.toUpperCase()}<br/>
                                            <span class="text-body-tertiary small">${data.name}</span>
                                        </a>
                                        <i class="fas fa-eye action_icon view_icon" id="view_icon_${data.id}" title="Lister fruits d'un arbre'" onclick="viewList('${data.name}', 'fruits', ${data.id})"></i>
                                        <i class="fas fa-pencil action_icon edit_icon" id="edit_icon_${data.id}" title="Cliquez pour editer" onclick="editArbre(${data.id})"></i>
                                        <i class="fas fa-map-marked-alt action_icon map_icon" id="action_icon map_icon_${data.id}" title="Afficher localisation" 
                                            onclick="updateMap('${lt_latitude}','${lt_longitude}','${lb_latitude}','${lb_longitude}','${rt_latitude}','${rt_longitude}','${rb_latitude}','${rb_longitude}','${data.name.toUpperCase()}')">
                                        </i>	  
                                        <i class="fas fa-trash-alt action_icon delete_icon" id="delete_icon_${data.id}" title="Cliquez pour supprimer" onclick="confirmDeleteItem('trees', ${data.id})"></i>	  
                                        <div class="collapse sidebar-dropdown border-1 border-bottom mx-4 row" id="tree_${data.id}">
                                            <div class="col-6 d-grid justify-content-center p-0">
                                                <div class="card card-image">
                                                    <img src="${URI}/api/images/${data.image}" onerror="this.onerror=null; this.src='./img/standard-img.png';" alt="" class="img-tree image-fuild">
                                                </div>
                                            </div>
                                            <div class="col-6 lh-base p-0  text-capitalize text-muted">
                                                <div class="d-grid">
                                                    <div class="d-flex">
                                                        <span class=""><strong>Nbr Parent M :</strong> </span>
                                                        <span class="">${data.parentMale}</span>
                                                    </div>
                                                    <div class="d-flex">
                                                        <span class=""><strong>Nbr Parent F :</strong> </span>
                                                        <span class="">${data.parentMale}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>`;
                        setContentInModal("alertModal", content, "left");
                        
            }
          
        },
        error: function(xhr, status, error) {
            console.error(status + ' : ' + error);
        }
    });
}