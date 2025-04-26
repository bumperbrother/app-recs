import { useRouter } from 'next/router';

export default function PyramidGraphic() {
  const router = useRouter();

  // Handle click on pyramid section
  const handleSectionClick = (component) => {
    router.push(`/${component}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-24">
      <svg
        viewBox="0 0 960 700"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ transform: 'scale(1.75)', transformOrigin: 'center center' }}
      >
        {/* Toppings - Top level */}
        <g className="pyramid-section-group" onClick={() => handleSectionClick('toppings')}>
          <path
            d="M480,96 L576,206 L384,206 Z"
            fill="#F3F27C"
            className="pyramid-section"
          />
          <g className="pyramid-section">
            <text 
              x="480" 
              y="160" 
              textAnchor="middle" 
              fill="#333" 
              fontWeight="bold" 
              fontSize="14"
              style={{ cursor: 'pointer' }}
            >
              Toppings
            </text>
            <text 
              x="480" 
              y="175" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              Accelerators for the
            </text>
            <text 
              x="480" 
              y="187" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              rest of your tech, like
            </text>
            <text 
              x="480" 
              y="199" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              ChatGPT or RightTool
            </text>
          </g>
        </g>

        {/* Service Line - Second level */}
        <g className="pyramid-section-group" onClick={() => handleSectionClick('service-line')}>
          <path
            d="M384,210 L576,210 L624,276 L336,276 Z"
            fill="#8CDFD6"
            className="pyramid-section"
          />
          <g className="pyramid-section">
            <text 
              x="480" 
              y="235" 
              textAnchor="middle" 
              fill="#333" 
              fontWeight="bold" 
              fontSize="14"
              style={{ cursor: 'pointer' }}
            >
              Service Line
            </text>
            <text 
              x="480" 
              y="250" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              The tools that support specific
            </text>
            <text 
              x="480" 
              y="262" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              alternative service lines, like bill pay,
            </text>
            <text 
              x="480" 
              y="274" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              receipt mgmt, tax advisory etc
            </text>
          </g>
        </g>

        {/* Engagement - Third level */}
        <g className="pyramid-section-group" onClick={() => handleSectionClick('engagement')}>
          <path
            d="M336,280 L624,280 L672,357 L288,357 Z"
            fill="#9ED9A0"
            className="pyramid-section"
          />
          <g className="pyramid-section">
            <text 
              x="480" 
              y="310" 
              textAnchor="middle" 
              fill="#333" 
              fontWeight="bold" 
              fontSize="14"
              style={{ cursor: 'pointer' }}
            >
              Engagement
            </text>
            <text 
              x="480" 
              y="325" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              How proposals are sent to clients, how scope is
            </text>
            <text 
              x="480" 
              y="337" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              communicated & managed, and how clients are
            </text>
            <text 
              x="480" 
              y="349" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              generally billed on an ongoing basis
            </text>
          </g>
        </g>

        {/* Tax Workflow - Fourth level (rectangle) */}
        <g className="pyramid-section-group" onClick={() => handleSectionClick('tax-workflow')}>
          <path
            d="M288,361 L468,361 L468,449 L288,449 Z"
            fill="#F5A4D0"
            className="pyramid-section"
          />
          <g className="pyramid-section">
            <text 
              x="378" 
              y="385" 
              textAnchor="middle" 
              fill="#333" 
              fontWeight="bold" 
              fontSize="14"
              style={{ cursor: 'pointer' }}
            >
              Tax Workflow
            </text>
            <text 
              x="378" 
              y="405" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              Everything that happens around
            </text>
            <text 
              x="378" 
              y="417" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              your tax prep tool, like info intake,
            </text>
            <text 
              x="378" 
              y="429" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              workpaper prep & delivery
            </text>
          </g>
        </g>

        {/* Close Automation - Fourth level (rectangle) */}
        <g className="pyramid-section-group" onClick={() => handleSectionClick('close-automation')}>
          <path
            d="M492,361 L672,361 L672,449 L492,449 Z"
            fill="#F5A4D0"
            className="pyramid-section"
          />
          <g className="pyramid-section">
            <text 
              x="582" 
              y="385" 
              textAnchor="middle" 
              fill="#333" 
              fontWeight="bold" 
              fontSize="14"
              style={{ cursor: 'pointer' }}
            >
              Close Automation
            </text>
            <text 
              x="582" 
              y="405" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              Where you manage everything
            </text>
            <text 
              x="582" 
              y="417" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              beyond debits & credits, like quality
            </text>
            <text 
              x="582" 
              y="429" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              assurance, info requests, recurring
            </text>
            <text 
              x="582" 
              y="441" 
              textAnchor="middle" 
              fill="#333" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              entries etc
            </text>
          </g>
        </g>

        {/* Practice Management - Fifth level (rectangle) */}
        <g className="pyramid-section-group" onClick={() => handleSectionClick('practice-management')}>
          <path
            d="M288,453 L672,453 L672,530 L288,530 Z"
            fill="#E86A50"
            className="pyramid-section"
          />
          <g className="pyramid-section">
            <text 
              x="480" 
              y="478" 
              textAnchor="middle" 
              fill="#fff" 
              fontWeight="bold" 
              fontSize="14"
              style={{ cursor: 'pointer' }}
            >
              Practice Management
            </text>
            <text 
              x="480" 
              y="498" 
              textAnchor="middle" 
              fill="#fff" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              The home for as much as possible of the workings of your firm.
            </text>
            <text 
              x="480" 
              y="510" 
              textAnchor="middle" 
              fill="#fff" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              Definitely project management, sometimes time & billing, client
            </text>
            <text 
              x="480" 
              y="522" 
              textAnchor="middle" 
              fill="#fff" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              portal, file management, request management, CRM etc.
            </text>
          </g>
        </g>

        {/* Tax Preparation - Foundation level (rocket booster) */}
        <g className="pyramid-section-group" onClick={() => handleSectionClick('tax-preparation')}>
          <path
            d="M204,597 L288,534 L468,534 L468,597 Z"
            fill="#4A90E2"
            className="pyramid-section"
            style={{ fillOpacity: 1 }}
          />
          <g className="pyramid-section">
            <text 
              x="336" 
              y="555" 
              textAnchor="middle" 
              fill="#fff" 
              fontWeight="bold" 
              fontSize="14"
              style={{ cursor: 'pointer' }}
            >
              Tax Preparation
            </text>
            <text 
              x="336" 
              y="570" 
              textAnchor="middle" 
              fill="#fff" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              The one that puts the numbers
            </text>
            <text 
              x="336" 
              y="585" 
              textAnchor="middle" 
              fill="#fff" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              on the tax forms
            </text>
          </g>
        </g>

        {/* Ledger - Foundation level (rocket booster) */}
        <g className="pyramid-section-group" onClick={() => handleSectionClick('ledger')}>
          <path
            d="M492,534 L492,597 L756,597 L672,534 Z"
            fill="#4A90E2"
            className="pyramid-section"
            style={{ fillOpacity: 1 }}
          />
          <g className="pyramid-section">
            <text 
              x="624" 
              y="555" 
              textAnchor="middle" 
              fill="#fff" 
              fontWeight="bold" 
              fontSize="14"
              style={{ cursor: 'pointer' }}
            >
              Ledger
            </text>
            <text 
              x="624" 
              y="570" 
              textAnchor="middle" 
              fill="#fff" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              Where you manage your client's
            </text>
            <text 
              x="624" 
              y="585" 
              textAnchor="middle" 
              fill="#fff" 
              fontSize="9"
              style={{ cursor: 'pointer' }}
            >
              books and run reports
            </text>
          </g>
        </g>

        {/* Labels */}
        <text x="120" y="400" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="32" transform="rotate(-90, 120, 400)">
          TAX
        </text>
        <text x="840" y="400" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="32" transform="rotate(90, 840, 400)">
          BOOKS
        </text>
      </svg>
    </div>
  );
}
