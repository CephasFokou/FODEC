
/** GET DATA Users */
function getProprio(){
    var options = '';
    $.ajax({
        url: URI+'/api/users/all',
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {
            if (xhr.status == 200) {
                tab = data;
                if ($.isArray(tab) && tab.length > 0) {
                    $.each(tab, function(index, item) {
                        console.log('.....----////');
                        // Vérifie si le rôle "ROLE_ADMIN" est présent dans les rôles de l'utilisateur
                        if (item.roles.some(role => role.name === "ROLE_ADMIN")) {
                            options += '<option value="' + item.id + '">' + item.firstname + ' ' + item.lastname + '</option>';
                        }
                    })
                    $('.proprietaire').html(options);
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

/** GET DATA Users */
function getDataUsers(){
    $.ajax({
        url: URI+'/api/users',
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {
            if (xhr.status == 200) {
                tab = data.data;
                if ($.isArray(tab) && tab.length > 0) {
                    $.each(tab, function(index, item) {
                        var content =`<li class="sidebar-item">
                                        <a data-bs-target="#site_${item.id}" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                            ${item.lastname.toUpperCase()} ${item.firstname.toUpperCase()}<br/>
                                            <span class="text-body-tertiary small">${item.roles[0].name}</span>
                                        </a>
                                        <i class="fas fa-eye action_icon view_icon" id="view_icon_${item.id}" title="Lister Info Users" onclick="viewList('User ${item.lastname}', 'users', ${item.id})"></i>
                                        <i class="fas fa-pencil action_icon edit_icon" id="edit_icon_${item.id}" style="right: 35px !important" title="Cliquez pour editer" onclick="editSite(${item.id})"></i>	  
                                        <i class="fas fa-trash-alt action_icon delete_icon" id="delete_icon_${item.id}" title="Cliquez pour supprimer" onclick="confirmDeleteItem('users', ${item.id})"></i>
                                        <ul class="collapse cursor-default mb-3 sidebar-dropdown width-p" id="site_${item.id}" data-bs-parent="#site_${item.id}">
                                            <div class="card-body p-3 bg-body-tertiary">
                                                <div class="row">
                                                    <div class="d-flex gap-1 gm-ui-hover-effect small w-auto">
                                                        <div class="col-md-12 d-grid">
                                                            <span class="px-2 bg- small">Username : <b>${item.username}</b></span>
                                                            <span class="px-2 bg- small">Email : <b>${item.email}</b></span>
                                                            <span class="px-2 bg- small">Phone Number : <b>${item.phonenumber}</b></span>
                                                            <span class="px-2 bg- small">Contact Urg : <b>${item.contact}</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>`;
                        $('#all_users').append(content);
                    })
                    //APPEL SITE SELECT BOX
                    // var options = "";
                    // for (var i = 0; i < tab.length; i++) {
                    //     options += '<option value="' + tab[i].id + '">' + tab[i].name.toUpperCase() + '</option>';
                    // }
                    // $('#siteId').html(options);
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


// GET LIST PARCELLES SITES
function getDataUserById(userId){
    tabBody = [];
    $.ajax({
        url: URI+'/api/users/'+userId,
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {

            if (xhr.status == 200) {
                var item ;
                item = data;
                console.log(`data users by id`, item);
                if (typeof item !== 'undefined' && item !== null) {                    
                    
                    tabBody.push([item.id, item.username, item.lastname, item.firstname, item.roles[0].name, item.email, item.phonenumber, convertTimestampToDate(item.creationDate)]);

                    tabHeaders = ["#ID", "Username", "Nom", "Prenom", "Role", "Email", "Phone Number", "creationDate"];
                    displayTabHeader(tabHeaders);
                    displayTabBody(tabBody, tabHeaders);
                    console.log(tabBody);
                    
                }else{
                    console.log('Object user est vide.');
                }
            }
          
        },
        error: function(xhr, status, error) {
            console.error(status + ' : ' + error);
        }
    });
}
// GET LIST ALL USERS
function allUsers(){
    tabBody = [];
    $.ajax({
        url: URI+'/api/users/all',
        method: 'GET',
        dataType: 'json',
        success: function(data,status, xhr) {

            if (xhr.status == 200) {
                var tab ;
                tab = data;
                console.log(`all data users`, tab);
                if ($.isArray(tab) && tab.length > 0) {
                    $.each(tab, function(index, item) {
                                                // Ajouter les données de chaque élément à la liste tabBody
                        tabBody.push([item.id, item.username, item.lastname, item.firstname, item.roles[0].name, item.email, item.phonenumber, convertTimestampToDate(item.creationDate)]);
                  
                    });
                        
                    tabHeaders = ["#ID", "Username", "Nom", "Prenom", "Role", "Email", "Phone Number", "creationDate"];
                    displayTabHeader(tabHeaders);
                    displayTabBody(tabBody, tabHeaders);
                    console.log(tabBody);
                    
                }else{
                    displayTabHeader([]);
                    displayTabBody(["DATA NOT FOUND"],[]);
                    console.log('Le tableau est vide pour tous les users');
                }
            }
          
        },
        error: function(xhr, status, error) {
            console.error(status + ' : ' + error);
        }
    });
}

