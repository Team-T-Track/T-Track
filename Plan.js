let plan_price = document.getElementById("plan_price")
let Plan_price_prof = document.getElementById("Plan_price_prof")
let annual_p;
let month_p;

// function declaretion
let month = document.getElementById("month")
month.onclick = () => {
    monthplan()
}

let annually = document.getElementById("annually")
annually.onclick = () => {
    annuallyPlan()
}



// funcitons deffinations
const annuallyPlan = () => {
    // console.log("hello")
    plan_price.innerHTML = null;
    plan_price.innerHTML = '$7&#x00b3'
    annual_p = 7
    Plan_price_prof.innerHTML = null;
    Plan_price_prof.innerHTML = '$5&#x00b3'
    month_p = 5


}
const monthplan = () => {
    // console.log("hello")
    plan_price.innerHTML = null;
    plan_price.innerHTML = '$8&#x00b3'
    annual_p = 8
    Plan_price_prof.innerHTML = null;
    Plan_price_prof.innerHTML = '$6&#x00b3'
    month_p = 6

}
let price_btn = document.getElementById("Bussiness")
price_btn.onclick = () => {
    BusinessPlan()
}

let Professional_btn = document.getElementById("Professional")
Professional_btn.onclick = () => {
    ProfessionalPlan()
}
let Free = document.getElementById("Free")
Free.onclick = () => {
    FreePlan()
}

const BusinessPlan = async () => {
    let team_size = document.getElementById("team_number").value;
    if (team_size == undefined) {
        team_size = 1

    }
    let time;
    let Price;
    if (annual_p == 7) {
        time = "Annual Plan"
        Price = 7

    } else if (annual_p == 8) {
        time = "Monthly Plan"
        Price = 8
    } else {
        time = "Annual Plan"
        Price = 7

    }
    let Send_this_data = {
        "Plan_size": time,
        "Team_size": team_size,
        "Price": Price,
        "Plan": "Business Plan"

    }
    let res = await fetch(`https://floating-island-82380.herokuapp.com/orders`, {
        method: "POST",
        body: JSON.stringify(Send_this_data),
        headers: {
            'Content-Type': "application/json",
        },
    })
    let data = await res.json()
    console.log(data)


}
const ProfessionalPlan = async () => {
    let team_size = document.getElementById("team_number").value;
    if (team_size == undefined) {
        team_size = 1

    }
    let time;
    let Price;
    if (annual_p == 7) {
        time = "Annual Plan"
        Price = 7

    } if (annual_p == 8) {
        time = "Monthly Plan"
        Price = 8
    }
    let Send_this_data = {
        "Plan_size": time,
        "Team_size": team_size,
        "Price": Price,
        "Plan": "Professinal Plan"

    }
    let res = await fetch(`https://floating-island-82380.herokuapp.com/orders`, {
        method: "POST",
        body: JSON.stringify(Send_this_data),
        headers: {
            'Content-Type': "application/json",
        },
    })
    let data = await res.json()
    console.log(data)

}
const FreePlan = async () => {
    let team_size = document.getElementById("team_number").value;
    if (team_size == undefined) {
        team_size = 1

    }
    let Send_this_data = {
        "Plan_size": "Monthly Plan",
        "Team_size": team_size,
        "Price": 00,
        "Plan": "Free Plan"

    }
    let res = await fetch(`https://floating-island-82380.herokuapp.com/orders`, {
        method: "POST",
        body: JSON.stringify(Send_this_data),
        headers: {
            'Content-Type': "application/json",
        },
    })
    let data = await res.json()
    console.log(data)

}
let subscription = document.getElementById("subscription")
subscription.onclick = () => {
    SubscriptionPlan()
}
const SubscriptionPlan = () => {
    window.location.href = "./plan.html"
}