let total_sales = document.getElementById("total_sales");
let total_refunds = document.getElementById("total_refunds");
let paid_users = document.getElementById("paid_users");
let active_users = document.getElementById("active_users");

const adminData = async () => {

    try {

        let res = await fetch(`https://protected-eyrie-18814.herokuapp.com/checkout`);

        let data = await res.json();
        console.log('data:', data);

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

        
    } catch (error) {
        console.log('error:', error)
        
    }

}

adminData();

const start = new Date();
console.log('start:', start)
