import React, { Component } from 'react';
import Projects from './projects';
import { elastic as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'


class ProjectsContainer extends Component {
  constructor(props){
    super(props)
    this.handleProjChange = this.handleProjChange.bind(this)
  }
  state= {
    right: true,
    currentProjColor: 'rgb(24, 110, 89)',
    projectNumber: 0,
    projects: [

      {projectBackground: `linear-gradient(0.65turn, #D1BE92, #FFAF00)`,
        projectHeader: 'SD Beer',
        projectSubheader: 'San Diego Brewer’s Guild Cross-Platform Mobile App',
        projectType: 'By Paradeigm Interactive',
        websiteUrl: "https://www.sdbeer.com/app",
        projectDescription: "The SD Beer App is an interactive app featuring more than 130 of San Diego’s independent breweries and all the ‘Capital of Craft’ has to offer. I worked in a team of developers, playing a role in the application's design direction and developing UI solutions for the mobile user. I programtically composed a variety of  rich functionality to the mobile UI.",
        projectPreview: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/Restaraunt+reviews.png',
        projectPrimary: '#07505C',
        projectSecondary: '#0EB6C4',
        visitProject: 'VIEW ON APP STORE',
        projectLogo: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/SDBeerlogo.png',
        imageRows: ["https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/sdbeer+App+Mockup-min.png", "https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/Agile-min.png", "https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/2way+data.png", "https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/sdbeerAsync.png" ],
        rowHeader: ['Application Properties', 'Process', 'Two-Way Data Binding', 'User Considerations'],
        rowSubheader: ["These are some of the features I helped develop with the Paradeigm Dev team:"],
        rowDescriptionsList0: ["Festival Beer list:   View the participating breweries & beer list for San Diego Brewer's Guild events", "Brewery Details (Single brewery info):   View profiles and details on San Diego craft breweries", "Allied List:   See profiles for all SDBG allied retailers and affiliate members", "Event Feed:   View an updated list of beer releases, craft beer trivia, live music events and more", "About SDBG:   Learn about America’s finest craft brewer's guild"],
        rowDescriptionsList1: "",
        rowDescriptionsList2: "",
        rowDescriptionsList3: "",
        rowDescriptionsRegular0: "",
        rowDescriptionsRegular1: ["Starting with a list of feature requests dictated by the company, our development team consulted to iterate with these list of needs. This led to pseudo code sessions where we came up with efficient solutions to these problems. After elaborating and discussing which methods are most approachable, we began the next phase of development. \n \n In our process we would consult with our client by producing tangible product prototypes for review and feedback. Our team was focused on agile development, we prioritized getting something basic and functional for the client, and then returned to expanding and evolving the apps feature functionality." ],
        rowDescriptionsRegular2: ["When properties in the model get updated, so does the UI. In this case, the affiliates button filtering would communicate with its parent component to filter the list of items and then the component would listen for the change to change the color of the button."],
        rowDescriptionsRegular3: ["One of the user challenges in one of the site's features was within the brewery location maps component. The map begins by fetching the data of the first ten nearest geospatial brewery locations and then adds additional locations after the first ten load in to improve user load times when accessing the brewery map. \n \n This is important because loading in all locations at once increases the map’s rendering time and prevent  users from accessing the app altogether, which is far worse than the given alternative."],
        videoUrl: "https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/sdbeerGif.mp4",
        contentAddition: ["","","https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/HOCcarbon.gif",""]
      },

      {projectBackground: `linear-gradient(0.25turn, #186E59, #1F8A70)`,
        projectHeader: 'Nearby Locations App',
        projectSubheader: 'React Google Maps Application',
        projectType: 'Personal Project',
        websiteUrl: 'https://locations-nearby.herokuapp.com',
        projectDescription: 'This single-page application uses React-google-maps and recompose library to render a map onscreen of your current location along with the retrieval of 8 nearby locations in the form of map markers. These map markers will display information of these nearby places to your current location. This project helped me learn about RESTful APIs, React component composition, as well as React state propagation.',
        projectPreview: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/locationsmapOPTIMIZED.png',
        projectPrimary: '#FD7400',
        projectSecondary: 'white',
        visitProject: 'VISIT APP',
        projectLogo: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/P2gOsHx.png',
        imageRows: ["https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/locations-nearby.gif","https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/HOc.png", "https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/Symbol+1+%E2%80%93+1.png", "https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/foursquare+request.png" ],
        rowHeader: ['Application Properties', 'Higher Order Components', 'Challenges', 'Solutions'],
        rowSubheader: ["These are some of the features i developed:", "A higher-order component (HOC) is an advanced technique in React for reusing component logic."],
        rowDescriptionsList0: ["Nearby Locations: The app takes your current location and retrieves 8 nearby places to your Lat/Lng coordinates", "FourSquare API: The map uses Foursquare's Places API to retrieve venue locations and then find further information on each location", "Recompose: Recompose is a React utility belt for function components and higher-order components.", "Venue Location List:   View an updated list of locations near you and filter locations and their corresponding marker with the search function"],
        rowDescriptionsList1: "",
        rowDescriptionsList2: ["Sometimes ill be halfway through development when an issue arises. In this case, my issue was that i needed each name in the side panel window when clicked, to open its corresponding map marker's info window.", "The issue was that i was mapping out the array of venue information twice in my app; one for the map markers and one for the side panel, both were in seperate child components.", "Sometimes it can be useful to map out your component heirarchy to solve these kinds of issues: I needed to communicate info from a sidepane name to a map marker to tell its  infowindow to open, i needed to send info up to a parent and back down to another child."],
        rowDescriptionsList3: ["A major takeaway was improving my methods of overviewing documentation. The foursquare API was a bit difficult for me to understand in how to format my fetch request, but upon further research, I figured out how to give my fetch calls a more readable and organized format.", "I Encoded the URI using encodeURI() to convert all characters that are not permissible in a URL and turn them into allowable units; those query strings are required by the places API parameters."],
        rowDescriptionsRegular0: "",
        rowDescriptionsRegular1: ["Concretely, a higher-order component is a function that takes a component and returns a new component. Whereas a component transforms props into UI, a higher-order component transforms a component into another component. The HOC isn’t concerned with how or why the data is used, and the wrapped component isn’t concerned with where the data came from."],
        rowDescriptionsRegular2: "",
        rowDescriptionsRegular3: "",
        contentAddition: ["", "https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/HOCcarbon.png", "", ""]
      },

      {projectBackground: `linear-gradient(0.25turn, #300094, #17BEAC)`,
        projectHeader: 'GANDER',
        projectSubheader: 'Social Media Approval System',
        projectType: 'Paradeigm Interactive',
        websiteUrl: 'http://social.paradeigm.com/',
        projectDescription: 'GANDER (formally known as Paradeigm Social) is a web application designed to improve social content approvals for social media managers. This feature-rich platform provided me with opportunities and tools to learn how to develop scalable web apps. I assisted in the production of many of the platform’s utilities, the features i helped implement gave me insights into how to better optimize my code and use redux to manage react state on an application-wide scale.',
        projectPreview: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/gander_mock.png',
        projectPrimary: '#FFDBA0',
        projectSecondary: 'white',
        visitProject: 'VISIT WEBSITE',
        projectLogo: 'https://www.paradeigm.com/wp-content/uploads/2016/09/logo-p-white.png',
        imageRows: ["https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/gandermocOPTIMIZEDk.png", "https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/devEnvironment.png", ""],
        rowHeader: ['Application Properties', 'Environment', 'User Considerations'],
        rowSubheader: ["These are some of the features I helped develop with the Paradeigm Dev team:"],
        rowDescriptionsList0: ["1. Media Management: Interactive and Interface design and development of Gander interface, implemented social media management", "2. Instagram profile/post mockup generators: Allows a user to drag and drop images into the form field and fill out the mockup inputs to emulate the display of an instagram post or profile.", "3. Create New Client/Post: Modal Pop out windows for crearting new client profiles for media managers and creating new posts"],
        rowDescriptionsList1: "",
        rowDescriptionsList2: "",
        rowDescriptionsList3: "",
        rowDescriptionsRegular0: "",
        rowDescriptionsRegular1: ["This integrated development env ironment is one in which many processes and tools were coordinated to provide my team and I an orderly interface to build out this full feature site. This tech stack is what made our development  process possible, from writing to testing to packaging our code for use."],
        rowDescriptionsRegular2: ["This mockup generator was a small feature to the site utilizing a drag and drop addition for the user. I used a dropzone react library and added an animation on the Callback prop \"onDrop Accepted\" and \"onDropRejected\" as a user indication of their picture's drop status. "],
        rowDescriptionsRegular3: ""
      },

      {projectBackground: `linear-gradient(0.25turn, #4F4CB1, #300094)`,
        projectHeader: 'Book Tracking App',
        projectSubheader: 'Online Book Finder and Categorizer',
        projectType: 'Person Project',
        websiteUrl: 'https://book-categorizer.herokuapp.com',
        projectDescription: 'In this Book tracking mini app, users select and categorize books they have read, are currently reading, or want to read. The project emphasized using React to build the application and provides an API server and client library persists information as the application is interacted with.',
        projectPreview: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/Book+track+OPTIMIZED.png',
        projectPrimary: 'Lavender',
        projectSecondary: 'white',
        visitProject: 'VISIT APP',
        projectLogo: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/puuoQfT.png',
        imageRows: [null, null, "https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/booksAPI.png"],
        rowHeader: ['Application Properties', 'Challenges', 'User Considerations', 'Value Proposition'],
        rowSubheader: ["Features of my app include:", "User Centered development considerations were as follows:"],
        rowDescriptionsList0: ["Categorizing: Add Books from an online repository to your categories list and save them for later viewing, pushing changes to backend store with tokenizer.","React Routing:   Small List of reviews of restaraunts within Manhattan, New York, retrieving data of restaraunts, neighborhood, and google map markers with xhr api requests.", "Book Repository: Retrieves data including restaraunt address, hours, cusinie type, pictures, and review.", "Live Search Filter: Initializes a google map and places restaraunt map markers onto the map."],
        rowDescriptionsList1: ["Ensuring that the search box updates its books results as the user types in each letter", "Simple User interface to navigate the book tracking environment by keeping a maximum of three books per row on large screens", "Search button becomes Home button instead of using a back button, the user can navigate to the search page by using the /search url extension", "The user’s search input is cached when returning to home page in case they want to continue their search where they left off" ],
        rowDescriptionsList2: "",
        rowDescriptionsList3: ["A major takeaway was improving my methods of overviewing documentation. The foursquare API was a bit difficult for me to understand in how to format my fetch request, but upon further research, I figured out how to give my fetch calls a more readable and organized format.", "I Encoded the URI using encodeURI() to convert all characters that are not permissible in a URL and turn them into allowable units; those query strings are required by the places API parameters."],
        rowDescriptionsRegular0: "",
        rowDescriptionsRegular1: "",
        rowDescriptionsRegular2: ["Using Regular Expressions to detect pattern matches on every keypress of book searching. Every keypress in the search input triggers a fetch request to the book storage, the reg exp needed to update accordingly. Taking the searched results and pushing an update of my local book shelves upon categorizing newly discovered books."],
        rowDescriptionsRegular3: "",
        contentAddition: ["",["https://i.imgur.com/SguSJkm.png","https://i.imgur.com/0t2t0DS.png", "https://i.imgur.com/9iFVIa9.png"],"",""]
      },

      {projectBackground: `#252831`,
        projectHeader: 'Restaraunt Reviews App',
        projectSubheader: 'Native Javascript Web Application',
        projectType: 'Personal Project',
        websiteUrl: '',
        projectDescription: 'For this Restaurant Reviews projects, I incrementally convert a static webpage to a mobile-ready web application. I took a static design that lacks accessibility and, after adding database helper functions and fetching data, I converted the design to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for my users.',
        projectPreview: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/Restaraunt+reviews-OPTIMIZED.png',
        projectPrimary: '#FFA500',
        projectSecondary: 'white',
        visitProject: '',
        projectLogo: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/GjHyptq.png',
        imageRows: [`https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/restaurantReviews.gif`,"https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/serviceWorker.png", "https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/XHR+Request.png"],
        rowHeader: ['Application Properties', 'Offline First', 'Solutions'],
        rowSubheader: ["Features of my app include:"],
        rowDescriptionsList0: ["Reviews: Small List of reviews of restaraunts within Manhattan, New York, retrieving data of restaraunts, neighborhood, and google map markers with xhr api requests.", "Restaraunt Information: Retrieves data including restaraunt address, hours, cusinie type, pictures, and review.", "Map: Initializes a google map and places restaraunt map markers onto the map.", "Service Workers: This type of web worker intercepts network requests as the bowsre makes them, caching data and using later to give the user instant offline data in the event of bad network connection preventing a refresh, like a twitter feed."],
        rowDescriptionsList1: ["It's a pattern you have seen on multiple social networking sites, you load your news feed, and returned to you is a blank white screen. The problem isnt that your offline, the problem lies in that one bar connection, that Lie-Fi.  Connection Limbo. This is why offline first is a great experience technique to offer the user, this offline first technique i use will register a service worker to get data on your screen using stuff already cached on your device.", "A list of local resources we always want to be cached.", "The install handler takes care of precaching the resources we always need.", "The activate handler takes care of cleaning up old caches.", "The fetch handler serves responses for same-origin resources from a cache.", "If no response is found, it populates the runtime cache with the response from the network before returning it to the page."],
        rowDescriptionsList2: "",
        rowDescriptionsList3: "",
        rowDescriptionsRegular0: "",
        rowDescriptionsRegular1: "",
        rowDescriptionsRegular2: ["JavaScript frameworks and Single Page Apps are the way to build today, but its important to understand where it all came from. In 2005, Jesse James Garrett coined the term AJAX to mean “Asynchronous Javascript and XML”. This is essentially the technique of using XMLHTTPRequest to fetch data and then modify the current page. \n In this application, i apply these fundamentals of fetching data for things such as neighborhoods, restaurants, and cuisines with proper error handling." ],
        rowDescriptionsRegular3: ""
      },


      {projectBackground: `linear-gradient(0.25turn, #015584, #09ABAE)`,
        projectHeader: 'NomNomBento',
        projectSubheader: 'Local Asian Food Business Website',
        projectType: 'Paradeigm Interactive',
        websiteUrl: 'https://www.nomnombento.com/',
        projectDescription: "The purpose of this project was to update the website for a Pacific Beach, California, Asian cuisine establishment named NomNomBento.The client wanted a quick, responsive and interactive website which spoke to the company brand to modern web standards. Our team designed and developed a high energy and engaging experience as a result. The website provides a fluid customer experience, providing various different menu item specifications and the ability to build your own dish.",
        projectPreview: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/nomnomOPTIMIZED.png',
        projectPrimary: 'white',
        projectSecondary: '#F0AC61',
        visitProject: 'VISIT WEBSITE',
        projectLogo: 'https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/nomnom_logo.png',
        imageRows: ["https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/NomnomMockup-min.png", "https://s3-us-west-1.amazonaws.com/nomnombento/temporaryAidan/nomnombyob.png"],
        rowHeader: ['Application Properties', 'Process', 'User Considerations', 'Challenges'],
        rowSubheader: ["The following features were requested by the client:"],
        rowDescriptionsList0: ['Build your own Bento box item selection menu', 'Menu items with ingredients listings for each dish', 'Company instagram feeds onto about page,Location page provides map with retail store location'],
        rowDescriptionsList1: "",
        rowDescriptionsList2: "",
        rowDescriptionsList3: ["The Build your Own Bento ordering application required adding a list of ingredients to a Bento Selection list, the next and back buttons needed to function correctly and not appear under the first and last ordering step.", "Animation features using animate.css library had issues: Animations using the animate.css library which used a transition on page load in addition to a hover animation would replay their on-page-load animation when the mouse would leave the hover area of the element, requiring a workaround with a css transform shorthand", "The ingredients list under each menu item header needed to use responsive CSS masonry and use a different layout for mobile."],
        rowDescriptionsRegular0: "",
        rowDescriptionsRegular1: ['The Website branding and animation features needed to be interesting but also simple and lend to the user experience in accessible interfacing.Single Page web applications are the future of the web. The instantaneous load-in on the click of each and every page of the website, rather then having to wait for the server to communicate a new request, is what can make a website really stand out by being a vital upgrade to the user experience.'],
        rowDescriptionsRegular2: ["React has popularized functional programming in JavaScript. This has led to giant frameworks adopting the Component-based UI pattern that React uses. This project uses declarative programming approaches so that logical computation is executed without full expression of control flow."],
        rowDescriptionsRegular3: "",
        contentAddition: ["", "", "", ["https://i.imgur.com/5YllJVQ.jpg", "https://i.imgur.com/G0HFEVM.png", "https://i.imgur.com/94s2B3e.jpg"]]
      }]
    }

    handleProjChange = (iterate, direction, transitionColor) => (e) => {
      if (this.state.projectNumber === 5 && direction === true) {
        this.setState({
          projectNumber: 0,
          right: true
        })
      } else if (this.state.projectNumber === 0 && direction === false) {
        this.setState({
          projectNumber: 5,
          right: false
        })
      } else {
        this.setState({
          projectNumber: this.state.projectNumber + iterate,
          right: direction ? true : false
        })
      }
      this.setState({currentProjColor: this.state.projects[transitionColor].projectPrimary})
    }

    render() {
      return (
        <div>
          <div id="outer-container">
            <Menu  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
              <Link to="/" id="home" className="menu-item">Home</Link>
              <Link onClick={() => {
                this.setState({
                  projectNumber: 0
                })
              }
            } to="/projects" id="projects" className="menu-item">Projects</Link>
            <Link to="/about" id="about" className="menu-item">About</Link>
            <Link to="/blog" id="blog" className="menu-item">Blog</Link>
            <Link to="/contact" id="contact" className="menu-item">Contact</Link>
          </Menu>


          <main id="page-wrap" style={{zIndex: -1, position: 'absolute',  height:'300vh', backgroundColor: this.state.currentProjColor }}>
            {this.state.projects
              .filter(p => this.state.projects
                .indexOf(p) === this.state.projectNumber)
                .map((proj, i) => {
                  return (
                    <section
                      key={proj.projectHeader}
                      style={{background: proj.projectBackground, position:'relative', animation: `slideIn${this.state.right ? 'Right' : 'Left'} ease-out .5s`}}>
                      <div id="projNav">
                        <svg className="navItem pulsate"
                          onClick={this.handleProjChange(-1,false, this.state.projects.indexOf(proj))}
                          height="36" width="36">
                          <polygon points="0 17 17.15 0 18.63 1.41 2.38 17.71 18.69 34 17.14 35.41 0 18.41 0 17"
                            fill={proj.projectSecondary} stroke={proj.projectSecondary} style={{strokeWidth: '3'}}
                          />
                        </svg>
                        <div id="selectedNav" style={{borderRadius: '50px', backgroundImage: `url(${proj.projectLogo})`}} />
                        <svg className="navItem pulsate" onClick={this.handleProjChange(1,true, this.state.projects.indexOf(proj))} height="36" width="36">
                          <polygon points="27.051,17 9.905,0 8.417,1.414 24.674,17.707 8.363,34 9.914,35.414 27.051,18.414"
                            fill={proj.projectSecondary} stroke={proj.projectSecondary} style={{strokeWidth: '3'}}
                          />

                        </svg>
                      </div>
                      <Projects
                        p={proj}
                        i={i}
                      />
                    </section>
                  )}
                )}
              </main>
            </div>
          </div>
        )
      }
    }

    export default ProjectsContainer
