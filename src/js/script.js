var Database = {
    keyName: "Mutant Database",
    data: []
};


function loadDataSource() {


    var storedData = localStorage.getItem(Database.keyName);


    if(storedData == null){
        console.log("No data found in localStorage");
        return;
    }

    var parsedData = JSON.parse(storedData);

    Database.data = parsedData.response;

    displayData(Database.data);
}


function displayData(dataArray) {

    var container = document.querySelector(".row");

    dataArray.forEach(function(mutant){

        var html = `
        <div class="col">
            <div class="card shadow-lg">

                <img src="${mutant.image}" class="card-img-top">

                <div class="card-body">

                    <h5 class="card-title text-center mb-3">
                        ${mutant.name.alias}
                    </h5>

                    <p class="card-text text-center text-muted">
                        ${mutant.name.firstName} ${mutant.name.lastName}
                    </p>

                    <h6 class="fw-bold">Profile</h6>
                    <ul class="list-unstyled">
                        <li>Gender: ${mutant.profile.gender}</li>
                        <li>Eyes: ${mutant.profile.eyes}</li>
                        <li>Hair: ${mutant.profile.hair}</li>
                        <li>Height: ${mutant.profile.height}</li>
                    </ul>

                    <h6 class="fw-bold">Powers</h6>
                    <ul class="list-unstyled">
                        ${mutant.powers.map(function(power){
                            return `<li>${power}</li>`;
                        }).join("")}
                    </ul>

                    <h6 class="fw-bold">Affiliations</h6>
                    <ul class="list-inline">
                        ${mutant.affiliation.map(function(team){
                            return `<li class="list-inline-item badge bg-primary">${team}</li>`;
                        }).join("")}
                    </ul>

                </div>

            </div>
        </div>
        `;

        container.insertAdjacentHTML("beforeend", html);

    });

}


loadDataSource();

//complete