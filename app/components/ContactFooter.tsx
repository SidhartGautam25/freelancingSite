export default function ContactFooter() {
  return (
    <footer id="contact" className="relative pb-12 px-6 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto pt-24 pb-16">
        <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 mix-blend-overlay"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white relative z-10">Ready to build something <span className="text-gradient">amazing?</span></h2>
          <p className="text-xl text-gray-400 mb-10 relative z-10">We are currently accepting new freelance projects. Let's discuss your vision.</p>
          <a href="mailto:example@domain.com" className="relative z-10 inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Get in touch
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6 border-t border-white/5 pt-8">
          <div>
            <span className="text-gray-300 font-bold tracking-tight">ElevateStudio</span> &copy; {new Date().getFullYear()}
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
