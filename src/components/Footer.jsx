import {Link} from 'react-router-dom';
const s={fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'};
const social=[
['Instagram',<svg viewBox="0 0 24 24" {...s}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>],
['YouTube',<svg viewBox="0 0 24 24" {...s}><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/></svg>],
['X',<svg viewBox="0 0 24 24" {...s}><path d="M4 4l16 16M20 4L4 20"/></svg>],
['Facebook',<svg viewBox="0 0 24 24" {...s}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/></svg>],
['LinkedIn',<svg viewBox="0 0 24 24" {...s}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 0 1 5 0v3"/></svg>]];
export default function Footer(){
return <footer className="foot">
<div className="wrap fcta"><div><h3>Ready for movie night?</h3><p>Pick a story, press play and lose yourself in cinema.</p></div>
<Link to="/explore" className="play" aria-label="Start watching"><span className="ring r1"/><span className="ring r2"/><span className="ring r3"/><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></Link></div>
<div className="wrap fgrid">
<div><img className="logo" src="/logo.webp" alt="Stackly"/><p className="fabout">Discover, search and save the movies you love. Your personal cinema companion.</p>
<div className="soc">{social.map(([n,i])=><a key={n} href="#" onClick={e=>e.preventDefault()} aria-label={n} title={n}>{i}</a>)}</div></div>
<div><h4>Explore</h4><Link to="/">Home</Link><Link to="/explore">Explore Movies</Link><Link to="/favourites">Favourites</Link></div>
<div><h4>Legal</h4><Link to="/legal/terms">Terms of Service</Link><Link to="/legal/privacy">Privacy Policy</Link><Link to="/legal/cookies">Cookie Policy</Link></div>
<div><h4>Contact</h4><a href="mailto:hello@stackly.com">hello@stackly.com</a><a href="#" onClick={e=>e.preventDefault()}>Bengaluru, India</a></div></div>
<div className="wrap fbar"><span>© 2026 Movie Explorer. Posters are Unsplash placeholders; movie data is fictional.</span>
<span className="fl"><Link to="/legal/terms">Terms</Link><Link to="/legal/privacy">Privacy</Link><Link to="/legal/cookies">Policy</Link></span></div></footer>}
