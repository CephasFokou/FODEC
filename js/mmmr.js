
var getAuth = localStorage.getItem('auth');
if(getAuth) {
	var getUser_decode =  JSON.parse(getAuth); 
	var userId = getUser_decode.id;         
	var role = getUser_decode.roles[0];        
	console.log(`user`, userId);
}
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
    }else if(type =="fruits") {
        $("#all_fruits li").each(function () {
            var text = $(this).text().toLowerCase(); // Récupère le texte de chaque élément de la liste en minuscules
            if (filterText.length >= 3 && regex.test(text)) {
                // Vérifie si le texte de l'élément correspond à l'expression régulière après trois caractères
                $(this).show(); // Affiche l'élément
                // $(this).find('.collapse').collapse('show');
                console.log($(this).show());
            } else if (filterText.length === 0) {
                // Si l'input est vide, affiche tous les éléments
                $("#all_fruits li").show();
                //$(this).find('.collapse').collapse('hide');
                // $(this).find('.collapse').collapse('show');
            } else {
                $(this).hide(); // Cache les éléments qui ne correspondent pas ou si moins de trois caractères ont été saisis
                console.log("data not found");
            }
        });
    }else if(type =="leaves") {
        $("#all_leaves li").each(function () {
            var text = $(this).text().toLowerCase(); // Récupère le texte de chaque élément de la liste en minuscules
            if (filterText.length >= 3 && regex.test(text)) {
                // Vérifie si le texte de l'élément correspond à l'expression régulière après trois caractères
                $(this).show(); // Affiche l'élément
                // $(this).find('.collapse').collapse('show');
                console.log($(this).show());
            } else if (filterText.length === 0) {
                // Si l'input est vide, affiche tous les éléments
                $("#all_leaves li").show();
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

function collapseData(value){
    $('#site_'+value).toggle();
}


function convertTimestampToDate(timestamp) {
    // Créer un objet Date en utilisant le timestamp
    const date = new Date(timestamp);

    // Formater la date selon vos besoins
    const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
    const formattedDate = date.toLocaleDateString('fr-FR', options);

    return formattedDate;
}







// Fonction pour convertir l'image en base64
function getImageAsBase64(inputId, callback) {
    var input = document.getElementById(inputId);

    input.addEventListener('change', function() {
        var file = this.files[0]; // Récupère le fichier image sélectionné

        if (file) {
            var reader = new FileReader(); // Crée un objet FileReader

            reader.onload = function(event) {
                var base64Image = event.target.result; // Contient les données base64 de l'image
                callback(base64Image); // Appelle la fonction de rappel avec les données base64
            };

            reader.readAsDataURL(file); // Lit le contenu du fichier en tant que données base64
        }
    });

    // Vérification si une image est déjà présente (par exemple, si le champ est rempli par défaut)
    if (input.files && input.files[0]) {
        var file = input.files[0];
        var reader = new FileReader();

        reader.onload = function(event) {
            var base64Image = event.target.result;
            callback(base64Image);
        };

        reader.readAsDataURL(file);
    }
}

function contentImage(value){
    return value;
}
function processBase64Image(base64Image) {
    //console.log('Image convertie en données base64 :', base64Image);
    globalImageContent  = contentImage(base64Image);
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
                $(".alert-message").text('Une erreur est survenue aucours du traitement de votre requete');  
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
                $(".alert-message").text('Une erreur est survenue aucours du traitement de votre requete');  
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
//getImageAsBase64('picture', processBase64Image);
/**POST DATRA FRUIT */
function sendDataFruitWithFormData(e,form){
    e.preventDefault();
    var form_ = $('#'+form)[0];
    var formData = new FormData(form_);

    //formData.append('picture', globalImageContent);

    var formDataObj = {};
    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });

    var all_JSON = JSON.stringify(formDataObj);
    // Affichage du premier objet JSON mis à jour dans la console
    //console.log('pictureImage',globalImageContent);
    console.log('ALL JSON',all_JSON);

    $.ajax({
        url: URI+'/api/fruits',
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: 'application/json',
        data: all_JSON,
        dataType: "json",
        // processData: false,
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
function sendDataLeaveWithFormData(e,form){
    e.preventDefault();
    var form_ = $('#'+form)[0];
    var formData = new FormData(form_);

    //formData.append('picture', globalImageContent);

    var formDataObj = {};
    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });

    var all_JSON = JSON.stringify(formDataObj);
    // Affichage du premier objet JSON mis à jour dans la console
    console.log('ALL JSON',all_JSON);

    $.ajax({
        url: URI+'/api/leaves',
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: 'application/json',
        data: all_JSON,
        dataType: "json",
        // processData: false,
        beforeSend: function() {
            $('.btn_submit').prop('disabled', true);
        },
        success: function(data,status, xhr) {
            console.log(data,status,xhr);
            if (xhr.status == 200 || xhr.status == 201) {
                $(".alert").removeClass('alert-danger').addClass('alert-success').show()
                $(".alert-message").text(data.shape.toUpperCase()+ " ENREGISTRE AVEC SUCCES !!!");             
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
function uploadImage(e,form) {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "*/*");


    var fileInput = document.getElementById('picture'); // Récupérez votre élément d'input de type 'file'
    
    var form_ = $('#'+form)[0];
    var formData = new FormData(form_);
    formData.append("picture", fileInput.files[0]);
    var formDataObj = {};

    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });

    var all_JSON = JSON.stringify(formDataObj);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: all_JSON,
        redirect: 'follow'
    };
        console.log(`formData`, formData);
        fetch(URI+"/api/fruits", requestOptions)
        .then(response => response.text())
        .then(result => console.log('result',result))
        .catch(error => console.log('error', error));
}
function uploadImageLeave(e,form) {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "*/*");
    // var fileInput = document.getElementById('picture'); // Récupérez votre élément d'input de type 'file'
    
    var form_ = $('#'+form)[0];
    var formData = new FormData(form_);
    // formData.append("picture", fileInput.files[0]);
    var formDataObj = {};

    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });

    var all_JSON = JSON.stringify(formDataObj);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: all_JSON,
        redirect: 'follow'
    };
    
    console.log(`formData`, formData);
    fetch(URI+"/api/leaves", requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur de réseau - ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log('result',data)
    })
    .catch(error => {
        console.error('Erreur lors de la requête Fetch:', error);
    });
}

console.log(`window`, window.location);

function authLogin(e,form){
    e.preventDefault();
    var form_ = $('#'+form)[0];
    var formData = new FormData(form_);

    var formDataObj = {};
    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });

    var all_JSON = JSON.stringify(formDataObj);
    // Affichage du premier objet JSON mis à jour dans la console
    console.log('ALL JSON',all_JSON);
    $.ajax({
        url: URI+'/api/auth/signin',
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: 'application/json',
        data: all_JSON,
        dataType: "json",
        // processData: false,
        beforeSend: function() {
            $('.btn_submit').prop('disabled', true);
        },
        success: function(data,status, xhr) {
            if (xhr.status == 200 || xhr.status == 201) {
                console.log(data);
                localStorage.setItem('auth', JSON.stringify(data));
                $(".alert").removeClass('alert-danger').addClass('alert-success').show()
                $(".alert-message").text("CONNEXION EFFECTUEE AVEC SUCCES !!!");             
                $("#"+form).get(0).reset();
                setTimeout(function(){
                    $(".alert-message").text("Vous serez rediriger vers une autre page !!!").fadeIn(1000);
                    window.location.href="index.html";
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
                $(".alert-message").text('USERNAME OU PASSWORD INCORRECT');  
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
function authLogout(event){
    event.preventDefault();
    if (confirm('Voulez-vous vraiment vous deconnectez ?')) {
        // Code à exécuter si l'utilisateur clique sur "OK"
        localStorage.removeItem('auth');
        window.location.href="login.html";
    }
}
function tooglePassword(input, elt) {
    //alert(input);
    $("." + elt).toggleClass("fa-eye fa-eye-slash");
    var div = $("#" + input);
    if (div.attr("type") == "password") {
        div.attr("type", "text");
    } else {
        div.attr("type", "password");
    }
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
    $(window).on("load", function() {
        $('.preloader-wrap').addClass('loaded');
        //$('.preloader-wrap').fadeOut('slow');
        //alert('237')
    });
});
