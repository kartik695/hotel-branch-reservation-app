 
import "./home.css";
import Navbar from "../../components/navbar/navbar1/Navbar";
import Header from "../../components/navbar/header/Header";
import Featured from "../../components/navbar/featured/Featured";
import PropertyList from "../../components/navbar/propertyList/PropertyList";
import FeaturedProperties from "../../components/navbar/featuredProperties/FeaturedProperties";
import MailList from "../../components/navbar/mailList/MailList";
import Footer from "../../components/navbar/footer/Footer";
const Home = () => {
  return (
    <div>
          <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guest Love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer/>
      </div>
          
    </div>
  )
}

export default Home
