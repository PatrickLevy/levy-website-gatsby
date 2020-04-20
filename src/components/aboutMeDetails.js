import React from 'react';

function AboutMeDetails (props) {
  return (
    <div>
      <h1 style={{fontFamily: 'Courier New, Courier, monospace'}}>Patrick Levy</h1>
      <section className="summary">
        <p>
          I'm a software developer in Saint Paul, MN.
          My career has taken a rather roundabout journey but I have loved every stop along the way.
          I have worked in analytical chemistry, taught high school, and am now a software developer working in industrial IoT.
        </p>
        <p>
          School has always been enjoyable to me.
          I have bachelor's degrees in Chemistry and Computer Science and a master's degree in Secondary Science Education.
        </p>
        <p>
          I probably most enjoy writing JavaScript for the frontend and am well versed in React, Vue, and GraphQL.
          I also enjoy dabbling in React Native, Python, Ruby, and GoLang.
        </p>
        <p>
          I consider myself a bit of a maker and enjoy side projects as a way to keep learning new skills.
          You can visit a project that I have been working on for teaching high school chemistry at <a href="https://www.grokchemistry.com" target="_blank">www.grokchemistry.com</a>.
        </p>
      </section>
      <section className="socialLinks">
        <p>
          <a href="https://github.com/patricklevy" target="_blank"><i class="fab fa-github fa-4x" /></a>
          <a href="https://www.linkedin.com/in/patrick-levy-39009b78/" target="_blank"><i class="fab fa-linkedin fa-4x" /></a>
        </p>
      </section>
    </div>
  )
}

export default AboutMeDetails