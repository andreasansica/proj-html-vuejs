
//  HEADER

var app = new Vue ({
  el: '#app',
  data:{
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
    ]
  }
})
