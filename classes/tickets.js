function ticketDatabse (tickets, orrder) {
    class Ticket {
        constructor (name, price, status) {
            this.destination = name
            this.price = Number(price)
            this.status = status
        }
    }
    const allTickeys = []

    for (let ticket of tickets) {
        const  [ name, proce,  statuss ] = ticket.split('|')
        allTickeys.push(new Ticket(name, proce, statuss))
    }
    
    allTickeys.sort((a,b) => {
        if (orrder === 'status') {
            return a.status.localeCompare(b.status)
        } else if (orrder === 'price') {
            return a.price - b.price
        } else {
            return a.destination.localeCompare(b.destination)
        }
    })

    
    return allTickeys
}


console.log(ticketDatabse (['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination'))