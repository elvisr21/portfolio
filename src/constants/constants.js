import {DiReact } from 'react-icons/di';
import {FiDatabase} from 'react-icons/fi';
import {FaCog} from 'react-icons/fa';
import {SiDatacamp} from 'react-icons/si'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillCloud, AiFillApi } from 'react-icons/ai';

export const projects = [
  {
    title:"Content Pipeline",
    description:"Help SoloSegment with building a content pipeline that will take web page content from clients' websites, analyze those web pages to discover metadata, and prepare it to be indexed with ElasticSearch with Kibana visualization for deeper insights",
    image:"/images/no-image-available.jpeg",
    tags:["Node","ElasticSearch","Google Cloud","Kibana","Apache Airflow"],
    source:"",
    visit:""
  },
  {
    title:"ChefMaster",
    description:"A community recipe book app that allows users to  add, edit and comment on recipes",
    image:"/images/no-image-available.jpeg",
    tags:["React","Flask","Postgres","Heroku","Python"],
    source:"",
    visit:"https://github.com/elvisr21/CS490-Project3",
  },
  {
    title: 'Tic-Tac-Toe',
    description: "A React web application that uses sockets to allow users to play tic-tac-toe",
    image: '/images/no-image-available.jpeg',
    tags: ['React', 'Flask', 'SocketIO', 'Postgres'],
    source: '',
    visit: 'https://github.com/NJIT-CS490-SP21/project2_er236',
  },
  {
    title: 'Spotify Song Reviewer',
    description:"A React web application that uses Genius and Spotify API, to search for songs and show user song a preview",
    image: '/images/no-image-available.jpeg',
    tags: ['React', 'Flask',"APIs"],
    source: '',
    visit: 'https://github.com/NJIT-CS490-SP21/project1-er236',
  },
  {
    title: 'ESport Lookup',
    description: "A web application that lets users look up ESport teams, and show them team and players stats",
    image: '/images/no-image-available.jpeg',
    tags: ['PHP', 'RabbitMQ',"MYSQL","APIs"],
    source: '',
    visit: 'https://github.com/elvisr21/IT490-450',
  }
];

export const TimeLineData = [
  { year: 2021, text: "Graduated from NJIT with a  Bachelor's Degree in Computer Science and Information Technology" },
];
export const Accomplishmentsdata = [
  /*{ number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }*/
];
export const Technologiesdata=[
  {title:"Frontend",icon:<DiReact size="3rem"/>,text:"Experience with HTML/CSS and JavaScript"},
  {title:"Backend",icon:<FaCog size="3rem"/>,text:"Experience with Node.js and Python"},
  {title:"Database",icon:<FiDatabase size="3rem"/>,text:"Experience with MYSQL, Postgres, Elasticsearch, Firestore"},
  {title:"Cloud", icon:<AiFillCloud size="3rem"/>,text:"Experience with Google Cloud, Heroku and AWS"},
  {title: "Frameworks", icon:<AiFillApi size="3rem"/>,text:"Experience in Flask and React.js"},
  {title: "Data Science", icon:<SiDatacamp size="3rem"/>,text:"Experience in using Python to visualize data and build machine learning models" }
];
export const Socialdata=[
  {link:"https://github.com/elvisr21",icon:<AiFillGithub size="3rem"/>},
  {link:"https://linkedin.com/in/elvisr21",icon:<AiFillLinkedin size="3rem"/>},
  {link:"",icon:<AiFillInstagram size="3rem"/>}

];
export const websiteURL = "";