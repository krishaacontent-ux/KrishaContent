import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Menu, X, Sparkles, Instagram, Mail, Plus, Minus } from 'lucide-react';
import './styles.css';

const services = [
  { no: '01', title: 'Personal creations', subtitle: 'For the moments that deserve more than a camera roll.', items: 'Birthday films · Anniversary edits · Friendship memories · Digital gifts · Photo collages', tag: 'PERSONAL' },
  { no: '02', title: 'Weddings & events', subtitle: 'Your celebration, beautifully designed.', items: 'Digital invitations · Save the dates · Event reels · Welcome screens · Thank-you cards', tag: 'CELEBRATIONS' },
  { no: '03', title: 'Social & digital', subtitle: 'A presence that feels considered, consistent and unmistakably you.', items: 'Instagram posts · Carousels · Stories · Reels · Covers · Personal branding', tag: 'DIGITAL' },
  { no: '04', title: 'Brand & business', subtitle: 'Turning ideas into distinctive visual identities.', items: 'Brand identity · Campaigns · Promotional creatives · Presentations · Launch visuals', tag: 'STUDIO' },
  { no: '05', title: 'Creative editing', subtitle: 'When the idea needs more than a template.', items: 'Cinematic edits · Reel editing · Photo compositions · Retouching · AI-assisted concepts', tag: 'EDITING' },
  { no: '06', title: 'Creative direction', subtitle: 'You have the idea. We help shape it.', items: 'Concept development · Mood direction · Content guidance · Visual storytelling', tag: 'DIRECTION' },
];

const packages = [
  { title: 'Quick Create', price: '₹299', suffix: 'starting from', copy: 'For simple, beautiful ideas.', examples: 'Single designs, simple invitations, basic edits and social creatives', featured: false },
  { title: 'Signature Create', price: '₹699', suffix: 'starting from', copy: 'For ideas that deserve a little more.', examples: 'Personalized edits, reels, invitations, carousels, memory edits and digital gifts', featured: true },
  { title: 'Custom Experience', price: '₹1,500', suffix: 'starting from', copy: 'For something created completely around you.', examples: 'Cinematic memory films, custom stories, complex edits and highly personalized projects', featured: false },
];

const faqs = [
  { q: 'How do I start a project?', a: 'Share a few details through the enquiry form. We’ll understand your idea, ask any useful follow-up questions and recommend the best next step.' },
  { q: 'Can I request something that is not listed?', a: 'Absolutely. The menu is a starting point, not a limit. Custom concepts and projects are quoted according to the scope, complexity and deliverables.' },
  { q: 'How is pricing decided?', a: 'Pricing depends on creative complexity, time, deliverables, revisions and urgency. Business and larger brand projects receive a tailored quotation.' },
  { q: 'What happens after I enquire?', a: 'The usual flow is enquiry → creative direction → confirmation → creation → preview → revision → final delivery.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', project: 'Personal creation', budget: '', deadline: '', details: '' });
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState('');

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    setSending(true); setNotice('');
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong.');
      setNotice('Your enquiry is in the archive. We’ll be in touch soon.');
      setForm({ name: '', email: '', project: 'Personal creation', budget: '', deadline: '', details: '' });
    } catch (err) {
      setNotice('The form could not be submitted right now. Please email krishacontentstudio@gmail.com or message @krisha.content.');
    } finally { setSending(false); }
  };

  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <div className="announcement"><span>THE CREATIVE STUDIO</span><i>✦</i><span>DESIGN · EDITING · DIGITAL EXPERIENCES</span></div>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Krisha Content home">
          <span>KRISHA CONTENT</span><small>CREATIVE STUDIO</small>
        </a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#studio" onClick={closeMenu}>The studio</a><a href="#services" onClick={closeMenu}>Services</a><a href="#archive" onClick={closeMenu}>The archive</a><a href="#pricing" onClick={closeMenu}>Investment</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a project <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-meta"><span>INDEPENDENT CREATIVE STUDIO</span><span>EST. 2026 · AVAILABLE FOR COMMISSIONS</span></div>
          <div className="hero-center">
            <div className="hero-monogram"><img src="/assets/krisha-logo.png" alt="Krisha Content monogram" /></div>
            <p className="eyebrow">A CREATIVE STUDIO FOR STORIES & IDEAS</p>
            <h1>You bring the moment.<br/><em>We create the archive.</em></h1>
            <p className="hero-copy">Thoughtful design, considered editing and visual storytelling — made around the things you want to say, share and remember.</p>
            <div className="hero-actions"><a className="button button-dark" href="#contact">Begin your project <ArrowUpRight size={16}/></a><a className="text-link" href="#services">Explore the studio <ArrowDown size={14}/></a></div>
          </div>
          <div className="hero-bottom"><span>PERSONAL · SOCIAL · BRANDS</span><span className="signature">made with intention</span><span>01 / THE BEGINNING</span></div>
        </section>

        <section className="intro section-pad" id="studio">
          <div className="section-kicker"><span>01 — THE STUDIO</span><span>A LITTLE ABOUT US</span></div>
          <div className="intro-grid">
            <h2>Ideas are everywhere.<br/><em>Execution makes them memorable.</em></h2>
            <div className="intro-copy"><p>Krisha Content is a creative studio for people, creators, businesses and brands. From a birthday memory film to a campaign concept, every project begins by understanding what you want it to feel like.</p><p>You don’t need to arrive with every detail figured out. Bring the idea, the feeling or the reference — we’ll help shape the visual.</p><a className="underlined-link" href="#contact">Tell us what you’re imagining <ArrowUpRight size={15}/></a></div>
          </div>
          <div className="values-row"><div><span>01</span><b>Personal by nature</b><small>Created around your vision.</small></div><div><span>02</span><b>Thoughtfully directed</b><small>Every detail has a reason.</small></div><div><span>03</span><b>Carefully finished</b><small>Polished, purposeful, personal.</small></div></div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-kicker"><span>02 — WHAT WE CREATE</span><span>THE SERVICE EDIT</span></div>
          <div className="section-heading"><h2>Different stories.<br/><em>One creative signature.</em></h2><p>Choose a direction, or let’s build something entirely your own.</p></div>
          <div className="service-grid">
            {services.map((s) => <article className="service-card" key={s.no}><div className="service-top"><span>{s.no} / {s.tag}</span><ArrowUpRight size={17}/></div><h3>{s.title}</h3><p className="service-sub">{s.subtitle}</p><div className="service-rule"></div><p className="service-items">{s.items}</p><a href={`#contact`} onClick={() => setForm({ ...form, project: s.title })}>Discuss this service <span>↗</span></a></article>)}
          </div>
          <div className="service-foot"><Sparkles size={16}/><span>Have an idea that doesn’t fit a category? That’s where the interesting projects begin.</span><a href="#contact">Let’s talk <ArrowUpRight size={14}/></a></div>
        </section>

        <section className="archive section-pad" id="archive">
          <div className="section-kicker light"><span>03 — THE ARCHIVE</span><span>A CURATED CREATIVE COLLECTION</span></div>
          <div className="archive-layout">
            <div className="archive-intro"><p className="eyebrow">NOT JUST ANOTHER GALLERY</p><h2>Every project<br/>has a <em>story.</em></h2><p>Finished work, creative experiments and visual ideas — collected as chapters, not just posts.</p><a className="button button-ivory" href="#contact">Create your archive <ArrowUpRight size={16}/></a></div>
            <div className="archive-art">
              <div className="archive-paper"><span className="archive-number">ARCHIVE 001 / 2026</span><div className="paper-mark">KC</div><p className="script">some moments deserve more</p><h3>THAN A CAMERA ROLL.</h3><div className="paper-line"></div><small>PERSONAL STORIES · VISUAL EXPERIENCES</small></div>
              <div className="archive-stamp">THE<br/>ARCHIVE<br/><span>✦</span></div>
              <span className="art-caption">A COLLECTION OF IDEAS, STORIES & MOMENTS</span>
            </div>
          </div>
          <div className="archive-categories"><span>ARCHIVE — PERSONAL</span><span>ARCHIVE — CELEBRATIONS</span><span>STUDIO — BRANDS</span><span>STUDIO — SOCIAL</span><span>SPOTLIGHT — CONCEPTS</span></div>
        </section>

        <section className="process section-pad">
          <div className="section-kicker"><span>04 — THE EXPERIENCE</span><span>UNDERSTAND FIRST. CREATE SECOND.</span></div>
          <div className="process-grid"><div><h2>A process that feels<br/><em>as good as the result.</em></h2><p>Working with Krisha should feel easy, clear and personal — from the first message to the final file.</p></div><div className="process-steps">{[['01','Enquiry','Tell us what you have in mind.'],['02','Creative direction','We align on the mood, purpose and deliverables.'],['03','Creation','Your idea becomes a considered visual experience.'],['04','Preview & refine','Review the work and share feedback within the agreed revisions.'],['05','Final delivery','Receive your finished files, ready to share or keep.']].map(([n,t,d])=><div className="process-step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={15}/></div>)}</div></div>
        </section>

        <section className="pricing section-pad" id="pricing">
          <div className="section-kicker"><span>05 — INVESTMENT</span><span>MADE TO FIT THE IDEA</span></div>
          <div className="section-heading"><h2>Good work begins<br/><em>with a good conversation.</em></h2><p>Clear starting points for smaller projects. Tailored quotes for ideas that need more room.</p></div>
          <div className="pricing-grid">{packages.map((p, i)=><article className={`price-card ${p.featured ? 'featured' : ''}`} key={p.title}><div className="price-top"><span>0{i+1} / {p.title.toUpperCase()}</span>{p.featured && <span className="popular">SIGNATURE</span>}</div><h3>{p.title}</h3><p>{p.copy}</p><div className="price"><small>{p.suffix}</small><strong>{p.price}<span>+</span></strong></div><div className="price-divider"></div><p className="price-examples">{p.examples}</p><a href="#contact" onClick={() => setForm({ ...form, budget: p.title })}>Enquire about this <ArrowUpRight size={14}/></a></article>)}</div>
          <p className="pricing-note">Business and larger brand projects are quoted separately according to scope. Final pricing depends on complexity, time, creativity, deliverables and revisions.</p>
        </section>

        <section className="faq section-pad">
          <div className="section-kicker"><span>06 — A FEW DETAILS</span><span>BEFORE WE BEGIN</span></div>
          <div className="faq-layout"><h2>Good to<br/><em>know.</em></h2><div className="faq-list">{faqs.map((f, i)=><div className="faq-item" key={f.q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{f.q}</span>{openFaq === i ? <Minus size={17}/> : <Plus size={17}/>}</button>{openFaq === i && <p>{f.a}</p>}</div>)}</div></div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-heading"><div className="section-kicker light"><span>07 — START A PROJECT</span><span>COMMISSIONS & ENQUIRIES</span></div><h2>Let’s make something<br/><em>worth remembering.</em></h2><p>Tell us a little about your idea. The first step doesn’t need to be perfectly figured out.</p><div className="contact-social"><a href="https://instagram.com/krisha.content" target="_blank" rel="noreferrer"><Instagram size={16}/> @krisha.content <ArrowUpRight size={14}/></a><a href="mailto:krishacontentstudio@gmail.com"><Mail size={16}/> Email the studio <ArrowUpRight size={14}/></a></div></div>
          <form className="enquiry-form" onSubmit={submit}><div className="form-title"><span>YOUR PROJECT BRIEF</span><span>TAKES ABOUT 2 MINUTES</span></div><div className="form-row"><label>Your name<input name="name" value={form.name} onChange={update} placeholder="What should we call you?" required /></label><label>Email address<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label></div><div className="form-row"><label>What are we creating?<select name="project" value={form.project} onChange={update}><option>Personal creation</option><option>Weddings & events</option><option>Social & digital</option><option>Brand & business</option><option>Creative editing</option><option>Creative direction</option><option>Something else</option></select></label><label>Budget / package<select name="budget" value={form.budget} onChange={update}><option value="">Not sure yet</option><option>Quick Create</option><option>Signature Create</option><option>Custom Experience</option><option>Business / brand quote</option></select></label></div><label>Ideal deadline<input type="text" name="deadline" value={form.deadline} onChange={update} placeholder="e.g. 20 November, flexible, or not decided" /></label><label>Tell us about your idea<textarea name="details" value={form.details} onChange={update} rows="4" placeholder="The occasion, the feeling, the deliverables, any references you have..." required /></label><button className="button button-ivory submit-button" type="submit" disabled={sending}>{sending ? 'Sending your enquiry…' : 'Send project enquiry'} <ArrowUpRight size={16}/></button>{notice && <p className="form-notice" role="status">{notice}</p>}<small className="form-privacy">Your details are used only to respond to your project enquiry.</small></form>
        </section>
      </main>

      <footer className="footer"><a className="footer-brand" href="#home">KRISHA CONTENT <span>✦</span></a><p>You bring the moment. We create the archive.</p><div><a href="#services">Services</a><a href="#archive">The archive</a><a href="https://instagram.com/krisha.content" target="_blank" rel="noreferrer">Instagram ↗</a></div><small>© 2026 KRISHA CONTENT · THE CREATIVE ARCHIVE</small></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);