import {useEffect,useState} from 'react';
export default function Preloader(){const [p,setP]=useState(0);const [hide,setHide]=useState(false);const [gone,setGone]=useState(false);
useEffect(()=>{const t=setInterval(()=>setP(x=>Math.min(100,x+1)),24);return()=>clearInterval(t)},[]);
useEffect(()=>{if(p<100)return;const a=setTimeout(()=>setHide(true),400),b=setTimeout(()=>setGone(true),1600);return()=>{clearTimeout(a);clearTimeout(b)}},[p]);
if(gone)return null;const C=2*Math.PI*60;
return <div className={`ld ${hide?'hide':''}`}><div className="cur cl"/><div className="cur cr"/>
<div className="lc"><img className="ldlogo" src="/logo.webp" alt="Stackly"/>
<div className="pb"><svg className="rg" viewBox="0 0 130 130"><circle cx="65" cy="65" r="60" className="rgbg"/><circle cx="65" cy="65" r="60" className="rgfg" strokeDasharray={C} strokeDashoffset={C*(1-p/100)}/></svg>
<div className="pbtn"><span className="ring r1"/><span className="ring r2"/><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></div></div>
<p className="pct">{p}%</p><p className="ldt">{[...'NOW LOADING YOUR CINEMA'].map((c,i)=><span key={i} style={{animationDelay:`${i*.06}s`}}>{c===' '?'\u00A0':c}</span>)}</p></div></div>}
