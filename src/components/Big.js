import "../style/global.css";
import "../style/big.css";

import banner from "../img/bannerT.png";

function Big(){
    return(
        <div className="big">
           <img src={banner} alt="logo" />
        </div>
    )
}

export default Big;