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

export default function ProjectsGallery() {
  return (
    <section id="work" className="relative py-24 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
            <p className="text-gray-400 max-w-xl">A selection of our latest freelance projects and client success stories.</p>
          </div>
          <a href="#" className="hidden md:inline-block text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
            View All Projects
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <a 
              key={i} 
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden glass-panel aspect-[4/3] cursor-pointer block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} group-hover:scale-110 transition-transform duration-700 ease-out`}></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider mb-3">
                  {proj.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{proj.name}</h3>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                  Visit website
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
