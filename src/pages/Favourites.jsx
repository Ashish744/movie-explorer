import {Link} from 'react-router-dom';import MovieCard from '../components/MovieCard';import {AnimText} from '../components/Anim';import {movies} from '../data';
export default function Favourites({favs,toggle,open}){const list=movies.filter(m=>favs.includes(m.id));
return <section className="wrap sec page"><AnimText as="h1" mode="words" text="Your Favourites"/>
{list.length?<div className="grid">{list.map((m,i)=><MovieCard key={m.id} m={m} i={i} fav onFav={toggle} onOpen={open}/>)}</div>
:<div className="empty"><span>💔</span><h3>No favourite movies yet</h3><p>Tap the heart on any movie to save it here.</p><Link className="btn" to="/explore">Explore Movies</Link></div>}</section>}
