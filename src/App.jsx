import Hero from "./componet/Hero.jsx";
import About from "./componet/About.jsx";
import Navbar from "./componet/Navbar.jsx";
import Features from "./componet/Features.jsx";
import Story from "./componet/Story.jsx";
import Contact from "./componet/Contact.jsx";
import Footer from "./componet/Footer.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />
        </main>
    )
}
export default App
