import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Table, FileText, Beaker } from 'lucide-react';
import Navbar from '../components/Navbar';
import { ParticleCard, GlobalSpotlight, useMobileDetection, BentoCardProps } from '../blocks/Components/MagicBento/MagicBento';

const DEFAULT_GLOW_COLOR = "132, 0, 255";

const serviceCardData: BentoCardProps[] = [
  {
    color: "#060010",
    title: "Chem Lab Chatbot",
    description: "Engage with our AI chatbots to receive expert guidance tailored to your chemistry learning needs. Simplify complex chemical equations.",
    label: "/chatbot",
  },
  {
    color: "#060010",
    title: "Periodic Table",
    description: "Get comprehensive insights into elements, their properties, and real-world applications to elevate your understanding of chemistry.",
    label: "/periodic-table",
  },
  {
    color: "#060010",
    title: "Quizzes",
    description: "Put your chemistry skills to the test with our engaging and educational quizzes, designed to help you master concepts.",
    label: "/quiz",
  },
  {
    color: "#060010",
    title: "Chemistry Simulator",
    description: "Mix elements to create compounds with unique colors, or burn them to observe their flame colors in an interactive simulator.",
    label: "/chemistry-simulator",
  },
];

function Services() {
  const navigate = useNavigate();
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = isMobile;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4 bento-section">
      <Navbar />
      <style>
        {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${DEFAULT_GLOW_COLOR};
            --border-color: #392e4e;
            --background-dark: #060010;
            --white: hsl(0, 0%, 100%);
            --purple-primary: rgba(132, 0, 255, 1);
            --purple-glow: rgba(132, 0, 255, 0.2);
            --purple-border: rgba(132, 0, 255, 0.8);
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${DEFAULT_GLOW_COLOR}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${DEFAULT_GLOW_COLOR}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${DEFAULT_GLOW_COLOR}, 0.2);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${DEFAULT_GLOW_COLOR}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
          
          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${DEFAULT_GLOW_COLOR}, 0.2);
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          

        `}
      </style>
      
      {<GlobalSpotlight
        gridRef={gridRef}
        disableAnimations={shouldDisableAnimations}
        enabled={true}
        glowColor={DEFAULT_GLOW_COLOR}
      />}
      
      <main className="container mx-auto px-4 pt-20 md:pt-32">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Explore Chemistry With AI
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-sm md:text-base px-4">
            Engage With Our AI Chatbot To Discover Detailed Insights Into The Periodic
            Table, Master Chemical Equations, And Get Answers To Your Chemistry-
            Related Questions In Real Time Also Simulate Chemistry Reactions, And Offer Engaging Quizzes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" ref={gridRef}>
            {serviceCardData.map((card, index) => {
              const baseClassName = `card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] card--border-glow`;

              const cardStyle = {
                backgroundColor: card.color || "var(--background-dark)",
                borderColor: "var(--border-color)",
                color: "var(--white)",
                "--glow-x": "50%",
                "--glow-y": "50%",
                "--glow-intensity": "0",
                "--glow-radius": "200px",
                "--glow-color": DEFAULT_GLOW_COLOR,
              };

              let IconComponent;
              switch (card.label) {
                case "/chatbot":
                  IconComponent = MessageCircle;
                  break;
                case "/periodic-table":
                  IconComponent = Table;
                  break;
                case "/quiz":
                  IconComponent = FileText;
                  break;
                case "/chemistry-simulator":
                  IconComponent = Beaker;
                  break;
                default:
                  IconComponent = MessageCircle; 
              }

              return (
                <ParticleCard
                  key={index}
                  className={baseClassName}
                  style={cardStyle}
                  disableAnimations={shouldDisableAnimations}
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                  glowColor={DEFAULT_GLOW_COLOR}
                  onClick={() => navigate(card.label || "/")}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600/20 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-purple-600/30 transition-colors">
                      {IconComponent && <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </ParticleCard>
              );
            })}
          </div>
      </main>
    </div>
  );
}

export default Services;