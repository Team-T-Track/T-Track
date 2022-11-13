const getData = async () => {
    let container = document.getElementById("box-data");
    let price_con = document.getElementById("mid-right-box-data");
    let Total_Price = document.getElementById("price");
    let res = await fetch("https://floating-island-82380.herokuapp.com/orders");
    let data = await res.json();
    // console.log(data)

    appendData(data, container, price_con, Total_Price);
};
getData();

const appendData = (data, container, price_con, Total_Price) => {
    container.innerHtml = null;
    let el = data.length - 1;
    let p = document.createElement("p");
    p.innerText = data[el].Plan;
    let p1 = document.createElement("p");
    p1.innerText = `Team size ${data[el].Team_size}`;
    let p2 = document.createElement("p");
    p2.innerText = `${data[el].Plan_size} subscription`;
    let p3 = document.createElement("p");
    p3.innerText = "Simple time tracking software for teams of any size";
    container.append(p, p1, p2, p3);
    let price = document.createElement("h3");

    let new_price = Number(data[el].Price) * Number(data[el].Team_size) * 82;
    price.innerText = `Total Price: ₹${Number(data[el].Price) * Number(data[el].Team_size) * 82
        } / $${data[el].Price * data[el].Team_size}`;
    price.className = "total_prr";
    price_con.append(price);
    let t_pr = `Total Price with 18% GST : ₹${new_price + (new_price * 18 / 100)} /-`
    Total_Price.append(t_pr);
};

let Payment_Form_btn = document.getElementById("plac_order_btn");
Payment_Form_btn.onclick = () => {
    let DSK = window.prompt("Please Enter The OTP send From your Email!")
    if (DSK == "1234") {
        // window.location.href = "./payment.html"
        PaymentForm();
    } else {
        alert("Wrong Coupon Code!")
    }

};
// let new_data;
// let dis = document.getElementById("dis")
// dis.onclick = () => {
//     let DSK = window.prompt("Please Enter The Discount Coupon Code!")
//     if (DSK == "TT10") {
//         DiscountPrice()
//     } else {
//         alert("Wrong Coupon Code!")
//     }
//     // DiscountPrice()

// }


let x = 100;

const PaymentForm = async () => {
    let resPP = await fetch("https://floating-island-82380.herokuapp.com/orders");
    let dataAA = await resPP.json();
    console.log(dataAA);
    let el = dataAA.length - 1;
    let price = Number(dataAA[el].Price) * Number(dataAA[el].Team_size) * 82;

    let Plan_type = dataAA[el].Plan;
    let Plan_size = dataAA[el].Plan_size;
    let Team_size = dataAA[el].Team_size;
    let status = "Paid";
    console.log("price", price);


    // let dis = x;

    // console.log(dis)

    let Per_Com = document.getElementById("prn_com").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let pincode = document.getElementById("pincode").value;
    let contry = document.getElementById("contry").value;
    let state = document.getElementById("state").value;
    let currency = document.getElementById("currency").value;
    let card = document.getElementById("card").value;
    let date = document.getElementById("date").value;
    let card_holder_name = document.getElementById("card_holder_name").value;
    let website = document.getElementById("website").value;

    // console.log(Per_Com, email, name, city, pincode, contry, state, currency, card, date, card_holder_name)
    let Send_this_data = {
        Per_Com,
        email,
        name,
        city,
        pincode,
        contry,
        state,
        currency,
        card,
        date,
        card_holder_name,
        price,
        Plan_type,
        Plan_size,
        Team_size,
        website,
        status,
    };

    let res = await fetch(
        `https://protected-eyrie-18814.herokuapp.com/checkout`,
        {
            method: "POST",
            body: JSON.stringify(Send_this_data),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    let data = await res.json();
    window.location.href = "./payment.html"
    // new_data = data
    console.log(data);
};