const getData = async () => {
    let container = document.getElementById("box-data")
    let price_con = document.getElementById("mid-right-box-data")
    let Total_Price = document.getElementById("price");
    let res = await fetch("https://floating-island-82380.herokuapp.com/orders")
    let data = await res.json()
    console.log(data)

    appendData(data, container, price_con, Total_Price)

}
getData()



const appendData = (data, container, price_con, Total_Price) => {
    container.innerHtml = null;
    let el = data.length - 1
    let p = document.createElement("p")
    p.innerText = data[el].Plan
    let p1 = document.createElement("p")
    p1.innerText = `Team size ${data[el].Team_size}`
    let p2 = document.createElement("p")
    p2.innerText = `${data[el].Plan_size} subscription`
    let p3 = document.createElement("p")
    p3.innerText = 'Simple time tracking software for teams of any size'
    container.append(p, p1, p2, p3)
    let price = document.createElement("h3")
    let new_price = Number(data[el].Price) * Number(data[el].Team_size) * 82
    price.innerText = `Total Price: ₹${Number(data[el].Price) * Number(data[el].Team_size) * 82} / $${data[el].Price}`
    price_con.append(price)
    let t_pr = `Tota Price with 18% GST ${new_price + (new_price * 18 / 100)}`
    Total_Price.append(t_pr)


}

let Payment_Form_btn = document.getElementById("plac_order_btn")
Payment_Form_btn.onclick = () => {
    let OTP = window.prompt("Please Enter The OTP From Your Register Mobile Number ")
    if (OTP == "1234") {
        window.location.href = "./payment.html"
    } else {
        alert("Wrong OTP!")
    }
    PaymentForm()

}
// let new_data;
const PaymentForm = async () => {
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
        card_holder_name

    }
    let res = await fetch(`https://protected-eyrie-18814.herokuapp.com/checkout`, {
        method: "POST",
        body: JSON.stringify(Send_this_data),
        headers: {
            'Content-Type': "application/json",
        },
    })
    let data = await res.json()
    // new_data = data
    console.log(data)


}
// console.log(new_data)

