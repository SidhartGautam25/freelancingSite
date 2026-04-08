const services = [
  { title: "Full-Stack Web Dev", text: "Robust, scalable architectures using Next.js and Node." },
  { title: "UI/UX Design", text: "Sleek, conversion-optimized interfaces that impress." },
  { title: "Cloud Architecture", text: "AWS, Docker, and Kubernetes deployment strategies." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Expertise</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">We deliver end-to-end solutions combining beautiful design with powerful engineering.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 border border-white/10">
                <div className="w-4 h-4 rounded-full bg-purple-400"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
              <p className="text-gray-400 leading-relaxed">{svc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
