import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <header className="row bg-secondary d-flex d-flex align-items-center">
        <h1 className="col-4 d-flex text-light ">MyChatApp</h1>
        <p className="col text-light">
          by ( Vivekshil Kasbe ) ( ID: 210940320136 )
        </p>
      </header>

      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function send() {
    if (message === "") {
      alert("please enter valid message");
    } else {
      const newList = [message, ...list];

      setList(newList);
      setMessage("");
    }
  }

  return (
    <div className="mx-4">
      <div className="row">
        <input
          className=" col form-control form-control-lg mt-4"
          type="text"
          value={message}
          onChange={handleMessage}
        />

        <input
          className="col-2 mt-4 mx-2 "
          type="button"
          value="SEND"
          onClick={send}
        />
      </div>

      {list.map((item, index) => (
        <>
          <div
            key={index}
            className="alert alert-secondary fs-4 mt-3 text-start"
          >
            {item}
          </div>

          {/* <div key={index} className="alert alert-secondary fs-4 mt-3 text-end">
            {item}
          </div> */}
        </>
      ))}
    </div>
  );
}

// import React, {useState } from "react";

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Whatsapp />
//     </>
//   );
// }
// function Header() {
//   return (
//     <div>
//       <div className="bg-dark text-light p-3 m-3">
//         MyChatApp
//         <div>by(Vivekshil Kasbe)(136_vivekshil_kh)</div>
//       </div>
//     </div>
//   );
// }

// const sendmsg

// function Whatsapp() {
// const [messsage,setMessage] =useState("");
// const [valid,setValid] = useState("");
// const [list,setList] =useState("");

// const saveMessage= (e) =>{
// setMessage(e.target.value);
// }

// const sendMessage =() =>{
//   if(message="") {
//     setValid(false);
//     return;

//   }
// }

//   return (
//     <div className="">
//       <input className="m-3 p-3" type="text" placeholder="Lets chat here..." conClick={sendmsg} />
//       <input className="p-3" type="button" value="SEND" />
//     </div>
//   );
// }
