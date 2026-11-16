import {useState,useMemo} from 'react';import {useSearchParams} from 'react-router-dom';import MovieCard from '../components/MovieCard';import {AnimText} from '../components/Anim';import {movies,genres} from '../data';
export default function Explore({favs,toggle,open}){const [q,setQ]=useState('');const [sp]=useSearchParams();const [g,setG]=useState(sp.get('genre')||'All');const [y,setY]=useState('All');const [s,setS]=useState('');
const years=[...new Set(movies.map(m=>m.year))].sort((a,b)=>b-a);
const list=useMemo(()=>{let l=movies.filter(m=>m.title.toLowerCase().includes(q.trim().toLowerCase())&&(g==='All'||m.genres.includes(g))&&(y==='All'||m.year===+y));
if(s==='rating')l=[...l].sort((a,b)=>b.rating-a.rating);if(s==='year')l=[...l].sort((a,b)=>b.year-a.year);return l},[q,g,y,s]);
const clear=()=>{setQ('');setG('All');setY('All');setS('')};
return <section className="wrap sec page"><AnimText as="h1" mode="chars" text="Explore Movies"/>
<div className="filters"><input placeholder="🔍 Search by title..." value={q} onChange={e=>setQ(e.target.value)}/>
<select value={g} onChange={e=>setG(e.target.value)}><option>All</option>{genres.map(x=><option key={x}>{x}</option>)}</select>
<select value={y} onChange={e=>setY(e.target.value)}><option>All</option>{years.map(x=><option key={x}>{x}</option>)}</select>
<select value={s} onChange={e=>setS(e.target.value)}><option value="">Sort by</option><option value="rating">Highest rating</option><option value="year">Newest release</option></select>
<button className="btn ghost" onClick={clear}>Clear Filters</button></div>
<p className="subt">{list.length} movie{list.length!==1&&'s'} found</p>
{list.length?<div className="grid">{list.map((m,i)=><MovieCard key={m.id} m={m} i={i} fav={favs.includes(m.id)} onFav={toggle} onOpen={open}/>)}</div>
:<div className="empty"><span>🎞️</span><h3>No movies match your search</h3><p>Try a different title or clear the filters.</p></div>}</section>}
