function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* ===== BARRE DE NAVIGATION ===== */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Titre */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-slate-800">MonSite</span>
            </div>

            {/* Liens de navigation */}
            <div className="hidden sm:flex items-center gap-8">
              <a
                href="#accueil"
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Accueil
              </a>
              <a
                href="#fonctionnalites"
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Fonctionnalités
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Bouton mobile (simple) */}
            <button className="sm:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ===== SECTION PRINCIPALE (HERO) ===== */}
      <section id="accueil" className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Bienvenue sur <span className="text-indigo-200">MonSite</span>
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 mb-10 leading-relaxed">
              Découvrez une plateforme moderne, rapide et élégante conçue avec React et Vite.
              Créez des expériences utilisateur exceptionnelles en quelques clics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#fonctionnalites"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-indigo-700 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transition-colors"
              >
                Découvrir
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 CARTES ===== */}
      <section id="fonctionnalites" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Nos fonctionnalités
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour démarrer rapidement et efficacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Performance</h3>
              <p className="text-slate-600 leading-relaxed">
                Construit avec Vite pour un démarrage ultra-rapide et un hot-reload instantané pendant le développement.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Sécurité</h3>
              <p className="text-slate-600 leading-relaxed">
                Architecture moderne et bonnes pratiques pour protéger vos données et offrir une expérience fiable.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Design moderne</h3>
              <p className="text-slate-600 leading-relaxed">
                Interface élégante réalisée avec Tailwind CSS pour un design responsive et professionnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PIED DE PAGE ===== */}
      <footer id="contact" className="bg-slate-900 text-slate-300 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-lg font-semibold text-white">MonSite</span>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
              <a href="#fonctionnalites" className="hover:text-white transition-colors">Fonctionnalités</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} MonSite. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
