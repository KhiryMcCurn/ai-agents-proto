import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Dialog } from '@headlessui/react'; // npm install @headlessui/react for modals

// Mock data (replace with API fetches later)
const TIERS = [
  { name: 'Basic', load: '$30', credits: '300', quests: 'Light chats/tools' },
  { name: 'Pro', load: '$250', credits: '2,500', quests: 'Full agents/speed' },
  { name: 'Platinum', load: '$2,000', credits: '20,000', quests: 'Unlimited priority' },
];

const TEMPLATES = [
  { id: 1, name: 'Video Quest', desc: 'Text to long-form vid (Wan2.2 stitch)', cost: 5, roi: '$2k/mo ads' },
  { id: 2, name: 'AI Trader', desc: 'Portfolio rebalance + triggers', cost: 10, roi: '+12% gains' },
  { id: 3, name: 'Affiliate Hunter', desc: 'Trends to review vids + posts', cost: 7, roi: '$1k/mo passive' },
];

// Header Component (Shared Nav)
function Header() {
  const [isDark, setIsDark] = useState(false);
  return (
    <nav className="bg-gray-900 dark:bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-400">AI Agents Vault</Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
        <Link to="/credits" className="text-gray-300 hover:text-white">Credits</Link>
        <Link to="/templates" className="text-gray-300 hover:text-white">Templates</Link>
        <button onClick={() => setIsDark(!isDark)} className="text-gray-300">🌙</button>
        <AuthModal />
      </div>
    </nav>
  );
}

// Auth Modal (Login/Signup Toggle)
function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Login/Signup</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <Dialog.Panel className="bg-white p-6 rounded max-w-md w-full">
          <h2 className="text-xl mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form onSubmit={(e) => { e.preventDefault(); /* [FUNCTIONALITY: Auth API call to backend (e.g., Supabase Auth.signInWithPassword)] */ alert('Auth submitted!'); setIsOpen(false); }}>
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-2 border mb-2" required />
            <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full p-2 border mb-4" required />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mb-2">Submit</button>
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="w-full text-gray-500">Switch to {isLogin ? 'Sign Up' : 'Login'}</button>
          </form>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

// Landing Page
function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <Header />
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-5xl font-bold mb-4">Ditch Subs. Power Agents with Credits.</h1>
        <p className="text-xl mb-8">Load refundable credits once—run unlimited quests that build your hustle. Unused? Withdraw anytime.</p>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {TIERS.map((tier) => (
            <div key={tier.name} className="bg-gray-800 p-4 rounded">
              <h3 className="text-2xl">{tier.name}</h3>
              <p>Load: {tier.load} = {tier.credits} Credits</p>
              <p>{tier.quests}</p>
              <Link to="/credits" className="block bg-blue-500 p-2 rounded mt-2">Load Now</Link>
            </div>
          ))}
        </div>
        <p className="text-lg">First Quest Free: Try 'Video Quest' Below.</p>
        {/* [FUNCTIONALITY: CTA button triggers Stripe Checkout API via backend webhook] */}
        <button className="bg-green-500 text-white px-6 py-3 rounded mt-4">Start Free Quest</button>
      </main>
    </div>
  );
}

// Credits Page
function Credits() {
  const [balance, setBalance] = useState(0); // Mock; fetch from backend
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl mb-4">Your AI Credits</h1>
        <div className="bg-gray-800 p-6 rounded mb-6">
          <p className="text-2xl">Balance: {balance} Credits</p>
          {/* [FUNCTIONALITY: Fetch real balance via backend API (e.g., GET /user/credits)] */}
        </div>
        <div className="space-y-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded w-full" onClick={() => { /* [FUNCTIONALITY: Stripe Checkout session creation via backend (e.g., POST /create-checkout-session)] */ alert('Redirect to Stripe...'); setBalance(balance + 300); }}>
            Load $30 Pack (300 Credits)
          </button>
          <button className="bg-red-500 text-white px-6 py-3 rounded w-full" onClick={() => { /* [FUNCTIONALITY: Refund API call (Stripe refund, deduct 5% fee)] */ if (balance > 0) { alert('Refund processed!'); setBalance(balance - 10); } }}>
            Withdraw Unused (95% Back)
          </button>
        </div>
        <p className="mt-4 text-gray-400">Breakage: Unused credits fund your next quest—zero waste.</p>
      </main>
    </div>
  );
}

// Templates Page
function Templates() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl mb-4">Quest Templates: Ready-to-Earn Agents</h1>
        <p className="mb-6">Pick a quest—deducts credits, runs on-demand GPU. See ROI in action.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {TEMPLATES.map((template) => (
            <div key={template.id} className="bg-gray-800 p-4 rounded cursor-pointer hover:bg-gray-700" onClick={() => { /* [FUNCTIONALITY: Deduct credits via backend (e.g., POST /run-quest), trigger RunPod webhook for GPU spin, return output to dashboard] */ alert(`${template.name} running! Cost: ${template.cost} credits. Projected: ${template.roi}`); }}>
              <h3 className="text-xl">{template.name}</h3>
              <p>{template.desc}</p>
              <p className="text-green-400">Cost: {template.cost} Credits | ROI: {template.roi}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// Footer (Shared)
function Footer() {
  return <footer className="bg-gray-800 p-4 text-center text-gray-400">© 2025 AI Agents Vault. Refundable credits, no BS.</footer>;
}

// Main App Router
function App() {
  return (
    <Router>
      <div className="dark"> {/* Tailwind dark mode wrapper */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/templates" element={<Templates />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
