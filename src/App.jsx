import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, FileText, Code, Database, Wrench, Eye, Utensils, User, ArrowRight, Send, ExternalLink, Play } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-white/10 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 group"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      {/* Number Badge */}
      <div className="absolute top-4 left-4 w-10 h-10 bg-rose-500/20 rounded-full flex items-center justify-center border border-rose-500/30 z-10">
        <span className="text-rose-400 font-bold text-sm">0{index + 1}</span>
      </div>

      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-rose-900/50 to-red-900/50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        {project.icon}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
        
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.codeLink}
            className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Github size={18} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const projects = [
    {
      title: 'Food Delivery Application',
      description: 'A comprehensive food delivery platform enabling users to browse restaurants, place orders, and track deliveries in real-time.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API'],
      codeLink: 'https://github.com/kushal2644/Optical-Character-recognition-and-Text-to-speech-convertion',
      demoLink: '#',
      icon: <Utensils size={64} className="text-white/30" />
    },
    {
      title: 'OCR Text To Speech',
      description: 'Extracts text from images and converts it into speech using advanced Optical Character Recognition technology.',
      technologies: ['Python', 'OCR', 'Text-to-Speech', 'AI'],
      codeLink: 'https://github.com/kushal2644/Optical-Character-recognition-and-Text-to-speech-convertion',
      demoLink: '#',
      icon: <Eye size={64} className="text-white/30" />
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Kushal V
          </motion.h1>
          <div className="flex gap-8">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-300 transition relative group font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * ['Home', 'Projects', 'Skills', 'Contact'].indexOf(item) }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-red-400 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/background.mp4.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/85 via-red-900/85 to-gray-900/85"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-rose-500/30 to-red-500/30 backdrop-blur-xl flex items-center justify-center border-4 border-white/30 shadow-2xl shadow-rose-500/50 overflow-hidden">
              <img 
                src="/profile.jpg.jpg" 
                alt="Kushal V" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '👨‍💻'; }}
              />
            </div>
          </motion.div>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-rose-200 to-red-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Software Developer
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building robust web applications with Java & Modern Frontend Technologies. Passionate about creating seamless user experiences.
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://kushal2644.github.io/My-Portfolio/Resume_Kushal_V.pdf"
              className="group bg-gradient-to-r from-rose-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <FileText size={20} />
              View Resume
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing my best work and innovative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, color: 'text-orange-400', gradient: 'from-orange-500 to-amber-500', title: 'Backend', skills: ['Java', 'Spring Boot', 'REST API'] },
              { icon: Code, color: 'text-blue-400', gradient: 'from-blue-500 to-cyan-500', title: 'Frontend', skills: ['HTML', 'CSS', 'React', 'JavaScript'] },
              { icon: Database, color: 'text-green-400', gradient: 'from-green-500 to-emerald-500', title: 'Database', skills: ['MySQL', 'Oracle DB'] },
              { icon: Wrench, color: 'text-rose-400', gradient: 'from-rose-500 to-red-500', title: 'Tools', skills: ['VS Code', 'Eclipse', 'Git'] }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-white/10 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center border border-white/20 group-hover:border-rose-500/50 transition-all">
                    <skill.icon size={28} className={skill.color} />
                  </div>
                  <h3 className="font-semibold text-xl">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((s, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${skill.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-green-900/80 via-yellow-900/60 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let's work together on your next project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="font-semibold text-2xl mb-2">Email</h3>
              <p className="text-gray-300 text-lg">kushalgowda020204@gmail.com</p>
            </motion.div>

            <motion.div 
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="font-semibold text-2xl mb-2">Phone</h3>
              <p className="text-gray-300 text-lg">7483633234</p>
            </motion.div>
          </div>

          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Github, href: 'https://github.com/kushal2644', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:kushalgowda020204@gmail.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/10 group"
                whileHover={{ scale: 1.2, rotate: 360 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-900/50 via-yellow-900/30 to-green-900/50 border-t border-green-500/20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-green-300 mb-2">&copy; 2024 Kushal V. All rights reserved.</p>
            <p className="text-yellow-300/70 text-sm">Built with React, Tailwind CSS & Framer Motion</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
