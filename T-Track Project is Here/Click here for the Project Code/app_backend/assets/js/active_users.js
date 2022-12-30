import { navbar } from "./navbar.js"
import { footer } from "./footer.js"

let navbar_div = document.getElementById("head_nav");
navbar_div.innerHTML = navbar();

let footer_div = document.getElementById("footer_div");
footer_div.innerHTML = footer();


const appendData =(data, container)=>{
    container.innerHtml = null;
	row_loader_gif.style.display = "none";
	
    data.forEach(({ name,email,mobile,description,token,id
    }, index) => {
        let tr=document.createElement("tr");
        tr.className="userdata"
        
		tr.innerHTML= `<td class="cell">${name}</td>
	<td class="cell"><span class="truncate">${email}</span></td>
	<td class="cell">${id}</td>
	<td class="cell"><span class="cell-data">${mobile}</span></td>
	<td class="cell"><span >logged in</span></td>
	<td class="cell">${description} </td>
    <td class="cell">${token}</td>
	`

	//console.log(data[index].id)
	

     
    container.append(tr);
    })

	// let completed_clr = document.getElementById("completed");
	// completed_clr.style.backgroundColor = "green";
    }

	//take t-body universal
	const tbody = document.getElementById("heroku_user");


	const userData = async () => {

		try {

			let res = await fetch(`https://floating-island-82380.herokuapp.com/users`);

			let data = await res.json();
			console.log('data:', data);

			//appendData(data, tbody);
			createButtons(data.length, 5);
			
		} catch (error) {
			console.log('error:', error)
			
		}
	}

	const getPaginatedData = async (clicked_button, limit) => {

		let res = await fetch(`https://floating-island-82380.herokuapp.com/users?_page=${clicked_button}&_limit=${limit}`);

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

			let res = await fetch(`https://floating-island-82380.herokuapp.com/users`);

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