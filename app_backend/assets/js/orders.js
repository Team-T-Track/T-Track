const appendData =(data, container)=>{
    container.innerHtml = null;
    data.forEach(({ name, date, price, id, Plan_type, Plan_size, status
    }, index) => {
        let tr=document.createElement("tr");
        tr.className="userdata"
        
		tr.innerHTML= `<td class="cell">${id}</td>
	<td class="cell"><span class="truncate">${Plan_type}:(${Plan_size})</span></td>
	<td class="cell">${name}</td>
	<td class="cell"><span class="cell-data">${date}</span><span class="note">04:23 PM</span></td>
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

			appendData(data, tbody);
			
		} catch (error) {
			console.log('error:', error)
			
		}
	}

	userData();



	let search_btn = document.getElementById("search_btn");
	search_btn.onclick = () => {
		event.preventDefault()
        searchOrder();
	}

	//data not found function
	let data_not_found = document.getElementById("data_not_found");

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
    