const seats = document.querySelectorAll('.seat')
let count =0
for(const seat of seats){
    seat.addEventListener('click',function(){
        const currentSeat = getTextElementValueById('current-seat')
        const newSeat = currentSeat+1
        if(newSeat>4){
            seat.removeEventListener()
        }
        seat.style.backgroundColor='green'
        const seatNumber = seat.innerText
        const className = 'economy'
        const perTicketPrice = 550
        const tBody= document.getElementById('tbody')
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        td1.innerText = seatNumber
        const td2 = document.createElement('td')
        td2.innerText = className
        const td3 = document.createElement('td')
        td3.innerText = perTicketPrice
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tBody.appendChild(tr)
        
        const total = newSeat*perTicketPrice
        const totalCost = document.getElementById('total-cost')
        totalCost.innerText=total


        const grandTotal = document.getElementById('grand-total')
        grandTotal.innerText=total
        
        const availableSeat = getTextElementValueById('available-seat')
        const remainingSeat = availableSeat-1
        setTextElementValueById('available-seat',remainingSeat)
        setTextElementValueById('current-seat',newSeat)
    })
}

const element = document.getElementById("ph-paribahan");
function scrollToTop() {
  element.scrollIntoView(true);
}
function setInnerText(elementId, value){
    document.getElementById(elementId).innerText=value
}
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId)
    const elementText = element.innerText
    const elementValue = parseInt(elementText)
    return elementValue;
}
function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value
}
