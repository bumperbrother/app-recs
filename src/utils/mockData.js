/**
 * Mock data for testing the application without Airtable
 */

// Mock recommendations for each component
export const mockRecommendations = {
  'tax-preparation': {
    'Top Recommendation': [
      {
        id: 'rec1',
        app: 'UltraTax CS',
        appMaker: 'Thomson Reuters',
        status: 'Top Recommendation',
        why: '<p><strong>Comprehensive features</strong>, excellent integration with other Thomson Reuters products, and robust support.</p><p>Key benefits include:</p><ul><li>Streamlined tax preparation workflow</li><li>Automatic form population</li><li>Integrated e-filing</li></ul><p>Learn more about their <a href="https://tax.thomsonreuters.com/us/en/cs-professional-suite/ultratax-cs/features">features here</a>.</p><p>Watch their">https://youtu.be/dQw4w9WgXcQ">their tutorial video for more information.</p>',
        url: 'https://tax.thomsonreuters.com/us/en/cs-professional-suite/ultratax-cs',
        youtubeId: 'dQw4w9WgXcQ' // Example YouTube video ID
      }
    ],
    'Good Enough': [
      {
        id: 'rec2',
        app: 'ProSeries Tax',
        appMaker: 'Intuit',
        status: 'Good Enough',
        why: 'User-friendly interface and good for smaller firms, but lacks some advanced features.',
        url: 'https://proconnect.intuit.com/proseries/'
      },
      {
        id: 'rec3',
        app: 'Lacerte',
        appMaker: 'Intuit',
        status: 'Good Enough',
        why: 'Powerful tax software with good workflow, but can be expensive for smaller firms.',
        url: 'https://proconnect.intuit.com/lacerte/'
      }
    ],
    'Don\'t Recommend': [
      {
        id: 'rec4',
        app: 'TaxSlayer Pro',
        appMaker: 'TaxSlayer',
        status: 'Don\'t Recommend',
        why: 'Limited features for professional accountants and not as reliable for complex returns.',
        url: 'https://www.taxslayerpro.com/'
      }
    ]
  },
  'ledger': {
    'Top Recommendation': [
      {
        id: 'rec5',
        app: 'QuickBooks Online',
        appMaker: 'Intuit',
        status: 'Top Recommendation',
        why: '<p>Industry standard with <strong>excellent integration capabilities</strong> and wide adoption.</p><p>Benefits:</p><ol><li>Cloud-based accessibility</li><li>Robust reporting</li><li>Large ecosystem of apps and add-ons</li></ol><p>Perfect for <em>small to medium-sized</em> accounting firms.</p>',
        url: 'https://quickbooks.intuit.com/'
      }
    ],
    'Good Enough': [
      {
        id: 'rec6',
        app: 'Xero',
        appMaker: 'Xero',
        status: 'Good Enough',
        why: 'Great alternative to QuickBooks with good features and user-friendly interface.',
        url: 'https://www.xero.com/'
      }
    ],
    'Don\'t Recommend': [
      {
        id: 'rec7',
        app: 'Wave',
        appMaker: 'Wave Financial',
        status: 'Don\'t Recommend',
        why: 'Free but limited features for professional accounting firms.',
        url: 'https://www.waveapps.com/'
      }
    ]
  },
  'practice-management': {
    'Top Recommendation': [
      {
        id: 'rec8',
        app: 'Karbon',
        appMaker: 'Karbon',
        status: 'Top Recommendation',
        why: '<p>Excellent workflow management, team collaboration, and client communication features.</p><p>Karbon provides:</p><ul><li>Centralized client information</li><li>Task management with accountability</li><li>Email integration</li><li>Document management</li></ul><p>Learn more about their <a href="https://karbonhq.com/features/">features here</a>.</p>',
        url: 'https://karbonhq.com/'
      }
    ],
    'Good Enough': [
      {
        id: 'rec9',
        app: 'OfficeTools',
        appMaker: 'AbacusNext',
        status: 'Good Enough',
        why: 'Comprehensive practice management but interface is dated.',
        url: 'https://www.officetools.com/'
      }
    ],
    'Don\'t Recommend': [
      {
        id: 'rec10',
        app: 'Excel Spreadsheets',
        appMaker: 'Microsoft',
        status: 'Don\'t Recommend',
        why: 'Not scalable, prone to errors, and lacks automation features.',
        url: 'https://www.microsoft.com/excel'
      }
    ]
  },
  'tax-workflow': {
    'Top Recommendation': [
      {
        id: 'rec11',
        app: 'Canopy',
        appMaker: 'Canopy',
        status: 'Top Recommendation',
        why: 'Excellent tax workflow management with client portal and document management.',
        url: 'https://www.canopytax.com/'
      }
    ],
    'Good Enough': [
      {
        id: 'rec12',
        app: 'TaxDome',
        appMaker: 'TaxDome',
        status: 'Good Enough',
        why: 'Good all-in-one solution but can be overwhelming.',
        url: 'https://taxdome.com/'
      }
    ],
    'Don\'t Recommend': []
  },
  'close-automation': {
    'Top Recommendation': [
      {
        id: 'rec13',
        app: 'FloQast',
        appMaker: 'FloQast',
        status: 'Top Recommendation',
        why: 'Excellent close management software with great integration capabilities.',
        url: 'https://floqast.com/'
      }
    ],
    'Good Enough': [
      {
        id: 'rec14',
        app: 'BlackLine',
        appMaker: 'BlackLine',
        status: 'Good Enough',
        why: 'Comprehensive but can be complex to implement and use.',
        url: 'https://www.blackline.com/'
      }
    ],
    'Don\'t Recommend': []
  },
  'engagement': {
    'Top Recommendation': [
      {
        id: 'rec15',
        app: 'Ignition',
        appMaker: 'Ignition',
        status: 'Top Recommendation',
        why: 'Excellent proposal, engagement letter, and payment processing solution.',
        url: 'https://www.ignitionapp.com/'
      }
    ],
    'Good Enough': [
      {
        id: 'rec16',
        app: 'Practice Ignition',
        appMaker: 'Practice Ignition',
        status: 'Good Enough',
        why: 'Good proposal and engagement letter management.',
        url: 'https://www.practiceignition.com/'
      }
    ],
    'Don\'t Recommend': []
  },
  'service-line': {
    'Top Recommendation': [
      {
        id: 'rec17',
        app: 'Gusto',
        appMaker: 'Gusto',
        status: 'Top Recommendation',
        why: 'Excellent payroll service with great user experience and integration capabilities.',
        url: 'https://gusto.com/'
      }
    ],
    'Good Enough': [
      {
        id: 'rec18',
        app: 'ADP',
        appMaker: 'ADP',
        status: 'Good Enough',
        why: 'Comprehensive payroll service but can be complex and expensive.',
        url: 'https://www.adp.com/'
      }
    ],
    'Don\'t Recommend': []
  },
  'toppings': {
    'Top Recommendation': [
      {
        id: 'rec19',
        app: 'ChatGPT',
        appMaker: 'OpenAI',
        status: 'Top Recommendation',
        why: 'Excellent AI assistant for various tasks including content creation and research.',
        url: 'https://chat.openai.com/',
        youtubeId: 'V5HA-DHSvJo', // Example YouTube video ID for ChatGPT
        categories: ['AI Assistant', 'Content Creation']
      }
    ],
    'Good Enough': [
      {
        id: 'rec20',
        app: 'Zapier',
        appMaker: 'Zapier',
        status: 'Good Enough',
        why: 'Good automation tool but can get expensive with many zaps.',
        url: 'https://zapier.com/',
        categories: ['Automation', 'Integration']
      }
    ],
    'Don\'t Recommend': []
  }
};

// Mock change log for each component
export const mockChangeLogs = {
  'tax-preparation': [
    {
      app: 'UltraTax CS',
      appMaker: 'Thomson Reuters',
      status: 'Top Recommendation',
      modifiedTime: new Date('2025-03-15T10:30:00')
    },
    {
      app: 'ProSeries Tax',
      appMaker: 'Intuit',
      status: 'Good Enough',
      modifiedTime: new Date('2025-03-10T14:45:00')
    }
  ],
  'ledger': [
    {
      app: 'QuickBooks Online',
      appMaker: 'Intuit',
      status: 'Top Recommendation',
      modifiedTime: new Date('2025-03-20T09:15:00')
    }
  ],
  'practice-management': [
    {
      app: 'Karbon',
      appMaker: 'Karbon',
      status: 'Top Recommendation',
      modifiedTime: new Date('2025-03-18T11:20:00')
    }
  ],
  'tax-workflow': [
    {
      app: 'Canopy',
      appMaker: 'Canopy',
      status: 'Top Recommendation',
      modifiedTime: new Date('2025-03-22T16:10:00')
    }
  ],
  'close-automation': [
    {
      app: 'FloQast',
      appMaker: 'FloQast',
      status: 'Top Recommendation',
      modifiedTime: new Date('2025-03-25T13:40:00')
    }
  ],
  'engagement': [
    {
      app: 'Ignition',
      appMaker: 'Ignition',
      status: 'Top Recommendation',
      modifiedTime: new Date('2025-03-17T10:05:00')
    }
  ],
  'service-line': [
    {
      app: 'Gusto',
      appMaker: 'Gusto',
      status: 'Top Recommendation',
      modifiedTime: new Date('2025-03-19T15:30:00')
    }
  ],
  'toppings': [
    {
      app: 'ChatGPT',
      appMaker: 'OpenAI',
      status: 'Top Recommendation',
      modifiedTime: new Date('2025-03-21T09:45:00')
    }
  ]
};

// Mock FAQ data
export const mockFAQs = [
  {
    id: 'faq1',
    question: 'What is the Accounting Tech Stack?',
    answer: '<p>The <strong>Accounting Tech Stack</strong> is an interactive guide that helps accounting firms build their technology stack in a strategic way. It presents software recommendations in a hierarchical pyramid, with the most fundamental tools at the bottom.</p><p>Our goal is to provide clear, actionable advice for firms of all sizes. Visit our my">https://www.rlz.io/">my community for more information.</p>',
    category: 'General',
    order: 1,
    createdTime: '2025-03-01T10:00:00',
    modifiedTime: '2025-03-01T10:00:00'
  },
  {
    id: 'faq2',
    question: 'How are the recommendations determined?',
    answer: '<p>Our recommendations are based on:</p><ul><li>Extensive research</li><li>User feedback</li><li>Industry best practices</li></ul><p>We evaluate software based on features, usability, integration capabilities, pricing, and support.</p>',
    category: 'Recommendations',
    order: 2,
    createdTime: '2025-03-01T10:00:00',
    modifiedTime: '2025-03-01T10:00:00'
  },
  {
    id: 'faq3',
    question: 'How often are recommendations updated?',
    answer: '<p>We review and update our recommendations regularly as:</p><ol><li>New software becomes available</li><li>Existing tools evolve</li><li>Industry needs change</li></ol><p>You can see the last update date for each recommendation in the <em>change log</em> at the bottom of each component page.</p>',
    category: 'Recommendations',
    order: 3,
    createdTime: '2025-03-01T10:00:00',
    modifiedTime: '2025-03-01T10:00:00'
  },
  {
    id: 'faq4',
    question: 'What does "Good Enough" mean?',
    answer: '<p>"<strong>Good Enough</strong>" indicates that while the software may not be our top recommendation, it still provides adequate functionality and can be a suitable choice for certain firms depending on their specific needs, budget constraints, or existing technology ecosystem.</p><p>These tools often have a good balance of <a href="#">features and pricing</a>.</p>',
    category: 'Recommendations',
    order: 4,
    createdTime: '2025-03-01T10:00:00',
    modifiedTime: '2025-03-01T10:00:00'
  },
  {
    id: 'faq5',
    question: 'Why is software listed in "Don\'t Recommend"?',
    answer: '<p>Software in the "<strong>Don\'t Recommend</strong>" category has significant limitations, including:</p><ul><li>Poor user experience</li><li>Inadequate support</li><li>Missing critical features</li><li>Reliability issues</li></ul><p>We include these to help firms avoid potential pitfalls.</p>',
    category: 'Recommendations',
    order: 5,
    createdTime: '2025-03-01T10:00:00',
    modifiedTime: '2025-03-01T10:00:00'
  }
];
