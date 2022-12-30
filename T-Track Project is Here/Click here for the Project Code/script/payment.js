const getData = async () => {
    let container = document.getElementById("amount")
    let res = await fetch("https://floating-island-82380.herokuapp.com/orders")
    let data = await res.json();
    console.log(data)
    appendData(data, container)


}
getData()
const appendData = (data, container) => {
    container.innerHtml = null;
    let el = data.length - 1
    let price = document.createElement("h4")
    let new_price = Number(data[el].Price) * Number(data[el].Team_size) * 82
    price.innerText = `Total Amount Paid : ${new_price + (new_price * 18 / 100)}`

    container.append(price)
}
let done = document.getElementById("done")
done.addEventListener("click", redirect)

function redirect() {
    window.location.href = "./plan.html"
}