/** GET DATA FRUIT */
function getDataLeave(){
    //alert(237)
    $.ajax({
        url: URI+'/api/leaves',
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {
            console.log('all leaves' ,data);
            if (xhr.status == 200) {
                tab = data;
                if ($.isArray(tab) && tab.length > 0) {
                    $.each(tab, function(index, item) {
                        var content =`<li class="sidebar-item">
                                        <a data-bs-target="#leave_${index}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${item.shape.toUpperCase()}<br/>
                                            <span class="text-body-tertiary small">${item.type}</span>
                                        </a>
                                        <i class="fas fa-sort-numeric-down action_icon map_icon" id="action_icon map_icon_${index}"></i>	  
                                        <div class="collapse sidebar-dropdown border-1 border-bottom mx-4 row" id="leave_${index}" data-bs-parent="#leave_${index}">
                                            <div class="col-6 d-grid justify-content-center p-0">
                                                <div class="card card-image">
                                                    <img src="./img/standard-img.png" alt="" class="image-fuild">
                                                </div>
                                            </div>
                                            <div class="col-6 lh-base p-0  small text-capitalize text-muted">
                                                <div class="d-grid">
                                                    <div class="d-flex">
                                                        <span class=""><strong>Size : </strong> </span>
                                                        <span class="">${item.size}</span>
                                                    </div>
                                                    <div class="d-flex">
                                                        <span class=""><strong>Poids : </strong> </span>
                                                        <span class="">${item.weight}</span>
                                                    </div>
                                                    
                                                    <div class="d-flex">
                                                        <span class=""><strong>Couleur : </strong> </span>
                                                        <span class=" mx-1"> <i class="fas fa-circle" style="color:${item.color}"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>`;
                        $('#all_leaves').append(content);
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