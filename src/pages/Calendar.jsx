import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import '../styles/modal.css'
import img1 from './happiness.png'
import img2 from './indifferent.png'
import img3 from './crying.png'




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
  const [update,setupdate]=useState(0)


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

    <div>
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