import {useInView} from './Anim';
/* anim: up | zoom | flip | left | right | drop */
export default function MovieCard({m,fav,onFav,onOpen,i=0,anim='up'}){const [r,v]=useInView();
return <article ref={r} className={`card a-${anim} ${v?'in':''}`} style={{animationDelay:`${(i%6)*.09}s`}} onClick={()=>onOpen(m)}>
<div className="poster"><img loading="lazy" src={m.poster} alt={m.title} onError={e=>e.target.style.opacity=0}/>
<span className="rate">★ {m.rating}</span>
<button className={`heart ${fav?'on':''}`} aria-label="Toggle favourite" onClick={e=>{e.stopPropagation();onFav(m.id)}}>{fav?'♥':'♡'}</button>
<div className="hov"><span>▶ View details</span></div></div>
<div className="info"><h3>{m.title}</h3><p>{m.year} · {m.genres.join(', ')}</p></div></article>}
