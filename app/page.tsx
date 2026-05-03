export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Open Source Payroll
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Pay GitHub Contributors{' '}
          <span className="text-[#58a6ff]">Fairly & Automatically</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your GitHub repos, set contribution weights, and generate professional invoices — all in minutes. No spreadsheets, no guesswork.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[['Commits', 'Tracked'], ['Lines', 'Analyzed'], ['Invoices', 'Generated']].map(([top, bot]) => (
            <div key={top} className="text-center">
              <div className="text-2xl font-bold text-[#58a6ff]">{top}</div>
              <div className="text-sm text-[#8b949e]">{bot}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Connect GitHub', desc: 'Authorize access to your repos and select which ones to analyze for contributor activity.' },
            { step: '02', title: 'Set Weights', desc: 'Configure payment weights for commits, lines changed, and issues resolved to match your team values.' },
            { step: '03', title: 'Generate Invoices', desc: 'Review calculated payouts and export professional PDF invoices for each contributor instantly.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-sm font-mono font-bold mb-3">{step}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited repositories',
              'Configurable contribution weights',
              'PDF invoice generation',
              'GitHub OAuth integration',
              'Payment history & audit log',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started — $12/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-4">7-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How are contributor payments calculated?',
              a: 'You set configurable weights for three metrics: number of commits, lines of code changed, and issues resolved. The tool fetches this data from GitHub and distributes the total budget proportionally.'
            },
            {
              q: 'Do contributors need to sign up?',
              a: 'No. Only the repo maintainer or agency admin needs an account. Contributors receive their invoices via email without needing to create an account.'
            },
            {
              q: 'What GitHub permissions are required?',
              a: 'Read-only access to your repositories and commit history. We never request write permissions and cannot modify your code or settings.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} GitHub Contributor Payroll. Built for open source maintainers.</p>
      </footer>
    </main>
  )
}
