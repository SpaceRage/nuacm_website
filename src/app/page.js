import Home from './components/Home';
import Events from './components/Events';
// import ContactUs from './components/ContactUs';

export default function HomePage() {
  return (
    <main>
      <section id="home">
        <Home />
      </section>
      
      <section id="events">
        <Events />
      </section>
      
      {/* <section id="contact-us">
        <ContactUs />
      </section> */}
    </main>
  );
}
