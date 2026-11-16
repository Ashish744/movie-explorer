import {useEffect,useRef,useState} from 'react';
export function useInView(){const r=useRef(null);const [v,setV]=useState(false);
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);o.disconnect()}},{threshold:.15});o.observe(r.current);return()=>o.disconnect()},[]);return [r,v]}
/* modes: chars (rise) | words (blur-in) | flip (3D letters) | wipe (reveal) | shine (shimmer) */
export function AnimText({text,mode='words',as:T='h2',className=''}){const [r,v]=useInView();
const cls=`${mode} ${v?'in':''} ${className}`;
if(mode==='wipe'||mode==='shine')return <T ref={r} className={cls}>{text}</T>;
const parts=mode==='words'?text.split(' '):[...text];const d=mode==='words'?.12:.035;
return <T ref={r} className={cls} aria-label={text}>{parts.map((p,i)=><span key={i} aria-hidden style={{animationDelay:`${i*d}s`}}>{p===' '?'\u00A0':p}{mode==='words'&&'\u00A0'}</span>)}</T>}
export function Reveal({children,className='',delay=0}){const [r,v]=useInView();return <div ref={r} style={{transitionDelay:`${delay}s`}} className={`rv ${v?'in':''} ${className}`}>{children}</div>}
export function CountUp({to,suffix=''}){const [r,v]=useInView();const [n,setN]=useState(0);
useEffect(()=>{if(!v)return;let c=0;const s=Math.max(1,Math.ceil(to/50));const t=setInterval(()=>{c=Math.min(to,c+s);setN(c);if(c>=to)clearInterval(t)},30);return()=>clearInterval(t)},[v,to]);
return <b ref={r}>{n.toLocaleString()}{suffix}</b>}
