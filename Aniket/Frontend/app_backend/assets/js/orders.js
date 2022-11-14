import { navbar } from "./navbar.js"
import { footer } from "./footer.js"

let navbar_div = document.getElementById("head_nav");
navbar_div.innerHTML = navbar();

let footer_div = document.getElementById("footer_div");
footer_div.innerHTML = footer();

const appendData =(data, container)=>{

    container.innerHtml = null;

	row_loader_gif.style.display = "none";

    data.forEach(({ name, date, price, id, Plan_type, Plan_size, status
    }, index) => {
        let tr=document.createElement("tr");
        tr.className="userdata"
        
		tr.innerHTML= `<td class="cell">${id}</td>
	<td class="cell"><span class="truncate">${Plan_type} + (${Plan_size})</span></td>
	<td class="cell">${name}</td>
	<td class="cell"><span class="cell-data">${date}</span></td>
	<td class="cell"><span class="badge bg-success">${status}</span></td>
	<td class="cell">₹${price} /-</td>
	`

	//console.log(data[index].id)
	
	let td = document.createElement("button");
	td.innerText = "View";
	//td.style.border = "1px solid red";
	td.className = "cell";
	td.onclick = () => {

		accountsPage(data[index].id);
		//console.log(data[index]);
	}
	
    tr.append(td);
     
    container.append(tr);
    })

	// let completed_clr = document.getElementById("completed");
	// completed_clr.style.backgroundColor = "green";
    }

	//take t-body universal
	const tbody = document.getElementById("heroku_user");

	const userData = async () => {

		try {

			let res = await fetch(`https://protected-eyrie-18814.herokuapp.com/checkout`);

			let data = await res.json();
			console.log('data:', data);

			//appendData(data, tbody);
			createButtons(data.length, 5);
			
		} catch (error) {
			console.log('error:', error)
			
		}
	}

	const getPaginatedData = async (clicked_button, limit) => {

		let res = await fetch(`https://protected-eyrie-18814.herokuapp.com/checkout?_page=${clicked_button}&_limit=${limit}`);

		let data = await res.json();
		console.log('data:', data);

		appendData(data, tbody);
	};

	userData();
	getPaginatedData(1, 5);

	let paginated_btns = document.getElementById("paginate");

	let row_loader_gif = document.getElementById("row_loader_gif");
	row_loader_gif.style.width = "20%"

	const createButtons = (total_data_rows, rows_per_page) => {

		const buttons = Math.ceil(total_data_rows / rows_per_page)

		for(let i = 1; i <= buttons; i++) {

			let btn = document.createElement("button");

			btn.innerText = i;
			btn.style.margin = "2.5px";
			btn.style.border = "1px solid green"
			btn.style.backgroundColor = "white"

			btn.onclick = () => {

				tbody.innerHTML = null;

				row_loader_gif.style.display = "block";

				getPaginatedData(i, 5)
			};

			paginated_btns.append(btn);

		}

	};


	let search_btn = document.getElementById("search_btn");
	search_btn.onclick = () => {
		event.preventDefault()
        searchOrder();
	}

	//data not found function
	let data_not_found = document.getElementById("data_not_found");
	data_not_found.style.marginLeft = "13%";
	data_not_found.style.marginTop = "-2%"

	//let thead = document.getElementById("heroku_head");

	const searchOrder = async () => {

		let search_input = document.getElementById("search-orders").value;
		console.log('search_input:', search_input)

		try {

			let res = await fetch(`https://protected-eyrie-18814.herokuapp.com/checkout`);

			let data = await res.json();
			console.log('data:', data);

			console.log(data.length)

			let count = 0;
			data.forEach(({ Plan_size, Team_size, Price, Plan, id
			}, index) => {
				
				if(id == search_input) {

					let arr = [];
					arr.push(data[index]);
					tbody.innerHTML = null;

					appendData(arr, tbody)
					console.log(data[index])

					data_not_found.style.display = "none";
					//thead.style.display = "block";
					
				}

				else {
					count++;
					if(count === data.length) {
						tbody.innerHTML = null;
						data_not_found.style.display = "block";
						//thead.style.display = "none";
						
					}
				}

			})

			//console.log(count)
			
		} catch (error) {
			console.log('error:', error)
			
		}
	}

	const accountsPage = async (id) => {
		
		let new_id = id;

		let new_obj = {
			id: new_id,
		}

        try {

			let res = await fetch(`https://protected-eyrie-18814.herokuapp.com/click_user`, {

			     method: 'POST',
				 body: JSON.stringify(new_obj),

				 headers: {
					'Content-Type' : 'application/json',
				 },
			});

			let data = await res.json();
			console.log('data:', data);

			window.location.href = "./account.html";
			
		} catch (error) {
			console.log('error:', error)
			
		}

	}

	//download csv
	let csv_btn = document.getElementById("csv_btn");
	csv_btn.onclick = () => {
		tableToCSV()
	}

	function tableToCSV() {
 
		// Variable to store the final csv data
		let csv_data = [];

		// Get each row data
		let rows = document.getElementsByTagName('tr');
		for (let i = 0; i < rows.length; i++) {

			// Get each column data
			let cols = rows[i].querySelectorAll('td,th');

			// Stores each csv row data
			let csvrow = [];
			for (let j = 0; j < cols.length; j++) {

				// Get the text data of each cell
				// of a row and push it to csvrow
				csvrow.push(cols[j].innerText);
			}

			// Combine each column value with comma
			csv_data.push(csvrow.join(","));
		}

		 // Combine each row data with new line character
		 csv_data = csv_data.join('\n');
 
		 // Call this function to download csv file 
		 downloadCSVFile(csv_data);

	 }

	 function downloadCSVFile(csv_data) {
 
		// Create CSV file object and feed
		// our csv_data into it
		CSVFile = new Blob([csv_data], {
			type: "text/csv"
		});

		// Create to temporary link to initiate
		// download process
		let temp_link = document.createElement('a');

		// Download csv file
		temp_link.download = "ttr.csv";
		var url = window.URL.createObjectURL(CSVFile);
		temp_link.href = url;

		// This link should not be displayed
		temp_link.style.display = "none";
		document.body.appendChild(temp_link);

		// Automatically click the link to
		// trigger download
		temp_link.click();
		document.body.removeChild(temp_link);
	}

	//pagination will happen here.
	// const getData = async (clicked_button) => {

	// 	let res = await fetch(`https://protected-eyrie-18814.herokuapp.com/checkout`);

	// 	let data = await res.json();
	// 	console.log('data:', data);

	// 	createButtons(data.length, 8);
	// };

	



	//getPaginatedData(1, 8);


    