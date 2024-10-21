import video from "../../assets/water_home.mp4"
import "./home.css"
function Home(){
    return(<>
     <div className="video-container">
      <video autoPlay muted loop className="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <h1 className="fade-in">Getting safe water <br /> is no more rocket science!</h1>
        <p className="fade-in">Saving water, often taken for granted in areas with a regular supply, becomes crucial when considering global population growth and climate change. As resources tighten, saving water becomes imperative. So before we explore some of the save water quotes, let's explore the importance of water conservation first.</p>
      </div>
    </div>
    <div className="home-container">
      <section className="hero">
        <h1>Empowering Water Management through Digital Innovation</h1>
        <p>Welcome to the future of sustainable water management. By integrating advanced web technologies, we help regions overcome water scarcity, improve resource allocation, and optimize water governance.</p>
        <button className="cta-button">Learn More</button>
      </section>

      <section className="features">
        <h2>Our Solutions</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Real-Time Monitoring</h3>
            <p>Track water levels, quality, and usage in real-time using our state-of-the-art web platforms.</p>
          </div>
          <div className="feature-item">
            <h3>Data Management Systems</h3>
            <p>Leverage our comprehensive data tools to analyze and manage large-scale water resources efficiently.</p>
          </div>
          <div className="feature-item">
            <h3>Decision Support Tools</h3>
            <p>Enhance decision-making with AI-driven insights and predictive analytics for sustainable water management.</p>
          </div>
        </div>
      </section>

      <section className="case-studies">
        <h2>Case Studies</h2>
        <p>Explore how our platform has helped regions like Delhi, Mumbhai, and Pune tackle critical water management issues.</p>
        <button className="cta-button">View Case Studies</button>
      </section>
    </div>

    </>)
}

export default Home