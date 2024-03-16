//this instance of this object and should contain the following properties: 
class VenteTicket {
  constructor() {
      this.personne = 1;
      this.nomFilm = "jj eee";
      this.prix = 42;
      this.numeroSalle = '8';
  }
}

function afficherTicket(ticket) {
  console.log(ticket.nomFilm);
  console.log(ticket.prix);
  console.log(ticket.numeroSalle);
  if (ticket.personne === 2) {
      ticket.prix += 1;
      console.log(ticket.prix);
      console.log(afficherTicket(ticket.personne * 2));
  }
}

const monTicket = new VenteTicket();
afficherTicket(monTicket);

