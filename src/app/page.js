import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Slider from './components/slider';
import Cards from './components/cards';
import Contact from './components/contacts';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Next.js Bootstrap Home Page" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>

        <script>var Alert = ReactBootstrap.Alert;</script>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
      
      <Slider/>

      <div className="Services" style={{ marginTop: '40px' , backgroundColor: 'lightblue', padding: '20px', marginBottom: '20px'}} >
      
        <Cards />

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <div style={{ backgroundColor: 'lightblue', padding: '30px' }}>
        <Contact />
      </div>
    </div>
      
        <div className="container">
          <h1 className="mt-5">Welcome to Next.js with Bootstrap</h1>
          <p className="lead">This is a simple home page example using Next.js and Bootstrap.</p>
          <p>You can start building your awesome Next.js application from here!</p>
        </div>
      </main>

      <footer className="footer mt-auto py-3 bg-light">
        <div className="container" style={{ marginTop: '40px' , backgroundColor: 'lightblue' }}>
          <span className="text-muted">Footer content here.</span>
        </div>
      </footer>
    </div>
  )
}