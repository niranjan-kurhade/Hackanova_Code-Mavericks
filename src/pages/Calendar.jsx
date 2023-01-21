import React, { useState } from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import '../styles/modal.css'
import img1 from './happiness.png'
import img2 from './indifferent.png'
import img3 from './crying.png'
import "./Desktop1.css";
import trophy from './tro.png'


// function isSameDay(a, b) {
//   return differenceInCalendarDays(a, b) === 0;
// }
function Note({ text, onTextChange, onSave }) {
    return (
        <div className="note-container">
        <textarea value={text} onChange={onTextChange} />
        <button onClick={onSave}>Save</button>
      </div>
    );
  }
// function Note() {
//     return <div>This is my note</div>;
//   }
// const Number=(i)=>{
//     var arr=[1+i,2+i,3+i,4+i,5+i,6+i,7+i];
//     return arr.map((val)=>{
//         return <button className="button-0">{val}</button> 
//      })
  
//     }
const Number=(i)=>{
    var arr=[1+i,2+i,3+i,4+i,5+i,6+i,7+i];
    const [showNote, setShowNote] = useState(false);
    const [noteText, setNoteText] = useState('');
  
    function handleNoteTextChange(e) {
      setNoteText(e.target.value);
    }
    return arr.map((val)=>{
        return <>
        <button className="button-0" onClick={() => setShowNote(!showNote)}>
          {/* {showNote ? 'Hide' : 'Show'}  */}
          {val}
        </button>
        {showNote && (
          <Note
            text={noteText}
            onTextChange={handleNoteTextChange}
            onSave={() => {
              // save the note here
              setShowNote(false);
            }}
          />
        )}
      </>
     })
  
    }

const Number1=()=>{
    var arr=[29,30,31];
    return arr.map((val)=>{
        return <button className="button-0">{val}</button>
     })
    }    
 function Calendarpg() {
  const [update,setupdate]=useState(0);
    const navigate = useNavigate();
  
    const onEllipseIcon7Click = useCallback(() => {
      navigate("/desktop-2");
    }, [navigate]);

//   const [value, onChange] = useState(new Date());

//   const datesToAddContentTo = [12,14,16];

// function tileContent({ date, view }) {
//   // Add class to tiles in month view only
//   if (view === 'month') {
//     // Check if a date React-Calendar wants to check is on the list of dates to add class to
//     if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
//       return 'My content';
//     }
//   }
// }
  return (
   
//    <> <div className="cal">
//     {/* <img className="cal" src={img4} /> */}
//       <Calendar onChange={onChange} tileContent={tileContent} value={value} /> 
 
    //   </div>
    <>

    {/* <div>
        <span>{Number(0)}</span>
    </div>
    <div>
        <span>{Number(7)}</span>
    </div>
    <div>
        {Number(14)}
    </div>
    <div>
        {Number(21)}
    </div>
    <div>
        {Number1()}
    </div> */}
          <div className="desktop-1-child" />
      <div className="january-2023-parent2">
        <b className="january-20234">January 2023</b>
        <div className="mon-tues-wed4">Sun &nbsp; Mon &nbsp; Tues &nbsp; Wed &nbsp; Thur &nbsp; Fri &nbsp; Sat</div>
      </div>
      <div className="calendar-wrapper2">
        <b className="calendar4">CALENDAR</b>
      </div>
      <div className="ellipse-parent">
        {/* <img className="ellipse-icon" alt="" src="../ellipse-1.svg" /> */}
        <img className="angry-1-12" alt="" src="../sunglasses-1@2x.png" />
        <img className="angry-1-1" alt="" src="../angry-1-1@2x.png" />
        <img className="group-child1" alt="" src="../ellipse-2.svg" />
        <img className="group-child2" alt="" src="../ellipse-3.svg" />
        <img className="group-child3" alt="" src="../ellipse-4.svg" />
        <img className="group-child4" alt="" src="../ellipse-5.svg" />
        <img className="group-child5" alt="" src="../ellipse-6.svg" />
        <img className="group-child6" alt="" src="../ellipse-7.svg" />
        <img className="group5" alt="" src="../ellipse-5.svg" />
        <img className="group2" alt="" src="../ellipse-5.svg" />
        <img className="group3" alt="" src="../ellipse-5.svg" />      
        <img className="group4" alt="" src="../ellipse-5.svg" />             
        <img className="crying-1-icon" alt="" src="../crying-1@2x.png" />
        <img className="happiness-1-icon" alt="" src="../happiness-1@2x.png" />
        <img
          className="indifferent-1-icon"
          alt=""
          src="../indifferent-1@2x.png"
        />
        <img className="crying-3-icon" alt="" src="../crying-3@2x.png" />
        <img
          className="indifferent-4-icon"
          alt=""
          src="../indifferent-4@2x.png"
        />
        <img
          className="sunglasses-1-icon"
          alt=""
          src="../sunglasses-1@2x.png"
        />
        <img className="happy-1-icon" alt="" src="../happy-1@2x.png" />
        {/* <img className="happy-2-icon" alt="" src="../happy-2@2x.png" /> */}
        <img className="happy-1-1" alt="" src="../happy-1-1@2x.png" />
        <img className="happiness-2-icon" alt="" src="../happiness-2@2x.png" />
        <img className="happy-1-2" alt="" src="../happy-1-2@2x.png" />
        <img className="crying-2-icon" alt="" src="../crying-2@2x.png" />
        <img className="happiness-3-icon" alt="" src="../happiness-3@2x.png" />
        <img
          className="indifferent-2-icon"
          alt=""
          src="../indifferent-2@2x.png"
        />
        <img className="happiness-4-icon" alt="" src="../happiness-4@2x.png" />
        <img className="happy-1-3" alt="" src="../happy-1-3@2x.png" />
        <img className="happiness-6-icon" alt="" src="../happiness-6@2x.png" />
        <img
          className="indifferent-3-icon"
          alt=""
          src="../indifferent-3@2x.png"
        />
        <img className="happiness-7-icon" alt="" src="../happiness-7@2x.png" />
        <img
          className="happy-2-icon"
          alt="button"
          src="../ellipse-8.svg"
          onClick={onEllipseIcon7Click}
        />
        
      </div>
      <div className="parent2">
        <div className="div16">1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7</div>
        <div className="div17">8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14</div>
        <div className="div18">15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 18 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 19 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 21</div>       
        <div className="div19">22 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 26 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 28</div>       
        <div className="div20">29 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31</div>
      </div>
      <div>
              <Popup
                  trigger={<button className="button1"> How was your day today?</button>}
                  modal
                  nested>
                  {close => (
                      <div className="modal">
                          <button className="close" onClick={close}>
                              &times;
                          </button>
                          <div className="header"> Tell us more about how do You feel today?</div>
                          <div className="content">
                          </div>
                          <div className="actions">
                              <div>
                                  <img className="img1" alt='Happy' src={img1} />

                                  <img className="img1" alt='Mediocre' src={img2} />
                                  <img className="img1" alt='Sad' src={img3} />
                              </div>


                              <div>
                                  <button
                                      className="button2"
                                      onClick={() => {
                                          setupdate(1);
                                          close();
                                      } }
                                  >
                                      Great
                                  </button>


                                  <button
                                      className="button2"
                                      onClick={() => {
                                          setupdate(2);
                                          close();
                                      } }
                                  >
                                      Average
                                  </button>
                                  <button
                                      className="button2"
                                      onClick={() => {
                                          setupdate(3);
                                          close();
                                      } }
                                  >
                                      Not Good
                                  </button>
                              </div>
                          </div>
                      </div>
                  )}
              </Popup>


          </div>
          <div className="rectangle-parent1">
        <div className="group-child8" />
        <img className="image-1-icon4" alt="" src={trophy}/>
        <div className="days16">
          <span className="streak">25</span>
          <span className="days17"> Days</span>
        </div>
        <div className="days18">
          <span className="streak">102</span>
          <span className="days17"> Days</span>
        </div>
        <div className="your-current-streak4">Your Current Streak</div>
        <div className="your-highest-streak4">Your Highest Streak</div>
      </div>
           </>
  );



}
  

export default Calendarpg;
/*import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Product() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    );

}
export default Product;*/