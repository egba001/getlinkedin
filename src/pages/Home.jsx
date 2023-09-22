import Faq from "../components/home/Faq";
import Overview from "../components/home/Overview";
import Timeline from "../components/home/Timeline";
import Header from "../components/home/Header";
import Prizes from "../components/home/Prizes";
import Partners from "../components/home/Partners";
import Privacy from "../components/home/Privacy";
import Footer from "../components/home/Footer";
import HomeLayout from "../layout/HomeLayout";


const Home = () => {
    return (
        <HomeLayout>
            <Header />
            <Overview />
            <Faq />
            <Timeline />
            <Prizes />
            <Partners />
            <Privacy />
            <Footer />
        </HomeLayout>
    )
}

export default Home;