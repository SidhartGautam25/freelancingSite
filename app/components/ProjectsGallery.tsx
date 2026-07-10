const projects = [
  { 
    name: "marqstats.com", 
    tag: "Market Analytics", 
    color: "from-blue-500/30 to-indigo-900/40",
    link: "https://marqstats.com"
  },
  { 
    name: "godrejpropertypune.com", 
    tag: "Real Estate Portal", 
    color: "from-amber-500/30 to-orange-900/40",
    link: "https://godrejpropertypune.com"
  },
  { 
    name: "maalikmemorial.co.in", 
    tag: "Memorial Portal", 
    color: "from-purple-500/30 to-violet-900/40",
    link: "https://maalikmemorial.co.in/" 
  },
  { 
    name: "snapbharat.com", 
    tag: "Digital Platform", 
    color: "from-pink-500/30 to-rose-900/40",
    link: "https://snapbharat.com" 
  }
];

interface Project {
  name: string;
  tag: string;
  color: string;
  link: string;
}

function ProjectCard({ proj }: { proj: Project }) {
  return (
    <a 
      href={proj.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-3xl overflow-hidden glass-panel w-[300px] sm:w-[380px] md:w-[450px] aspect-[16/10] cursor-pointer block shrink-0"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} group-hover:scale-110 transition-transform duration-700 ease-out`}></div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      
      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider mb-3 text-white">
          {proj.tag}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{proj.name}</h3>
        <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
          Visit website
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function ProjectsGallery() {
  return (
    <section id="work" className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
            <p className="text-gray-400 max-w-xl">A selection of our latest freelance projects and client success stories.</p>
          </div>
        </div>
      </div>
      
      {/* Edge Gradients for seamless fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#030712] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#030712] to-transparent z-20 pointer-events-none" />
      
      {/* Horizontal Scrolling Track */}
      <div className="marquee-container relative flex overflow-x-hidden w-full py-4">
        {/* Set 1 */}
        <div className="flex animate-marquee pr-6 gap-6 shrink-0">
          {projects.map((proj, i) => (
            <ProjectCard key={`p1-${i}`} proj={proj} />
          ))}
        </div>
        
        {/* Set 2 (Identical duplicate) */}
        <div className="flex animate-marquee pr-6 gap-6 shrink-0" aria-hidden="true">
          {projects.map((proj, i) => (
            <ProjectCard key={`p2-${i}`} proj={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
