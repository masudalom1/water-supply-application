import './careers.css'
function Careers(){
    return(<>
     <div className="career-container">
      <h1>Careers at Digital Water Management Solutions</h1>
      <p>Be a part of a global movement dedicated to addressing one of the most pressing environmental challenges: water scarcity and management. At Digital Water Management Solutions, we believe in the power of technology to create sustainable change.</p>

      <section className="why-join">
        <h2>Why Join Us?</h2>
        <ul>
          <li>Work on projects that have a direct impact on global water management and sustainability.</li>
          <li>Collaborate with a diverse team of experts in web technologies, data science, and environmental engineering.</li>
          <li>Access to cutting-edge tools and platforms designed to innovate the future of water governance.</li>
        </ul>
      </section>

      <section className="open-positions">
        <h2>Current Open Positions</h2>
        <ul>
          <li><strong>Full Stack Developer (React/Node.js):</strong> Help build our web-based platforms for real-time water monitoring and data analysis.</li>
          <li><strong>Data Scientist (Water Resources Focus):</strong> Utilize data analytics and AI to drive decision-making in water management.</li>
          <li><strong>Project Manager (Sustainability Projects):</strong> Lead cross-functional teams in developing and deploying water management solutions.</li>
        </ul>
        <p>Interested candidates can send their resume and cover letter to <strong>careers@digitalwater.com</strong>.</p>
      </section>

      <section className="benefits">
        <h2>Employee Benefits</h2>
        <ul>
          <li>Competitive salary and benefits packages.</li>
          <li>Opportunities for professional growth and development.</li>
          <li>Flexible work environment with remote work options.</li>
        </ul>
      </section>
    </div>
    </>)
}

export default Careers;