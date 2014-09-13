(function(){

    var projects = {"projects":
      [
        {
          "title": "Pi Beta Phi",
          "subtitle" : "Website / June 2013-September 2014",
          "info": "The website, blog and communication portal for sisters of MIT's Pi Beta Phi. The blog is maintained in Wordpress, and the rest with HTML/JS with a PHP backend on a MySQL database. The portal is designed to store information for and about sisters.",
          "url": "http://piphi.mit.edu",
          "img": "img/piphi.jpg"
        },
        {
          "title" : "Call to Action",
          "subtitle" : "JavaScript Prototype / January-June 2013",
          "info" : "An interface made in HTML, CSS, and JavaScript for <a class='bold' href='http://calltoaction.mit.edu'>Call To Action</a>, an open-source web platform for creating telephone-based services being developed at <a class='bold' href='http://civic.mit.edu/'>MIT's Center for Civic Media</a>. It was designed as a prototype for a visualization tool that would allow non-programmers to generate the code for a call service.",
          "url" : "https://github.com/rodrigodavies/call2action/",
          "img" : "img/calltoaction.jpg"
          },
        {
          "title" : "StageIt",
          "subtitle" : "Web Application / Spring 2013",
          "info" : "A small application created with HTML, CSS, JavaScript using Parse for <a class='bold' href='http://courses.csail.mit.edu/6.831/'>6.813, the User Interface Design and Implementation</a> class at MIT. In a team of 3 students, we conducted user studies and created prototypes to design the interface. Our application was made to help choreographers place dancers on stage, and more easily create formations - placements of dancers at a particular time step.",
          "url" : "https://github.com/6813-stageIt/stageIt",
          "img" : "img/stageit.jpg"
        },
        {
          "title" : "Hunters and Zombies",
          "subtitle" : "Android Application / Spring 2013",
          "info" : "A geolocation game made for Android phones in <a class='bold' href='http://web.mit.edu/21w.789/www/'>21W.789, Communicating with Mobile Technology</a>. In a team of 4 students, we conducted generative studies to come up with the concept of the game, and then designed the flow of the game using paper prototypes and user testing. The Android game was implemented using Google Maps API, GPS and WiFi location services, and Parse.",
          "url" : "https://github.com/TeamGamey/HuntersAndZombiesDemo",
          "img" : "img/huntersandzombies.png"
        }
      ]
    };
    var proj_template = $('#projects-template').html();
    var proj_html = Mustache.render(proj_template, projects);
    $('#projects').html(proj_html);

    var experiences = {"experiences":
    [
      {
        "title": "SuperUROP Researcher @ Haystack/CSAIL",
        "url": "http://www.eecs.mit.edu/academics-admissions/undergraduate-programs/eecs-super-urop",
        "sub": "2014 Fiscal year"
      },
      {
        "title": "Software Engineer Intern @ Facebook",
        "url": "https://facebook.com",
        "sub": "Summer 2014"
      },
      {
        "title": "TA for User Interface Design class @ MIT",
        "url": "http://stellar.mit.edu/S/course/6/sp14/6.813/index.html",
        "sub": "Spring 2014"
      },
      {
        "title": "Open Source Developer @ Reviewboard.org",
        "url": "https://reviewboard.org",
        "sub": "Spring 2014"
      },
      {
        "title": "Webmaster @ MIT Pi Beta Phi",
        "url": "http://piphi.mit.edu",
        "sub": "Summer 2013 - present"
      },
      {
        "title": "Software Engineer Intern @ KAYAK",
        "url": "https://kayak.com",
        "sub": "Summer 2013; January 2014"
      },
      {
        "title": "Web Developer @ The Center for Civic Media | MIT Media Lab",
        "url": "https://civic.mit.edu/",
        "sub": "Spring 2013"
      },
      {
        "title": "Undergraduate Researcher at MIT QRLG",
        "url": "http://qrlg.blogspot.com/",
        "sub": "Summer 2012"
      },
      {
        "title": "Student Technician and Help Desk Consultant @ MIT Sloan",
        "url": "http://mitsloan.mit.edu/",
        "sub": "Fall 2011-Spring 2012"
      }
      ]
    };
    var xp_template = $('#xp-template').html();
    var xp_html = Mustache.render(xp_template, experiences);
    $('#experience-wrapper').html(xp_html);

    $('.scrollto').click(function(e){
     // prevent default action
     e.preventDefault();
     scrollToElement( $(this).attr('href'), 1000 );
    });

    var scrollToElement = function(el, ms){
      var speed = (ms) ? ms : 600;
      $('html,body').animate({
        scrollTop: $(el).offset().top
      }, speed);
    }
    })();