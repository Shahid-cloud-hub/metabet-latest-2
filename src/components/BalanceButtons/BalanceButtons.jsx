import { useContext, useEffect, useState } from "react";
import foxCircle from "../../assets/images/foxCircle.svg";
import foxMini from "../../assets/images/fox-mini.webp";
import tru from "../../assets/images/tru.svg";
import navBet from "../../assets/images/navBet.svg";
import Utils from "../../utilities";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../../Context";

const BalanceButtons = () => {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(null);
  const { items } = useContext(Context);

  useEffect(() => {
    if (metaMaskAddress.metaMaskAddress) {
      Utils.MetabetBalance(metaMaskAddress.metaMaskAddress.toString()).then(
        function (data) {
          data === 0 ? setBalance(null) : setBalance(data);
          // console.log(data, "test");
        }
      );
    }
  }, [metaMaskAddress, balance, items?.getRender]);
  if (metaMaskAddress.metaMaskAddress) {
    Utils.MetabetBalance(metaMaskAddress.metaMaskAddress.toString()).then(
      function (data) {
        data === 0 ? setBalance(null) : setBalance(data);
        // console.log(data);
      }
    );
  }

  return (
    <div className="right-nav">
      <label>
        <input
          type="text"
          name="name"
          value={balance == null ? "0.00" : balance}
          disabled
        />
        <img src={foxCircle} alt="foxCircle" />
      </label>
      <label>
        <input type="text" name="name" placeholder="0.00" disabled />
        <img id="label-nav" src={tru} alt="tru" />
      </label>
      <label>
        <input type="text" name="name" placeholder="0.00" disabled />
        <img src={navBet} alt="navBet" />
      </label>

      {/* <img id="withdraw" src={Withdraw} alt="Withdraw" /> */}
    </div>
  );
};

export default BalanceButtons;
