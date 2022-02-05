import React, {useContext} from "react";
import {Context} from "../Context";

function HideAll(){

    const{isAllFlipped, setIsAllFlipped}=useContext(Context)

    function handleClick(){
        isAllFlipped && setIsAllFlipped(false)
    }

    const color = "#000"

    return(
        <button className="my-button round-button" onClick={()=>handleClick()}>
            <svg width="40px" height="40px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill={color} d="M1.81818182,1.36363636 C1.5671433,1.36363636 1.36363636,1.5671433 1.36363636,1.81818182 L1.36363636,18.1818182 C1.36363636,18.4328567 1.5671433,18.6363636 1.81818182,18.6363636 L18.1818182,18.6363636 C18.4328567,18.6363636 18.6363636,18.4328567 18.6363636,18.1818182 L18.6363636,1.81818182 C18.6363636,1.5671433 18.4328567,1.36363636 18.1818182,1.36363636 L1.81818182,1.36363636 Z M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M12.2066229,6.81750327 L10.01,9.011 L7.81496625,6.81750327 C7.57521591,6.57797386 7.20156116,6.5541821 6.93520889,6.74601683 L6.85072984,6.81794775 C6.58458604,7.08433702 6.58478504,7.51604037 6.85117431,7.78218417 L6.85117431,7.78218417 L9.046,9.975 L6.85117431,12.1680169 C6.58478504,12.4341607 6.58458604,12.865864 6.85072984,13.1322533 C7.11687363,13.3986426 7.54857698,13.3988416 7.81496625,13.1326978 L10.01,10.938 L12.2066229,13.1326978 C12.4463733,13.3722272 12.820028,13.3960189 13.0863803,13.2041842 L13.1708593,13.1322533 C13.4370031,12.865864 13.4368041,12.4341607 13.1704149,12.1680169 L13.1704149,12.1680169 L10.975,9.975 L13.1704149,7.78218417 C13.4368041,7.51604037 13.4370031,7.08433702 13.1708593,6.81794775 C12.9047155,6.55155848 12.4730122,6.55135948 12.2066229,6.81750327 Z"/>
            </svg>
            <span className="tooltip">Hide all</span>
        </button>
    )
}

export default HideAll