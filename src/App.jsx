import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Services2 from './components/Services2'
import Support from './components/Support'

function App() {
  return (
    <main className='w-screen h-screen bg-slate-100 overflow-x-hidden overflow-y-scroll md:px-6'>
      <div className='container mx-auto text-slate-600 '>
        <Hero />
        <Services />
        <Services2 />
        <Support />
        <Footer />
      </div>
    </main>
  )
}

export default App
