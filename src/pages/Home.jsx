import {useState,useEffect} from 'react';import {Link} from 'react-router-dom';
import MovieCard from '../components/MovieCard';import {AnimText,Reveal,CountUp,useInView} from '../components/Anim';import {movies,genres} from '../data';
const slides=[1,2,5,11].map(id=>movies.find(m=>m.id===id));
const reviews=[["Priya N.","Film student","I found three hidden gems in one evening. The filters are so fast and the layout is gorgeous.","photo-1573164713714-d95e436ab8d6"],["Daniel M.","Weekend binger","Favourites that survive a refresh? Finally. It is my go-to list for movie night with friends.","photo-1560250097-0b93528c311a"],["Sara K.","Casual viewer","Clean, quick and beautiful. The detail pop-up with cast and director is exactly what I wanted.","photo-1580489944761-15a19d654956"]];
function GenreTile({g,i}){const [r,v]=useInView();const m=movies.find(x=>x.genres.includes(g));const n=movies.filter(x=>x.genres.includes(g)).length;
return <Link ref={r} to={`/explore?genre=${encodeURIComponent(g)}`} className={`gt ${v?'in':''}`} style={{backgroundImage:`url(${m.poster})`,animationDelay:`${(i%6)*.08}s`}}><div><h3>{g}</h3><p>{n} movie{n>1&&'s'}</p></div></Link>}
export default function Home({favs,toggle,open}){const [i,setI]=useState(0);const s=slides[i];
useEffect(()=>{const t=setInterval(()=>setI(x=>(x+1)%slides.length),5000);return()=>clearInterval(t)},[]);
const trending=[...movies].sort((a,b)=>b.rating-a.rating).slice(0,6);
const popular=[...movies].sort((a,b)=>b.year-a.year).slice(0,8);
const top10=[...movies].sort((a,b)=>b.rating-a.rating).slice(0,10);
const card=(m,k,anim)=><MovieCard key={m.id} m={m} i={k} anim={anim} fav={favs.includes(m.id)} onFav={toggle} onOpen={open}/>;
return <>
<section className="hero">{slides.map((x,k)=><div key={x.id} className={`hbg ${k===i?'on':''}`} style={{backgroundImage:`url(${x.backdrop})`}}/>)}<div className="shade"/>
<div className="wrap hc"><div className="ht" key={s.id}><span className="pill">🔥 Featured · {i+1}/{slides.length}</span>
<AnimText as="h1" mode="chars" text={s.title}/>
<p className="meta fu" style={{animationDelay:'.5s'}}><b>★ {s.rating}</b> · {s.year} · {s.genres.join(' / ')}</p>
<p className="lead fu" style={{animationDelay:'.7s'}}>{s.desc}</p>
<div className="acts fu" style={{animationDelay:'.9s'}}><button className="btn" onClick={()=>open(s)}>▶ More Info</button><Link className="btn ghost" to="/explore">Browse Movies</Link></div></div>
<img key={'p'+s.id} className="hposter" src={s.poster} alt={s.title} onError={e=>e.target.style.opacity=0}/></div>
<div className="dots">{slides.map((x,k)=><button key={x.id} aria-label={x.title} className={k===i?'on':''} onClick={()=>setI(k)}>{k===i&&<i key={i}/>}</button>)}</div></section>
<div className="tick"><div>{[...genres,...genres,...genres].map((g,k)=><span key={k}>🎬 {g}</span>)}</div></div>

<section className="wrap sec"><AnimText text="Trending Now" mode="words"/><Reveal><p className="subt">The highest-rated movies everyone is talking about this week.</p></Reveal><div className="grid">{trending.map((m,k)=>card(m,k,'zoom'))}</div></section>

<section className="wrap sec"><AnimText text="Browse by Genre" mode="chars"/><Reveal><p className="subt">Pick a mood and jump straight into the movies that match it.</p></Reveal><div className="gg">{genres.map((g,k)=><GenreTile key={g} g={g} i={k}/>)}</div></section>

<section className="wrap sec"><AnimText text="Top 10 This Week" mode="wipe"/><Reveal><p className="subt">Ranked by rating. Scroll sideways to see the full countdown.</p></Reveal>
<div className="t10">{top10.map((m,k)=><div className="t10i" key={m.id}><span className="num">{k+1}</span>{card(m,k,'right')}</div>)}</div></section>

<section className="wrap sec"><AnimText text="Popular & New Releases" mode="shine"/><Reveal><p className="subt">Fresh arrivals and crowd favourites from the latest seasons.</p></Reveal><div className="grid">{popular.map((m,k)=>card(m,k,'flip'))}</div>
<Reveal className="c"><Link className="btn big" to="/explore">View All Movies →</Link></Reveal></section>

<section className="statband"><div className="wrap sg">{[[12,'K+','Movie lovers'],[50,'K+','Favourites saved'],[150,'+','Titles to explore'],[98,'%','Happy viewers']].map(([n,sx,l],k)=><Reveal key={l} delay={k*.12} className="stat"><CountUp to={n} suffix={sx}/><span>{l}</span></Reveal>)}</div></section>

<section className="wrap sec"><AnimText text="What Movie Fans Say" mode="flip"/><Reveal><p className="subt">Real stories from people who found their next favourite watch.</p></Reveal>
<div className="rg3">{reviews.map(([n,r,t,img],k)=><Reveal key={n} delay={k*.15} className="rev"><div className="stars">★★★★★</div><p>“{t}”</p><div className="who"><img loading="lazy" src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=120&q=80`} alt={n} onError={e=>e.target.style.opacity=0}/><div><b>{n}</b><small>{r}</small></div></div></Reveal>)}</div></section>

<section className="wrap sec feats">{[['🎬','Discover','Search and filter by genre, year and rating.'],['❤️','Save','Build a favourites list that stays after refresh.'],['⭐','Rate','Compare ratings and find your next watch.']].map(([ic,t,d],k)=><Reveal key={t} delay={k*.15} className="feat"><div className="fi">{ic}</div><h3>{t}</h3><p>{d}</p></Reveal>)}</section></>}
