import sunrise from "../../Images/Sunrise-Tucson.jpg"

const About = () => (
  <div class="container">

  <div class="card">
      <div class="card-body">
          <h2>About Me</h2>
      </div>
  </div>
  <br/>
  <br/>
  <br/>
  {/* Row 1  */}
  <div class="row">
      <div class="col-md-4">

      <img alt='Sunset' style={{ width: "100%" }} src={sunrise}/>

      <img src="" alt=""></img>
      </div>
    
      <div class="col-md-8">
          <p>
              After receiving a BA from Ramapo College, I began working for a radio station in the marketing
              department. One of my responsibilities was uploading content to the radio station website. That is
              where I began to learn about content design and html formatting. I went back to college and earned a
              certificate in web design and over the next several years I worked for numerous top tier and Fortune 500
              companies. <br/>
              <br/>
              Each experience has taught me something new and has added to my skill set; becoming a more rounded
              digital marketing manager. Currently I am in a Full Stack Boot Camp in order to sharpen my javascript skills.
      </p>
     
      </div>
     


  </div>
 
</div>


);

export default About;
