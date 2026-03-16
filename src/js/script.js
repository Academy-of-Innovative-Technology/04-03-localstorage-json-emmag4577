var Database = {
	keyName: "Mutant Database",
	data: []
};


function loadDataSource() {
	var storedData = localStorage.getItem(Database.keyName);

	var parsedData = JSON.parse(storedData);

	Database.data = parsedData.response;
	
	displayData( Database.data );
}



function displayData(dataArray) {
	var container = document.querySelector(".row");

	dataArray.forEach(function(mutant){

		var html = `
		<div class="col">
			<div class="card shadow-lg">
				<img src="${mutant.image}" class="card-img-top">

				<div class="card-body">
					<h5 class="card-title text-center">
						${mutant.name.alias}
					</h5>

					<p class="text-center text-muted">
						${mutant.name.firstName} ${mutant.name.lastName}
					</p>

					<h6 class="fw-bold">Profile</h6>
					<ul>
					<h6 class="fw-bold">Powers</h6>
					<ul>
						${mutant.powers.map(power => `<li>${power}</li>`).join("")}
					</ul>

					<h6 class="fw-bold">Affiliations</h6>
					<ul>
						${mutant.affiliation.map(team => `<li>${team}</li>`).join("")}
					</ul>

				</div>
			</div>
		</div>
		`;

		container.insertAdjacentHTML("beforeend", html);

	});

}

loadDataSource();