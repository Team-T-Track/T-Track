let image = document.getElementById("img")
let time_tarking = document.getElementById("time_tarking")
time_tarking.onclick = () => {
    TimeTracking()
}
const TimeTracking = () => {
    image.innerHTML = null

    let img = document.createElement("img")
    img.src = "https://tmetric.com/media/1kxfndjp/img-advantages.svg"
    image.append(img)
}

let project_mangment = document.getElementById("project_mangment")
project_mangment.onclick = () => {
    ProjectManagment()
}

const ProjectManagment = () => {
    image.innerHTML = null

    let img = document.createElement("img")
    img.src = "https://tmetric.com/media/epxhwygn/img-advantages-project-management.svg"
    image.append(img)
}
let team_managment = document.getElementById("team_managment")
team_managment.onclick = () => {
    TeamManagment()
}
const TeamManagment = () => {
    image.innerHTML = null

    let img = document.createElement("img")
    img.src = "https://tmetric.com/media/ef3fhhpb/img-advantages-team-management.svg"
    image.append(img)

}
let billing = document.getElementById("billing")
billing.onclick = () => {
    BillingInovation()
}
const BillingInovation = () => {
    image.innerHTML = null

    let img = document.createElement("img")
    img.src = "https://tmetric.com/media/hoqdfeg5/img-advantages-invoice.svg"
    image.append(img)

}
let reporting = document.getElementById("reporting")
reporting.onclick = () => {
    Reporting()
}
const Reporting = () => {
    image.innerHTML = null

    let img = document.createElement("img")
    img.src = "https://tmetric.com/media/dc0o2m4j/img-advantages-reporting.svg"
    image.append(img)

}
let time_off = document.getElementById("time_off")
time_off.onclick = () => {
    TimeOff()
}
const TimeOff = () => {
    image.innerHTML = null

    let img = document.createElement("img")
    img.src = "https://tmetric.com/media/eovjubmf/img-advantages-time-off.svg"
    image.append(img)

}