import {useEffect} from 'react';
export default function Modal({m,fav,onFav,onClose}){
useEffect(()=>{const k=e=>e.key==='Escape'&&onClose();addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{removeEventListener('keydown',k);document.body.style.overflow=''}},[onClose]);
return <div className="overlay" onClick={onClose}><div className="modal" onClick={e=>e.stopPropagation()}>
<button className="x" onClick={onClose} aria-label="Close">✕</button>
<div className="mbg" style={{backgroundImage:`url(${m.backdrop})`}}><div className="fade"/></div>
<div className="mbody"><h2>{m.title}</h2><p className="meta"><b>★ {m.rating}</b> · {m.year} · {m.genres.join(' / ')}</p>
<p>{m.desc}</p><p className="meta"><b>Director:</b> {m.director}</p><p className="meta"><b>Cast:</b> {m.cast.join(', ')}</p>
<button className="btn" onClick={()=>onFav(m.id)}>{fav?'♥ Remove from Favourites':'♡ Add to Favourites'}</button></div></div></div>}
