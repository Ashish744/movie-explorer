import {useState,useEffect} from 'react';import {Routes,Route,useLocation} from 'react-router-dom';
import Preloader from './components/Preloader';import Footer from './components/Footer';import Legal from './pages/Legal';import Navbar from './components/Navbar';import Modal from './components/Modal';import Home from './pages/Home';import Explore from './pages/Explore';import Favourites from './pages/Favourites';import {movies} from './data';
const KEY='movie-explorer-favs';
export default function App(){
const [favs,setFavs]=useState(()=>{try{return JSON.parse(localStorage.getItem(KEY))||[]}catch{return[]}});
const [sel,setSel]=useState(null);
useEffect(()=>{localStorage.setItem(KEY,JSON.stringify(favs))},[favs]);
const {pathname}=useLocation();useEffect(()=>{scrollTo(0,0)},[pathname]);
const toggle=id=>setFavs(f=>f.includes(id)?f.filter(x=>x!==id):[...f,id]);
const p={favs,toggle,open:setSel};
return <>
<Preloader/>
<Navbar favCount={favs.length}/>
<main><Routes><Route path="/" element={<Home {...p}/>}/><Route path="/explore" element={<Explore {...p}/>}/><Route path="/legal/:doc" element={<Legal/>}/><Route path="/favourites" element={<Favourites {...p}/>}/></Routes></main>
<Footer/>
{sel&&<Modal m={sel} fav={favs.includes(sel.id)} onFav={toggle} onClose={()=>setSel(null)}/>}</>}
