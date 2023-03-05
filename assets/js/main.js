


$('.slick-cards').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});


const navi = document.querySelector('#NavBarr')

function stickynavbarr() {
  if (window.scrollY >= 100) {    
    navi.classList.add('stickyy');
  } else {
    navi.classList.remove('stickyy');    
  }
}


//scroll navbar
const navbar = document.querySelector('#NavBar');
function stickynavbar() {
  if (window.scrollY >= 100) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}




window.addEventListener('scroll', stickynavbar);
$(".mobile-header").hide();

$(".exit-icon").click(function(){
  $(".mobile-header").toggle();
})


// document.addEventListener('DOMContentLoaded', function() {
//   var calendarEl = document.getElementById('calendar');
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: 'dayGridMonth',
//     height : '600px',
//     dateClick: function() {
//       alert('a day has been clicked!');
//     },
//     events: [

//       {
//         id: 'a',
//         title: 'my event',
//         start: '2023-03-01',
//         className : 'eDetails',
//         color: 'yellow',    // an option!
//         textColor: 'black',  // an option!
//         url: '/myfeed.php',
//         method: 'POST',
//         extraParams: {
//           custom_param1: 'something',
         
//           custom_param2: 'somethingelse'
//         },
//         description : 'dfdfdf fdfdfd fdfd',
//         hover : 'dfdfdf fdfdfd fdfd',
        
//       }
//     ],
    
  
    
//   });
//   calendar.render();
// });



var calender_data = [
  {
    id: 'a',
    title: 'my event',
    start: '2023-03-01',
    className : 'eDetails',
    color: 'yellow',    // an option!
    textColor: 'black',  // an option!
    url: '/myfeed.php',
    description: '<span>kkksdf fskdfnsd dsfkdsfk</span>',
    hover : 'mmmmm',
    
  }
];
var KTCalendarBasic = function() {

    return {
        //main function to initiate the module
        init: function() {
           
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
                plugins: [ 'bootstrap', 'interaction', 'dayGrid', 'timeGrid', 'list' ],
                themeSystem: 'bootstrap',
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },

                height: 800,
                contentHeight: 780,
                aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio

                nowIndicator: true,

                views: {
                    dayGridMonth: { buttonText: 'month' },
                    timeGridWeek: { buttonText: 'week' },
                    timeGridDay: { buttonText: 'day' }
                },

                defaultView: 'dayGridMonth',
                defaultDate: "2023-03-02",

                editable: false,
                eventLimit: true, // allow "more" link when too many events
                navLinks: true,
                events: calender_data,

                eventRender: function(info) {
                    var element = $(info.el);
                    element.find('.fc-title').prop('data-info','kimo Kimo');
                    
                }
            });

            calendar.render();
        }
    };
}();

jQuery(document).ready(function() {
    KTCalendarBasic.init();
});























