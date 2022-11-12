let total_sales = document.getElementById("total_sales");
let total_refunds = document.getElementById("total_refunds");
let paid_users = document.getElementById("paid_users");
let active_users = document.getElementById("active_users");

const adminData = async () => {

    try {

        //paid users data api call
        let res = await fetch(`https://protected-eyrie-18814.herokuapp.com/checkout`);

        //login users data api call
        let login_users = await fetch(`https://floating-island-82380.herokuapp.com/users`);

        //paid users data array
        let data = await res.json();
        console.log('data:', data);

        //login users data array
        let login_users_data = await login_users.json();
        console.log('login_users_data:', login_users_data);

        let total_price = 0;
        let refund = 0;
        let countR = 0

        data.forEach(el => {

            total_price += el.price;

            if(el.status == "Refunded") {
                total_price = total_price - el.price;
                refund += el.price;
                countR++;
            }

            
        });

        total_sales.innerText = `₹${total_price}`;
        total_refunds.innerText = `₹${refund}`;
        paid_users.innerText = data.length - countR;
        active_users.innerText = login_users_data.length; //login users


        
    } catch (error) {
        console.log('error:', error)
        
    }

}

adminData();

const start = new Date();
console.log('start:', start)
