import {useState,useEffect} from 'react';import {NavLink,Link} from 'react-router-dom';
export default function Navbar({favCount}){const [open,setOpen]=useState(false);const [sc,setSc]=useState(false);
useEffect(()=>{const f=()=>setSc(scrollY>20);addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
const c=()=>setOpen(false);
return <header className={`nav ${sc?'sc':''}`}><div className="wrap bar">
<Link to="/" onClick={c}><img className="logo" src="/logo.webp" alt="Stackly"/></Link>
<button className="burger" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button>
<nav className={open?'links open':'links'}>
<NavLink to="/" end onClick={c}>Home</NavLink><NavLink to="/explore" onClick={c}>Explore Movies</NavLink>
<NavLink to="/favourites" onClick={c}>Favourites{favCount>0&&<b className="badge">{favCount}</b>}</NavLink></nav></div></header>}
