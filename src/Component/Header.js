import { useState } from "react";
import Navbar from "./Navbar"
const Header = () =>{
  const [sidebarOpen, setsidearOpen] = useState(false);
  console.log(sidebarOpen);
return(
<div className="header-div">
   <div className="row">
      <div className="col-md-4 col-3">
         <a href="#" className="logo">LINKEDU</a>
      </div>
      <div className="col-md-8 col-9">
         <div className="menu">
            <Navbar/>
            <div className="search-icon">
               <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M14 8.48479C14 11.7029 11.3426 14.3636 8 14.3636C4.65739 14.3636 2 11.7029 2 8.48479C2 5.26671 4.65739 2.60602 8 2.60602C11.3426 2.60602 14 5.26671 14 8.48479ZM12.8995 14.7136C11.5458 15.7478 9.84592 16.3636 8 16.3636C3.58172 16.3636 0 12.8361 0 8.48479C0 4.13346 3.58172 0.606018 8 0.606018C12.4183 0.606018 16 4.13346 16 8.48479C16 10.3027 15.3748 11.9769 14.3246 13.31L17.7017 16.6359C18.0952 17.0234 18.1 17.6566 17.7125 18.0501C17.325 18.4436 16.6918 18.4484 16.2983 18.0609L12.8995 14.7136Z" fill="white"/>
               </svg>
            </div>
            <div className="drop-icon" onClick={() => setsidearOpen((!sidebarOpen))}>
               <svg width="25" height="11" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M1 0.515076C0.447715 0.515076 0 0.962791 0 1.51508C0 2.06736 0.447715 2.51508 1 2.51508H24C24.5523 2.51508 25 2.06736 25 1.51508C25 0.962791 24.5523 0.515076 24 0.515076H1ZM1 8.39384C0.447715 8.39384 0 8.84156 0 9.39384C0 9.94613 0.447715 10.3938 1 10.3938H14C14.5523 10.3938 15 9.94613 15 9.39384C15 8.84156 14.5523 8.39384 14 8.39384H1Z" fill="white"/>
               </svg>
            </div>
        
         </div>
      </div>
   </div>
   <div className={'box-menu' + (sidebarOpen ? ' block' : '')}>
               <div className="drop-menu">
                  <ul>
                     <li><a href="#">Homepage</a></li>
                     <li><a href="#">Success Case</a></li>
                     <li><a href="#">Expert sharing</a></li>
                     <li><a href="#">Frequently Asked Questions</a></li>
                     <li><a href="#">Professional Team</a></li>
                  </ul>
               </div>
              
               <div className="address-text">
                  <h4>Central Head Office</h4>
                  <p>Central Station Exit C</p>
                  <p>88-98 Des Voeux Road Central, Central
                     Whole Floor, 11th Floor, 88 Central
                  </p>
               </div>
               <div className="address-text">
                  <h4> Central Test Center</h4>
                  <p>Central Station Exit B</p>
                  <p>113-125A Des Voeux Road Central, Central
                      Room 05, 17th Floor, Far East Development Building
                  </p>
               </div>
             <div className='button-btn'>
               <button>Subscribe to the latest news</button>
             </div>
            </div>
</div>
)
}
export default Header;