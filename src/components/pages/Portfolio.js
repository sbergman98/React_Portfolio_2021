import burger from "../../Images/burger_logger_icon_300x239.png";
import movieEaters from "../../Images/Movie_Eaters_APP_V2.png";
import project2 from "../../Images/Project2_Icon_300x205.png";
import calendar from "../../Images/Schedul_APP_V2.png";
import team from "../../Images/team_profile_icon_v2_300x247.png";
import budget from "../../Images/Budget_TRK_300x273.png";

const Portfolio = () => (
  <div class="container">

        
 
    <div class="card">
      <div class="card-body">
       <h2>Portfolio</h2>
      </div>
    </div>
  
<br/>
<br/>
<br/>

{/* <!-- Row 1 --> */}
<div class="row">
  <div class="col-md-6">
    <h5>Below you will find several examples of my work.</h5>
    
  </div>
  <div class="col-md-6">
     <uL>
         <li>Click to see my <a href="https://www.linkedin.com/in/scott98" target="blank">LinkedIn</a> page</li>
         <li>Access my resume <a href="https://sbergman98.github.io/assets/images/resume_scott_bergman.pdf" target="blank" >here</a>.</li>
         <li>To see my GitHub page and view more of work, <a href="https://github.com/sbergman98?tab=stars" target="blank">click here</a>.</li>
        
     </uL>
  </div>
 <br/>
 <br/>
 
</div>

{/* <!-- Row 2 --> */}
<div class="row">
<div class="col-md-6">
<br/>
<br/>
<a href="https://proj2-dionysus.herokuapp.com/" target="blank">
<img alt='Project2' style={{ width: "300px;" , height:"205px;" }} src={project2}/></a><br/>
<br/>
This project was done as a collaboration with several other designers.

</div>
<div class="col-md-6">
<br/>
<br/>
<a href="https://drive.google.com/file/d/1MfgSCiXT0ZJyAE2vxjNOra8NGsEUD4mq/view" target="blank">
<img alt='Burger' style={{width: "300px;" , height:"239px;" }} src={burger}/></a><br/>
<br/>
To see a demo of this app <a href="https://drive.google.com/file/d/1MfgSCiXT0ZJyAE2vxjNOra8NGsEUD4mq/view" target="blank">click here</a>.

</div>

<br/>
<br/>
</div>
<br/>
<br/>


{/* <!-- Row 3 --> */}
<div class="row">
  <div class="col-md-6">
      <br/>
      <br/>
      <a href="https://daellarrek.github.io/Team-Grass/" target="blank">
      <img alt='Movie Eater' style={{width: "300px;" , height:"337px;" }} src={movieEaters}/></a><br/>
      <br/>
      This project was done as a collaboration with several other designers.
     
  </div>
  <div class="col-md-6">
      <br/>
      <br/>
      <a href="https://drive.google.com/file/d/1fKgavC8lG7i_ZqLAZT8jDKXlSSeE07oy/view" target="blank">
      <img alt='Team Profile Generator' style={{ width: "300px;" , height:"247px;" }} src={team}/></a><br/>
      <br/>
      To see a demo of this app <a href="https://drive.google.com/file/d/1fKgavC8lG7i_ZqLAZT8jDKXlSSeE07oy/view" target="blank">click here</a>.
     
  </div>
 
 <br/>
 <br/>
</div>


<br/>
<br/>
{/* <!-- Row 4 --> */}
<div class="row">
  
  <div class="col-md-6">
  
      <a href="https://sbergman98.github.io/Calendar_HW_9_16/" target="blank">
      <img alt='Calendar' style={{ width: "300px;" , height:"304px;" }} src={calendar}/></a>
     
  </div>
  <div class="col-md-6">
     
      <a href="https://vast-shelf-44980.herokuapp.com/" target="blank">
      <img alt='Budget Tracker' style={{  width: "300px;" , height:"273px;" }} src={budget}/></a>
  </div>
 
 
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>


 


);

export default Portfolio;
