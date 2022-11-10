let name = document.getElementById("acc_name");
let email = document.getElementById("acc_email");
let city = document.getElementById("acc_city");
let country = document.getElementById("acc_country");
let date = document.getElementById("acc_date");
let currency = document.getElementById("acc_currency");
let bill = document.getElementById("acc_bill");
let card = document.getElementById("acc_card");
let id = document.getElementById("acc_id");
let status = document.getElementById("acc_status");

const userAccount = async () => {

    try {

        let res = await fetch(`https://protected-eyrie-18814.herokuapp.com/click_user`);

        let data = await res.json();
        console.log('data:', data)
        accountAppend(data)
        
    } catch (error) {
        console.log('error:', error)
        
    }
}

userAccount()

const accountAppend = async (el) => {

    let name = document.getElementById("acc_name");
    name.innerText = el.Plan;


}

