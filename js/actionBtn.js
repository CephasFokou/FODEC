

function viewList(parent, child, parentId){
    console.log(parentId);
    $("#map").hide();
    $("#resetMainBtn").show();
    $("#list").show();
    $("#tableTitle1").text(child);
    $("#tableTitle2").text(parent);
    $("#site_name").text(parent);
    getDataParcelsSite(parentId)

}

function resetContent(){
    $("#map").show();
    $("#list").hide();
    $("#resetMainBtn").hide();
    $("#site_name").text("GEOLOCALISATION");
}

function displayTabHeader(tabHeaders){
    $("#TableHeader").html('');
    for (let index = 0; index < tabHeaders.length; index++) {
        const element = tabHeaders[index];
        $("#TableHeader").append(`
        ${index==0 ? "<tr>":""}
        <th>${element}</th>
        ${index==tabHeaders.length ? "</tr>":""}
        `);
    }
}

function displayTabBody(tabBody) {
    $("#list tbody").html('');
    for (let rowIndex = 0; rowIndex < tabBody.length; rowIndex++) {
        const rowValues = tabBody[rowIndex];

        // Créer une nouvelle ligne <tr>
        const newRow = $("<tr></tr>");

        // Ajouter les cellules <td> à la ligne en fonction des valeurs de la ligne actuelle
        for (let colIndex = 0; colIndex < rowValues.length; colIndex++) {
            const cellValue = rowValues[colIndex];

            // Ajouter une cellule <td> à la ligne
            newRow.append(`<td>${cellValue}</td>`);
        }

        // Ajouter la ligne complète au tbody
        $("#list tbody").append(newRow);
    }
}

function editItem(item) {
    console.log(item);
    $()
    
}

function deleteItem(item) {
    console.log(itemId);

}

