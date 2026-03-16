function loadDataSource(){

    var stored = localStorage.getItem(Database.keyName);

    var parsed = JSON.parse(stored);

    Database.data = parsed.response;

    displayData(Database.data);

}


function displayData(dataArray){

    var container = document.querySelector(".row");

    dataArray.forEach(function(m){

        var card = `
        <div class="col">
            <div class="card shadow-lg">

                <img src="${m.image}" class="card-img-top">

                <div class="card-body">

                    <h5 class="card-title text-center">${m.name.alias}</h5>

                    <p class="text-center text-muted">
                        ${m.name.firstName} ${m.name.lastName}
                    </p>

                    <p>Gender: ${m.profile.gender}</p>
                    <p>Eyes: ${m.profile.eyes}</p>
                    <p>Hair: ${m.profile.hair}</p>
                    <p>Height: ${m.profile.height}</p>

                    <p><strong>Powers:</strong> ${m.powers.join(", ")}</p>

                    <p><strong>Affiliation:</strong> ${m.affiliation.join(", ")}</p>

                </div>
            </div>
        </div>
        `;

        container.insertAdjacentHTML("beforeend", card);

    });

}

loadDataSource();