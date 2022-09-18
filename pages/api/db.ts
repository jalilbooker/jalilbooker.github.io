const db = {
  personalDetails: {
    _id: '601650e62147e23bf8664148',
    name: 'Jalil Booker Markel',
    about:
      'Jalil is a dedicated software engineer with a focus on the design and implementation of web applications. He has nearly decade years of experience in developing cutting-edge engineering solutions with a wide range of technology features. He has participated in more than 15 business level projects and is skilled in both agile processes, backend and frontend development. His perfect balance of technical & managerial skills stands him apart from the crowd.',
    work: {
      company: 'Studiolite',
      designation: 'Senior Fullstack Engineer',
      logo: '/images/companies/studiolite.png'
    },
    logo: '/images/logo-light.svg',
    resume: 'https://drive.google.com/file/d/1kpe0Rxeez0oiwJ3EnXvYBulZ3Bdv_s9H/view?usp=sharing',
    profile_img: '/images/jalil.png',
    calendyUrl:
      'https://calendly.com/jalilmarkel/30min?hide_event_type_details=1&hide_gdpr_banner=1',
    socialMedia: [
      {
        link: 'mailto:greatjalilbooker@gmail.com',
        image_file: '/images/icons/mail.svg',
        alt_text: 'Email'
      },
      {
        link: 'https://linkedin.com/in/jalilbooker',
        image_file: '/images/icons/linkedin.svg',
        alt_text: 'LinkedIn'
      },
      {
        link: 'https://github.com/jalilbooker',
        image_file: '/images/icons/github.svg',
        alt_text: 'Github'
      }
    ]
  },
  projectDetails: [
    {
      slug: 'comysh',
      tagline:
        'Comysh is a marketplace for real estate brokers and agents to be called upon by buyers to show them property, write offers and contract forms, schedule inspections, and any other brokerage service for a fee as the services are provided.  Should the buyer purchase the property, the broker and agent agree to pass along the buyer side commission to the buyer as a credit at closing.',
      description:
        'Eight houses are shown on a Saturday.  The buyer pays $150 per showing.  The total fee would be $1200 for the showings.   The buyer likes one of the houses and asks the agent to write an offer.  The agent charges $200 to write an offer.  Later, the buyer wants the agent to schedule the inspections, which costs $150.  The buyer will have paid $1550.  If this is a $200,000 purchase and the buyer side commission is 3%, the buyer would get a $6000 credit at when purchasing.  That’s $4450 the buyer would get back at closing.',
      img: '/images/projects/comysh.png',
      name: 'Comysh',
      tags: ['Vue', 'Firebase', 'TypeScript', 'Quasar', 'NodeJS'],
      url: 'http://comysh.com/',
      category: ['web'],
      featured: true
    },
    {
      slug: 'mindstreet',
      img: '/images/projects/mindstreet.png',
      name: 'MindStreet',
      tags: ['ReactJS', 'SvelteJS', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'GraphQL'],
      category: ['web'],
      url: 'https://github.com/jalilbooker/DAA-Web',
      featured: true,
      description:
        'Evidence-based, clinically proven computer-assisted programs to manage symptoms of mental health disorders. These programs are based on decades of NIH-funded research first pioneered by our founders and are designed to be universally accessible, easily affordable, and completely stigma-free. Most importantly, they deliver similar outcomes in a fraction of the time and resources compared to traditional tools to address mental health conditions.',
      tagline: 'Mindstreet is a Digital Tool for Mental Health'
    },
    {
      slug: 'buyatoyota',
      tagline: 'You can buy Toyota car',
      img: '/images/projects/buyatoyota.png',
      name: 'BuyAToyota',
      url: 'https://www.buyatoyota.com/phoenix',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: ['web'],
      featured: true,
      description:
        'Toyota includes a no cost maintenance plan and 24-hour roadside assistance with the purchase or lease of every new Toyota.'
    },
    {
      slug: 'amniefy',
      tagline:
        'Amenify is a technology company on a mission to power services and products for millions of homes.',
      description:
        'Amenify hires trusted, top-rated local service providers to bring high-quality amenity services exclusively to your community.Create your free account, then book services like cleaning, chores, and lunch delivery — now available at select communities.By partnering with Amenify, your community locks in exclusive low rates and dedicated concierge support for residents.',
      img: '/images/projects/amenify.png',
      name: 'Amenify',
      url: 'https://apps.apple.com/us/app/amenify-resident/id1474989684',
      tags: ['ReactJS', 'ReactNative', 'JavaScript', 'GraphQL', 'Django', 'PostgreSQL'],
      category: ['web'],
      featured: true
    },
    {
      slug: 'bavard',
      tagline:
        "Bavard's AI-powered conversational chatbots will delight your customers, shorten your sales funnel, and increase your conversion rates.",
      img: '/images/projects/bavard.png',
      name: 'Bavard',
      url: 'https://bavard.ai/',
      tags: ['ReactJS', 'MUI', 'CSS', 'TypeScript'],
      category: ['web'],
      featured: false,
      description:
        'Bavard’s AI-powered conversational chatbots will delight your customers, shorten your sales funnel, and increase your conversion rates. Show embedded videos about your product, schedule demos right within the widget, and collect customer data to improve targeted marketing'
    },

    {
      slug: 'gloo',
      tagline:
        'Gloo is a new kind of outreach platform designed to help your church reach your city in a way that saves you time, activates your team, and increases your impact. Our goal is to help your church serve more new people, and see more lives changed – each week.',
      img: '/images/projects/gloo.png',
      name: 'Gloo',
      url: 'https://www.gloo.us/',
      tags: ['ReactJS', 'NextJS', 'PostgreSQL', 'CSS', 'TypeScript'],
      category: ['web'],
      featured: false,
      description:
        "Online campaigns on Gloo are designed to help you reach people who don't typically go to church, but need prayer, have questions about Jesus, or need help—and we deliver them directly to you."
    },
    {
      slug: 'oneday',
      tagline:
        'OneDay is a video storytelling company that empowers businesses to become storytellers through video to drive growth.',
      img: '/images/projects/oneday.png',
      name: 'Oneday',
      url: 'https://www.oneday.com/',
      tags: ['ReactJS', 'TypeScript', 'NodeJS', 'MongoDB'],
      category: ['web'],
      featured: false,
      description:
        'OneDay’s program allows you to easily capture amazing stories and content that you can use to communicate with customers in a personalized way, showcasing your empathy and commitment to providing a solution to their specific needs.'
    }
  ],
  companyDetails: [
    {
      name: 'Studiolite',
      logo_url: '/images/companies/studiolite.png',
      featured: true,
      position: 'Senior Fullstack Engineer',
      startDate: 'Sep 2021',
      responsibilities: [
        'Released a mobile application that manages properties and connects brokers with customers for real estate companies',
        'Provided technical insight and engineering support on start-up companies and helped them bring their MVPs to the market in a given time.',
        'Discussed project progress with customers, collected feedback on different stages and directly addressed concerns.',
        'Collaborated with project managers and other engineering groups to plan and prioritize projects and then break them into scrum epics and stories for my teams (agile).',
        'Assessed and reviewed all pull requests created by teammates to ensure the quality and accuracy of the code.',
        'Tech Used: React, Typescript, Node.js, Vue3, Quasar, PostgreSQL'
      ],
      order: 1
    },
    {
      name: 'MindStreet Inc',
      position: 'Senior Fullstack Engineer',
      logo_url: '/images/companies/mindstreet.png',
      featured: true,
      startDate: 'Apr 2020',
      endDate: 'Sep 2021',
      responsibilities: [
        'Upgraded application version to the latest by converting existing Svelte codes into well-structured React code.',
        'Analysed learning diagram and technically implemented the workflow.',
        'Maintained high-level expertise in React state management strategies.',
        'Sped up onboarding process for web contributors by spearheading a Naming Conventions Best Practices doc on front end code for React, Apollo GraphQL, Rosie, Jest, Next.js, etc.',
        'Taught around four two-week Front-End Web Development Bootcamps (React/Redux/GraphQL/Apollo/Node.js) at Intuit per year',
        'Tech Used: React, Next.js, Node.js, Svelte, Firebase, Stripe, GraphQL'
      ],
      order: 2
    },
    {
      name: 'Gloo Inc',
      position: 'Software Engineer',
      featured: true,
      logo_url: '/images/companies/gloo.svg',
      startDate: 'Sep 2018',
      endDate: 'Apr 2020',
      responsibilities: [
        'Worked on the Accounts/Registration team for onboarding new users and organizations registering with the Gloo platform',
        'Solved the problem for tracking where a new user’s external origin was, and through logic, determining their proper destination to be, scaling for an SSO model across the platform’s host of products.',
        'Brought in shipping confidence for the app and improved our deployment pipeline by implementing a testing harness',
        'Ensured our Gloo Web team policies and practices were being upheld through code reviews, guidance, and patience',
        'Contributed to the internal Gloo Web team by authoring two NPM packages to implement custom Google Analytics and Facebook tags within our Next.js applications',
        'Tech Used:  React, Next.js, Angular, Vue, Node.js, PostgreSQL'
      ],
      order: 3
    },
    {
      name: 'Redfin Technologies',
      position: 'Fullstack Engineer',
      featured: true,
      startDate: 'Apr 2017',
      endDate: 'Nov 2018',
      responsibilities: [
        'Dramatically improved the user experience for over 10,000 users by optimizing client code and refactoring a .NET MVC web app with jQuery to using React and Redux ',
        'Maintained complex technology infrastructure and collaborated with product team to implement new features and strategically plan for future products.',
        'Defined unit tests and e2e tests and build CI/CD pipeline using Circle CI',
        'Implemented JWT authentications. Used passport.js for social sign-in and implemented local strategy',
        'Tech Used:  React, Redux, Cypress, Jest, .NET, JQuery'
      ],
      order: 3
    },
    {
      name: 'PoloSoft Technologies',
      position: 'Fullstack Engineer',
      logo_url: '/images/companies/polosoft.svg',
      featured: true,
      startDate: 'Feb 2016',
      endDate: 'Apr 2017',
      responsibilities: [
        'Promoted to top programmer, joined core development team, participated in software filed testing to verify performance of the developed projects.',
        'Created a chatbot platform using NLP and Messenger APIs.',
        'Delivered technical training for React, Redux, Angular, GraphQL,  Apollo, Docker, Python, JavaScript, jQuery, Node.js, HTML5, CSS, and ASP.NET MVC to clients ranging from small businesses to Fortune 100 Companies.',
        'Architected and coded a large common code library for web applications, covering security, configuration, and especially data management.',
        'Consulted with clients on the most appropriate design options based on their major marketing goals',

        'Tech Used: Docker, Python, PHP, Angular, React, Django'
      ],
      order: 5
    },
    {
      name: 'Serigor',
      position: 'Web Developer',
      logo_url: '/images/companies/serigor.png',
      featured: true,
      startDate: 'May 2014',
      endDate: 'Feb 2016',
      responsibilities: [
        'Analysed requirements and prepared an end-to-end sheet of test cases for data-driven testing',
        'Performed UI testing, unit testing, black box testing, white box testing, and regression testing on various applications.',
        'Worked with a customer to build a plugin architecture for their existing software to enable them to ramp up the number of developers working on their code.',
        'Worked with a healthcare industry startup to build wellness software to help patients recover from certain medical conditions.',

        'Tech Used:  PHP, Wordpress, Laravel, jQuery, Ruby on Rails'
      ],
      order: 6
    }
  ]
};

export default db;
