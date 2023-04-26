// import React, { useEffect, useState } from "react";
// import openai from "../../assets/images/Truth2earn/verdict.webp";
// import xcircle from "../../assets/images/Truth2earn/xcircle.webp";
// import verified from "../../assets/images/verified.webp";
// import JailImg from "../../assets/images/jail.png";
// import NotJailImg from "../../assets/images/notJaila.png";
// import { useAxios } from "../../hooks/useAxios";

// const Truth2earnDropdown = (props) => {
//   const [show, setShow] = useState(true);
//   const [show1, setShow1] = useState(false);
//   const { fetchData, response, loading } = useAxios();

//   const id = "6405a32273f7c7f9865052e5";

//   const getBanners = async () => {
//     await fetchData({
//       method: "GET",
//       url: `https://dull-puce-wildebeest-belt.cyclic.app/group/${id}`,
//     });
//   };

//   useEffect(() => {
//     getBanners();
//   }, []);

//   const item =
//     response?.event?.highlights?.map((el) => el.resultVerification) || [];

//   console.log("Truth2earnDropdown", item[0]?.resultAnnounced);
//   return (
//     <>
//       {props.Truth_data && (
//         <div className="payments-inputs">
//           <div className="openai">
//             <img src={openai} alt="openai" />
//             <span>ChatGPT Verdict</span>
//             <img
//               src={item[0]?.resultAnnounced ? JailImg : NotJailImg}
//               alt="verified"
//             />
//           </div>
//           <span className="confirmed-date">asked 14/03/2023</span>

//           {item[0]?.resultAnnounced == "true" && (
//             <span id="grey">TRUTH ? 💰 $15 BOUNTY</span>
//           )}

//           {item[0]?.resultAnnounced == "false" ? (
//             <span className="e-live">Event Live</span>
//           ) : (
//             <span className="event-live">
//               <span>Event Result:</span> {`${item[0]?.winResultName}`}
//             </span>
//           )}
//           <div className="title-text">
//             {item[0]?.resultAnnounced == "false" && (
//               <span>{props.verdict_title}</span>
//             )}
//             {item[0]?.resultAnnounced == "false" && (
//               <span id="grey">TRUTH ? 💰 $15 BOUNTY</span>
//             )}
//             {item[0]?.resultAnnounced == "true" && (
//               <span>Correct ? Vote Now!</span>
//             )}
//           </div>
//           <div className="verdict-btn">
//             <button
//               className={
//                 item[0]?.resultAnnounced == "false"
//                   ? "de-active-grey"
//                   : "active-green"
//               }
//               disabled={item[0]?.resultAnnounced == "false" ? true : false}
//             >
//               YES
//             </button>
//             <button
//               className={
//                 item[0]?.resultAnnounced == "false"
//                   ? "de-active-grey"
//                   : "active-red"
//               }
//               disabled={item[0]?.resultAnnounced == "false" ? true : false}
//             >
//               NO
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Truth2earnDropdown;

import React from "react";
import openai from "../../assets/images/Truth2earn/verdict.webp";
import xcircle from "../../assets/images/Truth2earn/xcircle.webp";
import verified from "../../assets/images/verified.webp";

const Truth2earnDropdown = (props) => {
  return (
    <>
      {props.Truth_data && (
        <div className="payments-inputs">
          <div className="openai">
            <img src={openai} alt="openai" />
            <span>ChatGPT Verdict</span>
            <img src={verified} alt="verified" />
          </div>
          <div className="verdict-btn">
            <button id="green">
              YES <img src={verified} alt="verified" />
            </button>
            <button id="red">
              NO <img src={xcircle} alt="cross" />
            </button>
          </div>
          <div className="title-text">
            <span>{props.verdict_title}</span>
            <span id="grey">TRUTH ? 💰 $15 BOUNTY</span>
          </div>
          <div className="verdict-btn">
            <button id="green">YES</button>
            <button id="red">NO</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Truth2earnDropdown;
