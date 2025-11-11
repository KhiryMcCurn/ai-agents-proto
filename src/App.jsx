import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';

// Credit Tiers
const TIERS = [
  { name: 'Starter', load: '$50', credits: '500', desc: 'Test 1-2 businesses' },
  { name: 'Growth', load: '$250', credits: '2,500', desc: 'Run 3-5 businesses' },
  { name: 'Scale', load: '$1,000', credits: '10,000', desc: 'Unlimited businesses' },
];

// AI Business Templates
const BUSINESSES = [
  {
    id: 1,
    name: 'YouTube Shorts Automation',
    desc: 'AI generates viral shorts from trending topics, posts daily, monetizes via ads',
    monthlyCost: 120,
    monthlyRevenue: 800,
    profit: 680,
    roi: '567%',
    setupTime: '2 hours',
    tags: ['Content', 'Passive Income', 'Social Media']
  },
  {
    id: 2,
    name: 'Affiliate Review Site',
    desc: 'AI writes SEO product reviews, auto-updates prices, earns commissions',
    monthlyCost: 80,
    monthlyRevenue: 1200,
    profit: 1120,
    roi: '1400%',
    setupTime: '3 hours',
    tags: ['SEO', 'Affiliate', 'Blogging']
  },
  {
    id: 3,
    name: 'Dropshipping Store Manager',
    desc: 'AI finds winning products, creates ads, manages inventory & customer service',
    monthlyCost: 200,
    monthlyRevenue: 3500,
    profit: 3300,
    roi: '1650%',
    setupTime: '5 hours',
    tags: ['E-commerce', 'High Revenue', 'Ads']
  },
  {
    id: 4,
    name: 'Twitter Growth Bot',
    desc: 'AI writes viral tweets, engages with niche, sells sponsorships',
    monthlyCost: 60,
    monthlyRevenue: 400,
    profit: 340,
    roi: '567%',
    setupTime: '1 hour',
    tags: ['Social Media', 'Quick Start', 'Sponsorships']
  },
  {
    id: 5,
    name: 'Print-on-Demand Designer',
    desc: 'AI generates designs, lists on Etsy/Redbubble, fulfills orders automatically',
    monthlyCost: 100,
    monthlyRevenue: 900,
    profit: 800,
    roi: '800%',
    setupTime: '4 hours',
    tags: ['Design', 'E-commerce', 'Passive']
  },
  {
    id: 6,
    name: 'Newsletter Empire',
    desc: 'AI curates industry news, grows email list, monetizes via ads & affiliates',
    monthlyCost: 90,
    monthlyRevenue: 1500,
    profit: 1410,
    roi: '1567%',
    setupTime: '3 hours',
    tags: ['Content', 'Email Marketing', 'High Profit']
  },
];

// Header Component
function Header() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        AI Business Vault
      </Link>
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
        <Link to="/businesses" className="text-gray-300 hover:text-white transition">Businesses</Link>
        <Link to="/credits" className="text-gray-300 hover:text-white transition">Credits</Link>
        <AuthModal />
      </div>
    </nav>
  );
}

// Auth Modal
function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
        Login
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <Dialog.Panel className="bg-gray-800 p-8 rounded-xl max-w-md w-full border border-gray-700">
          <h2 className="text-2xl mb-6 text-white font-bold">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert('Auth submitted!'); setIsOpen(false); }}>
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg mb-3 focus:border-blue-500 focus:outline-none" required />
            <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg mb-4 focus:border-blue-500 focus:outline-none" required />
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg font-semibold mb-3 hover:opacity-90 transition">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="w-full text-gray-400 hover:text-white transition">
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </form>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

// Landing Page
function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Runs Your Business.<br/>You Collect the Profits.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Load credits once. Deploy AI agents that generate income 24/7. Each business makes more than it costs to run. Unused credits? Withdraw anytime.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/businesses" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition">
              Browse Businesses
            </Link>
            <Link to="/credits" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg border border-gray-700 hover:bg-gray-700 transition">
              Load Credits
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Tier</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TIERS.map((tier, idx) => (
              <div key={tier.name} className={`bg-gray-800 border-2 ${idx === 1 ? 'border-purple-500 scale-105' : 'border-gray-700'} p-6 rounded-xl relative`}>
                {idx === 1 && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold mb-2 text-blue-400">{tier.load}</div>
                <div className="text-gray-400 mb-4">{tier.credits} Credits</div>
                <p className="text-gray-300 mb-6">{tier.desc}</p>
                <Link to="/credits" className="block text-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Load Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gray-800 border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
              <h3 className="font-bold mb-2">Load Credits</h3>
              <p className="text-gray-400">One-time load, fully refundable. No subscriptions.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
              <h3 className="font-bold mb-2">Deploy AI Business</h3>
              <p className="text-gray-400">Choose a template, AI handles everything automatically.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">3</div>
              <h3 className="font-bold mb-2">Earn Profit</h3>
              <p className="text-gray-400">AI generates more revenue than it costs to run.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Businesses Page
function Businesses() {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Business Templates</h1>
          <p className="text-xl text-gray-400">Choose a proven business model. AI runs it. You profit.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESSES.map((business) => (
            <div key={business.id} className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-purple-500 transition cursor-pointer" onClick={() => setSelectedBusiness(business)}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{business.name}</h3>
                <span className="bg-green-500 text-xs px-2 py-1 rounded-full font-semibold">+{business.roi}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{business.desc}</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Monthly Cost:</span>
                  <span className="text-red-400 font-semibold">${business.monthlyCost}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Monthly Revenue:</span>
                  <span className="text-green-400 font-semibold">${business.monthlyRevenue}</span>
                </div>
                <div className="flex justify-between text-sm border-t border-gray-700 pt-2">
                  <span className="font-bold">Net Profit:</span>
                  <span className="text-green-400 font-bold">${business.profit}/mo</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {business.tags.map(tag => (
                  <span key={tag} className="bg-gray-700 text-xs px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition">
                Deploy Business
              </button>
            </div>
          ))}
        </div>
      </main>

      {selectedBusiness && (
        <Dialog open={!!selectedBusiness} onClose={() => setSelectedBusiness(null)} className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <Dialog.Panel className="bg-gray-800 p-8 rounded-xl max-w-2xl w-full border border-gray-700 max-h-screen overflow-y-auto">
            <h2 className="text-3xl font-bold mb-4">{selectedBusiness.name}</h2>
            <p className="text-gray-300 mb-6">{selectedBusiness.desc}</p>
            <div className="bg-gray-900 p-6 rounded-lg mb-6">
              <h3 className="font-bold mb-4 text-xl">Financial Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Setup Time:</span>
                  <span className="font-semibold">{selectedBusiness.setupTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Operating Cost:</span>
                  <span className="text-red-400 font-semibold">${selectedBusiness.monthlyCost} in credits</span>
                </div>
                <div className="flex justify-between">
                  <span>Expected Monthly Revenue:</span>
                  <span className="text-green-400 font-semibold">${selectedBusiness.monthlyRevenue}</span>
                </div>
                <div className="flex justify-between text-lg border-t border-gray-700 pt-3">
                  <span className="font-bold">Net Monthly Profit:</span>
                  <span className="text-green-400 font-bold">${selectedBusiness.profit}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="font-bold">ROI:</span>
                  <span className="text-purple-400 font-bold">{selectedBusiness.roi}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={() => { alert(`Deploying ${selectedBusiness.name}! This will deduct ${selectedBusiness.monthlyCost} credits.`); setSelectedBusiness(null); }} className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition">
                Deploy for ${selectedBusiness.monthlyCost} Credits
              </button>
              <button onClick={() => setSelectedBusiness(null)} className="px-6 bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition">
                Cancel
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}

// Credits Page
function Credits() {
  const [balance, setBalance] = useState(1250);
  const [activeBusinesses, setActiveBusinesses] = useState([
    { name: 'YouTube Shorts Automation', status: 'Active', earned: 340, spent: 50 },
    { name: 'Affiliate Review Site', status: 'Active', earned: 580, spent: 35 }
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Your AI Credits</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl">
            <div className="text-sm text-blue-100 mb-2">Available Balance</div>
            <div className="text-5xl font-bold mb-4">{balance} Credits</div>
            <div className="text-blue-100">${(balance / 10).toFixed(2)} USD equivalent</div>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
            <div className="text-sm text-gray-400 mb-2">Total Earned This Month</div>
            <div className="text-5xl font-bold text-green-400 mb-4">$920</div>
            <div className="text-gray-400">From {activeBusinesses.length} active businesses</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Active Businesses</h2>
          {activeBusinesses.map((biz, idx) => (
            <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-0">
              <div>
                <div className="font-semibold">{biz.name}</div>
                <div className="text-sm text-gray-400">{biz.status}</div>
              </div>
              <div className="text-right">
                <div className="text-green-400 font-semibold">+${biz.earned}</div>
                <div className="text-sm text-gray-400">-{biz.spent} credits used</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div key={tier.name} className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-blue-400 mb-2">{tier.load}</div>
              <div className="text-gray-400 mb-4">{tier.credits} Credits</div>
              <button onClick={() => { alert(`Loading ${tier.credits} credits via Stripe...`); setBalance(balance + parseInt(tier.credits)); }} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition">
                Load Credits
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-800 border border-gray-700 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Withdraw Unused Credits</h3>
          <p className="text-gray-400 mb-4">Get 95% back (5% processing fee). Unused credits keep your businesses running.</p>
          <button onClick={() => { if (balance > 0) { const refund = balance * 0.095; alert(`Refund initiated: $${refund.toFixed(2)}`); setBalance(0); } }} className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Withdraw ${((balance / 10) * 0.95).toFixed(2)} USD
          </button>
        </div>
      </main>
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 p-6 text-center text-gray-400">
      <p>© 2025 AI Business Vault. Load credits once. Earn forever. Withdraw anytime.</p>
    </footer>
  );
}

// Main App
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
