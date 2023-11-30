'use client';
import Movies from './components/getMovies';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
export default function Home() {
  return (
    <main>
      <div>
    <Navbar/>
    <Movies/>
    <Footer/>
      </div>
    </main>
  )
}