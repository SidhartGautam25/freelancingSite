const team = [
  { name: "Sidharth G", role: "Lead Engineer & Founder", bg: "bg-blue-500" },
  { name: "Alex Chen", role: "UX/UI Designer", bg: "bg-purple-500" },
  { name: "Sarah Miller", role: "Cloud Architect", bg: "bg-indigo-500" }
];

export default function AboutTeam() {
  return (
    <section id="team" className="relative py-24 px-6 z-10 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About <span className="text-gradient">Our Team</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              We are a collective of digital craftsmen. Founded with the mission to build robust, beautiful web applications, our team brings together years of experience across the entire software development lifecycle.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Every line of code we write and every pixel we place is optimized for performance, scalability, and user conversion.
            </p>
            <a href="#contact" className="text-white font-medium hover:text-blue-400 transition-colors flex items-center gap-2">
              Get to know us &rarr;
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {team.map((member, i) => (
              <div key={i} className={`glass-panel p-6 rounded-2xl ${i === 2 ? 'col-span-2' : ''}`}>
                <div className={`w-16 h-16 rounded-full mb-4 ${member.bg} opacity-80 border-2 border-white/20 shadow-lg`}></div>
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
