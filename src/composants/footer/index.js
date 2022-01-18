import React from 'react';


const Footer = () => (
    <div>
    <footer class=" text-center text-lg-start footer bg-light" >
          <div class="container p-4 ">
            <div class="row">
              <div class="col-lg-4">
                <h3 class="">Our address</h3>

                <i class="fas fa-map-marker-alt "></i>
                <span class="ms-1 d-sm-inline text-dark">Yaoundé </span>
                
                 <a href="https://wa.me/237699608567" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <i class="fas fa-phone-alt "></i>
                <span class="ms-1  d-sm-inline text-dark">+237 690411075 </span></a>

                <a href="https://mail.google.com/" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <i class="fas fa-envelope "></i>
                <span class="ms-1  d-sm-inline text-dark"> ivananjike@gmail.com </span></a>

                <div><i class="fab fa-twitter m-2"></i><i class="fab fa-facebook  m-2"></i><i class="fab fa-youtube text-warning m-2"></i><i class="fab fa-instagram text-warning m-2"></i><i class="fab fa-linkedin-in text-warning m-2"></i></div>
            
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-md-0 ">
                <h3 class=" ">Quick access</h3>

               <a href="/" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <i class="fas fa-angle-right"></i>
                <span class="ms-1  d-sm-inline text-dark">Home</span></a>
                
                <a href="/#def" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <i class="fas fa-angle-right "></i>
                <span class="ms-1  d-sm-inline text-dark">About</span></a>
                
                <a href="entreprise" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <i class="fas fa-angle-right "></i>
                <span class="ms-1  d-sm-inline text-dark">Partners</span></a>
                
                <a href="/#con" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <i class="fas fa-angle-right "></i>
                <span class="ms-1  d-sm-inline text-dark">Contact</span></a>
                
              </div>
              
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0"  >
                <h3 class="">Newsletter</h3>

                <p class="py-2"> subscribe to our newsletter and stay informed about the management of trainees.</p>
              <form >
                  <div class="input-group border ">
                    <input type="text" id = "email" name="email" value = "" required class="form-control bg-transparent " placeholder="your e-mail address"></input>
                    <div class="input-group-btn">
                        <button type="submit" class=" btn text-white "> submit</button>
                   </div>
                </div>
              </form> 
                
              </div>
            </div>
          </div>
          <div class="text-center  p-4 bg-white " >
            © 2022 Copyright:
            <a  href= "https://yaknema.com/" class="" >uy1.com</a>
          </div>

        </footer>
    
    
        
       
    </div>
);

 export default Footer;
