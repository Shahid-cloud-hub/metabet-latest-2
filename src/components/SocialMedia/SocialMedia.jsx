// import React, { useState } from "react";
// import Maintenance from "../Maintenance/Maintenance";
// import { Container, Container1, Balance, Balance1 } from "./SocialMedia.styles";
// // import Trueai from "../../assets/images/TRUSC/Trueai.webp";
// // import trusc from "../../assets/images/TRUSC/trusc.webp";
// // import TransferBtn from "../../assets/images/TRUSC/Transfer-btn.webp";
// // import WithdrawBtn from "../../assets/images/TRUSC/Withdraw-btn.webp";
// import { TruscData, TruscData1 } from "../../JasonData/FeaturedBannerData";
// // import TruscTab from "./TruscTab/TruscTab";
// // import Tether from "../../assets/images/TRUSC/Tether.webp";
// // import USDC from "../../assets/images/TRUSC/USDC.webp";
// // import BUSD from "../../assets/images/TRUSC/BUSD.webp";
// import liquidityFox from "../../assets/images/TRUSC/liquidityFox.webp";
// import foxmini from "../../assets/images/TRUSC/fox-mini.webp";
// import usdt from "../../assets/images/TRUSC/usdt-mini.webp";
// import busd from "../../assets/images/TRUSC/busd-mini.webp";
// import usdc from "../../assets/images/TRUSC/usdc-mini.webp";
// import icon from "../../assets/images/TRUSC/switch.png";
// import TruscBet from "../../assets/images/TRUSC/TruscBet.png";
// import clock from "../../assets/images/clock.png";
// import banner from "../../assets/images/newBanner.png";
// import Polygon from "../../assets/images/Polygon.png";

// const SocialMedia = () => {
//   const [Active, setIsActive] = useState(false);

//   const options = [
//     { value: "USDT", text: "USDT", img: usdt },
//     { value: "USDC", text: "USDC", img: busd },
//     { value: "BUSD", text: "BUSD", img: usdc },
//   ];
//   return (
//     <Container>
//       <Balance1>
//         <div className="total">
//           <div className="Banner">
//             <div className="headline">
//               <span>? Will it Rain at Wimbledon 2023</span>
//               <hr />
//             </div>
//             <div className="center">
//               <img src={banner} alt="banner" />
//               <div className="paragraph">
//                 <p>
//                   In Q2 2022 Musk disclosed the idea of adding Dogecoin as a
//                   payment method for the Twitter subscription service, Blue,
//                   triggering a price surge.
//                 </p>
//                 <div className="event">
//                   <div>
//                     <img src={clock} alt="clock" />
//                   </div>
//                   <span id="yellow">18:40:20</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="videoContainer">
//             <img src={Polygon} alt="" />
//           </div>
//         </div>
//         <div className="total">
//           <div className="amountText">
//             <span>Total Pool Size</span>
//             <input type="text" placeholder="$0,00" disabled />
//           </div>
//           <div className="amountText">
//             <span>Total number of Bets:</span>
//             <input type="text" placeholder="12376" disabled />
//           </div>
//         </div>
//       </Balance1>
//       <Balance>
//         <div className="liquidity-pool">
//           <span>Yes</span>
//           <hr />

//           <div className="fox-stats">
//             {TruscData?.map((item) => (
//               <div className="text">
//                 <span id="title">{item.title}</span>
//                 <input type="text" placeholder={item.placeholder} disabled />
//               </div>
//             ))}
//           </div>
//           <div className="amount">
//             <div className="amountText">
//               <span>Amount</span>
//               <input type="text" placeholder="$0.00" disabled />
//             </div>
//             <button>Bet</button>
//           </div>
//         </div>
//         <div className="liquidity-pool">
//           <span>No</span>
//           <hr />
//           <div className="fox-stats">
//             {TruscData?.map((item) => (
//               <div className="text">
//                 <span id="title">{item.title}</span>
//                 <input type="text" placeholder={item.placeholder} disabled />
//               </div>
//             ))}
//             <div className="amount">
//               <div className="amountText">
//                 <span>Amount</span>
//                 <input type="text" placeholder="$0.00" disabled />
//               </div>
//               <button>Bet</button>
//             </div>
//           </div>
//         </div>
//       </Balance>
//       <Container1>
//         <div className="heading1">
//           <span>Swap</span>
//           <hr />
//         </div>
//         <div className="convert">
//           <div className="truai">
//             <label>
//               From:
//               <img src={foxmini} />
//               <input placeholder="TRUSC" />
//             </label>{" "}
//             <span>00.00</span>
//             <div className="text">
//               <span id="grey">Balance: 25.00</span>
//               <span id="blue">MAX</span>
//             </div>
//           </div>
//           <img id="icon" src={icon} alt="icon" />
//           <div className="truai">
//             <div className="dropdown">
//               <label onClick={() => setIsActive(!Active)}>
//                 To: <img src={usdt} />
//                 <input placeholder="USDT" disabled />
//               </label>
//               {Active && (
//                 <div className="select">
//                   {" "}
//                   {Object.values(options).map((option, index) => (
//                     <div
//                       onClick={() => setSelected(option)}
//                       key={index}
//                       className="dropdownItem"
//                     >
//                       {option.name?.slice(0, 10)}
//                       <div>
//                         <img src={option.img} alt="option.img" />
//                         {option.text}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <span>00.00</span>
//             <div className="text">
//               <span id="grey">Balance: 25.00</span>
//               <span id="blue">MAX</span>
//             </div>
//           </div>
//         </div>
//         <button>Swap</button>
//       </Container1>
//     </Container>
//   );
// };

// export default SocialMedia;
