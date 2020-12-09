


var app = new Vue ({
  el: '#app',
  data:{

    //  HEADER
    superiore:[
      {
        telefono: {
          icona:'fas fa-phone',
          numero:'1.800.567.8910'
        },
        contatti:{
          icona:'fas fa-envelope',
          testo:'Contact us'
        },
        alunni: {
          icona:"fas fa-graduation-cap",
          testo:'Alumni'
        },
        campus:{
          icona:"fas fa-university",
          testo:'Campus'
        },
        facebook:'fab fa-facebook-f',
        twitter:'fab fa-twitter',
        youtube:'fab fa-youtube',
        instagram:'fab fa-instagram'
      }
    ],
    inferiore:[
      {
        logo:'img/university_logo.png',
        home: 'HOME',
        about: 'ABOUT',
        corsi: 'COURSES',
        new:'NEW',
        corsi: 'EVENTS',
        strutture: 'FACILITIES',
        novita: 'NEWS',
        ammissione: 'ADMISSION',
        apply:'APPLY'
      }
    ],

    //  FOOTER
    colonne: [
      {
        titolo1:'AVADA UNIVERSITY',
        indirizzo:{
          icona:'fas fa-home',
          testo:'Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA'
        },
        numero:{
          icona:'fas fa-phone',
          testo:'1.800.458.556'
        },
        email:{
          icona:'fas fa-envelope',
          testo:'info@yourdomail.com',
          orari:{
            icona:"far fa-clock",
            testo:'Monday-Friday: 8:00 AM -10:00 PM'
          }
        }
      },
      {
        titolo2:'AVADA UNIVERSITY'
      },
      {
        titolo3:'AVADA UNIVERSITY'
      },
      {
        titolo4:'AVADA UNIVERSITY'
      },
      {
        titolo5:'AVADA UNIVERSITY'
      }
    ]
  }
})
