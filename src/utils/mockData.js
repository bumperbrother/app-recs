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
        why: 'Comprehensive features, excellent integration with other Thomson Reuters products, and robust support.',
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
        why: 'Industry standard with excellent integration capabilities and wide adoption.',
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
        why: 'Excellent workflow management, team collaboration, and client communication features.',
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
        youtubeId: 'V5HA-DHSvJo' // Example YouTube video ID for ChatGPT
      }
    ],
    'Good Enough': [
      {
        id: 'rec20',
        app: 'Zapier',
        appMaker: 'Zapier',
        status: 'Good Enough',
        why: 'Good automation tool but can get expensive with many zaps.',
        url: 'https://zapier.com/'
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
