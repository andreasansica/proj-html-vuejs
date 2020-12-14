


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
        testo:[
            'AVADA UNIVERSITY' ,
            'Residential Location 9521 Broadsberry Avenue       Paddington RC7 9ZA' ,
            '1.800.458.556',
            'info@yourdomail.com',
            'Monday-Friday: 8:00 AM -10:00 PM'
              ],
        icona:[
            'fas fa-home',
            'fas fa-phone',
            'fas fa-envelope',
            "far fa-clock"
         ]
      }
    ],


      footer2:[
        {
          testo:[
              'RECENT POSTS',
              ' > What do successful grads think you should study?',
              'March 16,2016',
              ' > Former student discussed success in the fashion industry',
              'March 16, 2016',
              ' > How do you best prepare for university?',
              'March 17, 2016'
                ]
        },
      ],

      footer3:[
        {
          testo:[
              'COURSES',
              'Arts e umanities',
              'Business e managment',
              'Engineering & technology',
              'Life science & Medicine',
              'Natural science'
                ]
        },
      ],
      footer4:[
        {
          testo:[
              'ADMISSION',
              'Eligibility',
              'Application',
              'Review Process',
              'How to apply'
                ]
        },
      ],

      footer5:[
        {
          testo:[
              'RESOURCES',
              'Campus Directory',
              'Academic calendary',
              'Sport Clubs',
              'Graduate programs',
              'Faculty e staff'
                ]
        },
      ],


      footer6:[
        {
          testo:[
              'QUICKLINES',
              'University Library',
              'Campus Servicy',
              'Careers'
                ]
        }
      ],


      footer7:[
        {
          testo:[
              'UPCOMING EVENT',
              'Business seminar',
              'July, 1,2019 @ 8.00 am - July 1, 2019 @ 5.00 pm',
              'United States'
              ]
        },
      ],

      footer8:[
        {
          testo:[
              'Politics seminar',
              'November 6, 2019 @8:00 am - November 6, 2021 @ 5:00 pm',
              'United Kingdom',
              'View More...'
                ]
        }
      ]

  }
})
