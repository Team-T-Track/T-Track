import { navbar } from "./navbar.js"
import { footer } from "./footer.js"

let navbar_div = document.getElementById("head_nav");
navbar_div.innerHTML = navbar();

let footer_div = document.getElementById("footer_div");
footer_div.innerHTML = footer();

const userAccount = async () => {

    try {

        let response = await fetch(`https://protected-eyrie-18814.herokuapp.com/click_user`);

        let new_id_data = await response.json();
        console.log('new_id_data:', new_id_data)
        console.log(new_id_data.id)
        // accountAppend(data)

        let res = await fetch(`https://protected-eyrie-18814.herokuapp.com/checkout/${new_id_data.id}`, {
        method: "GET",
        
        headers: {
            'Content-Type': "application/json",
        },
    })
    let data = await res.json()
    // new_data = data
    console.log(data)

    accountAppend(data);

        //Change the Payment-Status
        let change_status = document.getElementById("change_status");
        change_status.onclick = () => {
        let status = document.getElementById("acc_status");
        console.log('status:', status)

        alert("Are you sure you want to refund the client?");
        //console.log("clicked");

        changePaidStatus(new_id_data.id);    
}

        //Delete the user database
        let delete_user = document.getElementById("delete_user");
        delete_user.onclick = () => {

        alert("Are you sure you want to Delete the User Database?");
        //console.log("clicked");

        deleteUser(new_id_data.id);
}
        
    } catch (error) {
        console.log('error:', error)
        
    }
}

userAccount()

const accountAppend = async (el) => {

    let name = document.getElementById("acc_name");
    let email = document.getElementById("acc_email");
    let city = document.getElementById("acc_city");
    let country = document.getElementById("acc_country");
    let date = document.getElementById("acc_date");
    //let currency = document.getElementById("acc_currency");
    let bill = document.getElementById("acc_bill");
    let card = document.getElementById("acc_card");
    let id = document.getElementById("acc_id");
    let website = document.getElementById("acc_websites");
    let subscription = document.getElementById("acc_subs");
    let plan_type = document.getElementById("acc_plan_type");
    let team_size = document.getElementById("acc_team");
    let org = document.getElementById("acc_org")
    let status = document.getElementById("acc_status");


    //let name = document.getElementById("acc_name");
    name.innerText = el.name;
    email.innerText = el.email;
    city.innerText = el.city;
    country.innerText = el.contry;
    date.innerText = el.date;
    //currency.innerText = el.currency;
    bill.innerText = `₹${el.price} /-`;
    card.innerText = el.card;
    id.innerText = el.id;
    website.innerText = el.website;
    subscription.innerText = el.Plan_type;
    plan_type.innerText = el.Plan_size;
    team_size.innerText = el.Team_size;
    org.innerText = el.Per_Com;
    status.innerText = el.status;

}


const changePaidStatus = async (id) => {

    try {

        //let new_status = "Refunded";

        let send_this_data = {
            status: "Refunded",
        }

        console.log(id);

        let res = await fetch(`https://protected-eyrie-18814.herokuapp.com/checkout/${id}`, {

            method : 'PATCH',
            body: JSON.stringify(send_this_data),

            headers: {
                'Content-Type' : 'application/json',
            },
        });

        let data = await res.json();
        console.log('data:', data);

        accountAppend(data);
        
    } catch (error) {
        console.log('error:', error)
        
    }
}

const  deleteUser = async (id) => {

    try {

        let res = await fetch(`https://protected-eyrie-18814.herokuapp.com/checkout/${id}`, {

            method : 'DELETE',

            headers: {
                'Content-Type' : 'application/json',
            },
        });

        let data = await res.json();
        console.log('data:', data);

        window.location.href = "./orders.html"
        
    } catch (error) {
        console.log('error:', error)
        
    }


}

