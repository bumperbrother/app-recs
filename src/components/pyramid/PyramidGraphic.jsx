import { useRouter } from 'next/router';

export default function PyramidGraphic() {
  const router = useRouter();

  // Handle click on pyramid section
  const handleSectionClick = (component) => {
    router.push(`/${component}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Toppings - Top level */}
        <path
          d="M400,50 L500,150 L300,150 Z"
          fill="#F3F27C"
          className="pyramid-section"
          onClick={() => handleSectionClick('toppings')}
        />
        <text 
          x="400" 
          y="110" 
          textAnchor="middle" 
          fill="#333" 
          fontWeight="bold" 
          fontSize="18"
          className="pyramid-section"
          onClick={() => handleSectionClick('toppings')}
          style={{ cursor: 'pointer' }}
        >
          Toppings
        </text>
        <text 
          x="400" 
          y="130" 
          textAnchor="middle" 
          fill="#333" 
          fontSize="10"
          className="pyramid-section"
          onClick={() => handleSectionClick('toppings')}
          style={{ cursor: 'pointer' }}
        >
          Accelerators for the rest of your tech
        </text>

        {/* Service Line - Fifth level */}
        <path
          d="M300,150 L500,150 L550,220 L250,220 Z"
          fill="#8CDFD6"
          className="pyramid-section"
          onClick={() => handleSectionClick('service-line')}
        />
        <text 
          x="400" 
          y="175" 
          textAnchor="middle" 
          fill="#333" 
          fontWeight="bold" 
          fontSize="18"
          className="pyramid-section"
          onClick={() => handleSectionClick('service-line')}
          style={{ cursor: 'pointer' }}
        >
          Service Line
        </text>
        <text 
          x="400" 
          y="195" 
          textAnchor="middle" 
          fill="#333" 
          fontSize="10"
          className="pyramid-section"
          onClick={() => handleSectionClick('service-line')}
          style={{ cursor: 'pointer' }}
        >
          Tools for specific service lines
        </text>

        {/* Engagement - Fourth level */}
        <path
          d="M250,220 L550,220 L600,300 L200,300 Z"
          fill="#9ED9A0"
          className="pyramid-section"
          onClick={() => handleSectionClick('engagement')}
        />
        <text 
          x="400" 
          y="255" 
          textAnchor="middle" 
          fill="#333" 
          fontWeight="bold" 
          fontSize="18"
          className="pyramid-section"
          onClick={() => handleSectionClick('engagement')}
          style={{ cursor: 'pointer' }}
        >
          Engagement
        </text>
        <text 
          x="400" 
          y="275" 
          textAnchor="middle" 
          fill="#333" 
          fontSize="10"
          className="pyramid-section"
          onClick={() => handleSectionClick('engagement')}
          style={{ cursor: 'pointer' }}
        >
          Client proposals, scope, billing
        </text>

        {/* Tax Workflow & Close Automation - Third level */}
        <path
          d="M200,300 L380,300 L380,380 L150,380 Z"
          fill="#F5A4D0"
          className="pyramid-section"
          onClick={() => handleSectionClick('tax-workflow')}
        />
        <text 
          x="275" 
          y="335" 
          textAnchor="middle" 
          fill="#333" 
          fontWeight="bold" 
          fontSize="18"
          className="pyramid-section"
          onClick={() => handleSectionClick('tax-workflow')}
          style={{ cursor: 'pointer' }}
        >
          Tax Workflow
        </text>
        <text 
          x="275" 
          y="355" 
          textAnchor="middle" 
          fill="#333" 
          fontSize="10"
          className="pyramid-section"
          onClick={() => handleSectionClick('tax-workflow')}
          style={{ cursor: 'pointer' }}
        >
          Tax prep tool, info intake
        </text>

        <path
          d="M380,300 L600,300 L650,380 L380,380 Z"
          fill="#F5A4D0"
          className="pyramid-section"
          onClick={() => handleSectionClick('close-automation')}
        />
        <text 
          x="490" 
          y="335" 
          textAnchor="middle" 
          fill="#333" 
          fontWeight="bold" 
          fontSize="18"
          className="pyramid-section"
          onClick={() => handleSectionClick('close-automation')}
          style={{ cursor: 'pointer' }}
        >
          Close Automation
        </text>
        <text 
          x="490" 
          y="355" 
          textAnchor="middle" 
          fill="#333" 
          fontSize="10"
          className="pyramid-section"
          onClick={() => handleSectionClick('close-automation')}
          style={{ cursor: 'pointer' }}
        >
          Quality assurance, recurring entries
        </text>

        {/* Practice Management - Second level */}
        <path
          d="M150,380 L650,380 L700,460 L100,460 Z"
          fill="#E86A50"
          className="pyramid-section"
          onClick={() => handleSectionClick('practice-management')}
        />
        <text 
          x="400" 
          y="415" 
          textAnchor="middle" 
          fill="#333" 
          fontWeight="bold" 
          fontSize="18"
          className="pyramid-section"
          onClick={() => handleSectionClick('practice-management')}
          style={{ cursor: 'pointer' }}
        >
          Practice Management
        </text>
        <text 
          x="400" 
          y="435" 
          textAnchor="middle" 
          fill="#333" 
          fontSize="10"
          className="pyramid-section"
          onClick={() => handleSectionClick('practice-management')}
          style={{ cursor: 'pointer' }}
        >
          Project management, time & billing, CRM
        </text>

        {/* Tax Preparation & Ledger - Foundation level */}
        <path
          d="M100,460 L380,460 L380,540 L50,540 Z"
          fill="#4A90E2"
          className="pyramid-section"
          onClick={() => handleSectionClick('tax-preparation')}
        />
        <text 
          x="225" 
          y="495" 
          textAnchor="middle" 
          fill="#fff" 
          fontWeight="bold" 
          fontSize="18"
          className="pyramid-section"
          onClick={() => handleSectionClick('tax-preparation')}
          style={{ cursor: 'pointer' }}
        >
          Tax Preparation
        </text>
        <text 
          x="225" 
          y="515" 
          textAnchor="middle" 
          fill="#fff" 
          fontSize="10"
          className="pyramid-section"
          onClick={() => handleSectionClick('tax-preparation')}
          style={{ cursor: 'pointer' }}
        >
          The one that puts the numbers on the tax forms
        </text>

        <path
          d="M380,460 L700,460 L750,540 L380,540 Z"
          fill="#4A90E2"
          className="pyramid-section"
          onClick={() => handleSectionClick('ledger')}
        />
        <text 
          x="540" 
          y="495" 
          textAnchor="middle" 
          fill="#fff" 
          fontWeight="bold" 
          fontSize="18"
          className="pyramid-section"
          onClick={() => handleSectionClick('ledger')}
          style={{ cursor: 'pointer' }}
        >
          Ledger
        </text>
        <text 
          x="540" 
          y="515" 
          textAnchor="middle" 
          fill="#fff" 
          fontSize="10"
          className="pyramid-section"
          onClick={() => handleSectionClick('ledger')}
          style={{ cursor: 'pointer' }}
        >
          Where you manage your client's books and run reports
        </text>

        {/* Labels */}
        <text x="75" y="400" textAnchor="middle" fill="#333" fontWeight="bold" fontSize="32" transform="rotate(-90, 75, 400)">
          TAX
        </text>
        <text x="725" y="400" textAnchor="middle" fill="#333" fontWeight="bold" fontSize="32" transform="rotate(90, 725, 400)">
          BOOKS
        </text>
      </svg>
      
      <div className="text-center mt-4 text-gray-600">
        <p>Click on any section to view software recommendations</p>
      </div>
    </div>
  );
}
