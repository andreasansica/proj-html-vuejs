


var app = new Vue ({
  el: '#app',
  data:{

    //  HEADER
    //  DIVIDO L'HEADER IN 2 GRUPPI

    // GRUPPO SUPERIORE
    superiore:[
      {
        telefono: {
          icona:'fas fa-phone',
          testo:'1.800.567.8910'
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

    //  GRUPPO INFERIORE
    inferiore:[
      {
        logo:'img/university_logo.png',
        home: 'HOME',
        about: 'ABOUT',
        corsi: 'COURSES',
        new:'NEW',
        eventi: 'EVENTS',
        strutture: 'FACILITIES',
        novita: 'NEWS',
        ammissione: 'ADMISSION',
        apply:'APPLY'
      }

    ],



    //  FOOTER
    // DIVIDO IL FOOTER IN 8


    footer1: [
      {
        testo:
          {
            titolo:  'AVADA UNIVERSITY' ,
            indirizzo:  'Residential Location 9521 Broadsberry Avenue       Paddington RC7 9ZA' ,
            telefono:  '1.800.458.556',
            mail:  'info@yourdomail.com',
            orari:  'Monday-Friday: 8:00 AM -10:00 PM'
          },
        icona:
          {
            indirizzo:'fas fa-home',
            telefono:'fas fa-phone',
            mail:'fas fa-envelope',
            orari:"far fa-clock"

          }
      }
    ],


      footer2:[
        {
          testo:
            {
              titolo:'RECENT POSTS',
              ask1:' > What do successful grads think you should study?',
              data1:'March 16,2016',
              ask2:' > Former student discussed success in the fashion industry',
              data2:'March 16, 2016',
              ask3:' > How do you best prepare for university?',
              data3:'March 17, 2016'
            }
        },
      ],

      footer3:[
        {
          testo:
            {
              titolo:'COURSES',
              link1:'Arts e umanities',
              link2:'Business e managment',
              link3:'Engineering & technology',
              link4:'Life science & Medicine',
              link5:'Natural science'
            }
        },
      ],
      footer4:[
        {
          testo:
            {
              titolo:'ADMISSION',
              link1:'Eligibility',
              link2:'Application',
              link3:'Review Process',
              link4:'How to apply'
            }
        },
      ],

      footer5:[
        {
          testo:
            {
              titolo:'RESOURCES',
              link1:'Campus Directory',
              link2:'Academic calendary',
              link3:'Sport Clubs',
              link4:'Graduate programs',
              link5:'Faculty e staff'
            }
        },
      ],


      footer6:[
        {
          testo:
            {
              titolo:'QUICKLINES',
              link1:'University Library',
              link2:'Campus Servicy',
              link3:'Careers'
            }
        }
      ],


      footer7:[
        {
          testo:
            {
              titolo:'UPCOMING EVENT',
              link1:'Business seminar',
              data:'July, 1,2019 @ 8.00 am - July 1, 2019 @ 5.00 pm',
              stato:'United States'
            }
        },
      ],

      footer8:[
        {
          testo:
            {
              titolo:'Politics seminar',
              data:'November 6, 2019 @8:00 am - November 6, 2021 @ 5:00 pm',
              stato:'United Kingdom',
              link:'View More...'
            }
        }
      ]

  }
})
