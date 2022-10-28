/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sydney Bandi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sydney Bandi's Portfolio",
    type: "website",
    url: "http://sydneybandi.com/",
  },
};

//Home Page
const greeting = {
  title: "Sydney Bandi",
  logo_name: "SydneyBandi",
  nickname: "Data Analyst | Data Scientist",
  subTitle:
    "Motivate, teamwork-oriented, and responsible Data Analyst with significant experience in increasing comprehension of reports and presentations by the average professional. Highly skilled, data-driven and possessing a professional certification in Data and Product analytics .",
  resumeLink:
    "https://bit.ly/3gRTr3Q",
  portfolio_repository: "https://github.com/sydneybandi",
  githubProfile: "https://github.com/sydneybandi",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/sydneybandi",
  // linkedin: "",
  // gmail: "bandisydney@gmail.com",
  // twitter: "https://twitter.com/bandi_sydney"

  {
    name: "Github",
    link: "https://github.com/sydneybandi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:bandisydney@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/bandi_sydney",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  }
];

const skills = {
  data: [
    {
      title: "Data Analytics / Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Data Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining Web Applications on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on web apps",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Django",
        "⚡ Building interactive web appications using R-Shiny",
        "⚡ Creating application backend in Node & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Digital Marketing and SEO Optimisation",
      fileName: "DesignImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/sydneybandi",
    },

  ],
  
};

const degrees = {
  degrees: [
    {
      title: "Multimedia University of Kenya",
      subtitle: "BSc. in Information Technology",
      logo_path: "MMU_logo.png",
      alt_name: "MMU",
      duration: "2018 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development."
      ],
      website_link: "https://www.mmu.ac.ke/",
    },

    {
      title: "Africa Institute of Research and Development College",
      subtitle: "Certificate in Computer Programming",
      logo_path: "nptel_logo.png",
      alt_name: "AIRADS",
      duration: "2017",
      descriptions: [
        "Learned how to:",
        "⚡ Use foundational programming and software development knowledge and skills to develop efficient software applications",
        "⚡ Develop collaborative skills to create solutions to problems within an agile development environment",
        "⚡ Explore various programming and software development concepts and principles such as data structures, inheritance, polymorphism, abstraction and encapsulation",
        "⚡ Apply object-oriented programming concepts and principles throughout the various phases of the Software Development Lifecycle"
      ],
      website_link: "https://airads.ac.ke/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Data Analytics - Specialty",
      subtitle: "- AWS",
      logo_path: "stanford_logo.png",
      certificate_link:
        "",
      alt_name: "AWS",
      color_code: "#8C151599",
    },
    {
      title: "Product Analytics",
      subtitle: "- product school",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "product",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "",
      alt_name: "IBM",
      color_code: "#1F70C199",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with a few evolving startups as Data Analyst and Engineer, Digital Marketer and Search Engine Marketer. I have also worked with some well established companies mostly as a Data Scientist.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Data Scientist",
          company: "mTek-Services",
          company_url: "https://mtek-services.com/",
          logo_path: "ibm_logo.png",
          duration: "Feb 2021 - April 2022",
          location: "Nairobi,Kenya",
          description:[
            "1) Contributed to the intergration of hubspot CRM for sales force automation.This contributed to the increased the number of sales by 20%      (2)Introduced Mixpanel for product analytics that enabled the company to see where there product works well and where it doesn't (3)Introduced and Integrated data studio to Automate and schedule web analytics reports that was consumed by team members and the management."
          ]
            ,
          color: "#0879bf",
        },
        {
          title: "Data Analyst",
          company: "DataSteerz",
          company_url: "https://www.datasteerz.com/",
          logo_path: "gcp_logo.png",
          duration: "June 2020 - Dec 2020",
          location: "Eldoret,Kenya",
          description:
            "Through lexical analysis and syntactic analysis (parsing), I transformed unstructured data into structured data that is easier to read, understand and use.This enabled the company to scrape data (jobs) from the internet and provide it to clients",
          color: "#9b1578",
        },

      ],
    },
    {
      title: "Internships",
      experiences: [

        {
          title: "Data Analyst Intern",
          company: "mTek-Services",
          company_url:
            "https://mtek-services.com/",
          logo_path: "intel_logo.jpg",
          duration: "Feb 2021 - May 2021",
          location: "Nairobi,Kenya",
          description:
            "1) Preparing final analysis reports for the management to understand the data-analysis steps, enabling them to take important decisions based on various facts and trends (2)Using statistical tools to identify, analyze, and interpret patterns and trends in complex data sets that could be helpful for the diagnosis and prediction (3)Using automated tools to extract data from primary and secondary sources",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        

        {
          title: "Developer Students Club Member",
          company: "Multimedia University of Kenya",
          company_url:
            "https://gdsc.community.dev/multimedia-university-of-kenya/",
          logo_path: "dsc_logo.png",
          duration: "Jan 2021 - Present",
          location: "Magadi Road,Nairobi",
          description:
            "The DSC chapter of Multimedia University of Kenya, promotes and facilitates a community of like minded students who are problem solvers and eager learners from different subject backgrounds, who are interested in development in multiple technologies such as Internet of Things, Machine Learning, Web Development, Android Development, Cloud Computing, Competitive Programming among other Technologies",
          color: "#0C9D58",
        },

        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "Feb 2021 - Present",
          location: "Remote",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Articles & Blogs",
  description:
    "I have taken part in written blogs and articles and my blog is currently in progress.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Digital Motor Vehicle Insurance Blog",
      createdAt: "2021-06-30T16:26:54Z",
      description: "Blog written on Digital Motor Vehicle Insurance published by mTek ",
      url:
        "https://mtek-services.com/only-the-good-stuff-for-you-and-your-car/",
    },

  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sydneybandi.jpeg",
    description:
      "I am available on the listed social media platforms. You can message me, I will reply within 24 hours. I can help you with Data Analytics ,Business Intelligence, Building and Automating Data Pipelines , API integrations, Building interactive web appications using R-Shiny and Digital Marketing.",
  },
  blogSection: {
    title: "Articles",
    subtitle:
      "For individual fundamental empowerment, I am working to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://twitter.com/bandi_sydney",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle:
      "Nairobi,Kenya",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Nairobi/@-1.303209,36.8473969,11z/",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+254 717 866 46",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
