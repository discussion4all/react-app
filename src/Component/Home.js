import React from 'react';
import { render } from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import HomeSlider from "./HomeSlider"
import SimpleSlider from './Slider2';
import ExpandingCard from './Slider3';
import Achievement from "./Achivement";
const Home = () => {
    return (
     <>
        
    
   

     
     <div className="scroll-menu">
  <Section/>
  </div>
     
  <div className="container">
        <div className="scetionlast">
          <div className="row">
           <div className="col-md-4">
             <div className="sl-text">
               <h1>牛津、劍橋或專科營</h1>
               <p>體驗公開試、大學預備班、<br/> 專科課程如醫科、法律等科目</p>
             </div>
           </div>
           <div className="col-md-4">
              <div className="sl-text">
                 <h1>藝術戲劇營</h1>
                 <p>特設作品集訓練班，提升學生報讀大<br/> 學的作品集水準</p>
               </div>
           </div>
           <div className="col-md-4">
              <div className="sl-text">
                <h1>傳統寄宿學校體驗</h1>
                <p>入讀英國傳統寄宿中學，體驗多元<br/>化課外活動</p>
              </div>  
           </div>

           <div className="col-md-4">
             <div className="sl-text">
               <h1>牛津、劍橋或專科營</h1>
               <p>體驗公開試、大學預備班、<br/>專科課程如醫科、法律等科目</p>
             </div>
           </div>
           <div className="col-md-4">
              <div className="sl-text">
                 <h1>藝術戲劇營</h1>
                 <p>特設作品集訓練班，提升學生報讀大<br/>學的作品集水準</p>
               </div>
           </div>
           <div className="col-md-4">
              <div className="sl-text">
                <h1>傳統寄宿學校體驗</h1>
                <p>入讀英國傳統寄宿中學，體驗多元<br/>化課外活動</p>
              </div>  
           </div>
           </div>
        </div>
      </div>

   
      </>
     
     );
    }
    const styles = {
        fontFamily: 'sans-serif',
        textAlign: 'center',
      };
      
      class Section extends React.Component {
      
        constructor(props) {
          super(props);
          this.scrollToTop = this.scrollToTop.bind(this);
        }
      
        componentDidMount() {
      
          Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
          });
      
          Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
          });
      
        }
        scrollToTop() {
          scroll.scrollToTop();
        }
        scrollTo() {
          scroller.scrollTo('scroll-to-element', {
            duration: 200,
            delay: 0,
            smooth: 'easeInOutQuart'
          })
        }
        scrollToWithContainer() {
      
          let goToContainer = new Promise((resolve, reject) => {
      
            Events.scrollEvent.register('end', () => {
              resolve();
              Events.scrollEvent.remove('end');
            });
      
            scroller.scrollTo('scroll-container', {
              duration: 200,
              delay: 0,
              smooth: 'easeInOutQuart'
            });
      
          });
      
          goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
              duration: 200,
              delay: 0,
              smooth: 'easeInOutQuart',
              containerId: 'scroll-container'
            }));
        }
        componentWillUnmount() {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
        }
        render() {
          return (
            <div>
                <nav className="navbar scroll-sub navbar-default navbar-fixed-top">
                  <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >講座
                        <div className="scroll-squre"><span></span></div>
                        </Link></li>
                      
                        <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>宣傳
                        <div className="scroll-squre"><span></span></div>
                        </Link></li>
                      
                        <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >服務流程
                        <div className="scroll-squre"><span></span></div>
                        </Link></li>
                    
                        <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>學制
                        </Link></li>
                      </ul>
                    </div>
                  </div>
                </nav>
      
                <Element name="test1">
                <HomeSlider/>
              </Element>
      
                <Element name="test2">
                <SimpleSlider />
              </Element>
      
                <Element name="test3">
                <Achievement />
              </Element>
      
                <Element name="test4">
                <ExpandingCard />
              </Element>
      
            </div>
          );
        }
       
      };
      
      render(<Section />, document.getElementById('root'));
      
    
    
export default Home;