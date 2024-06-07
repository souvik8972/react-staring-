/* eslint-disable react/prop-types */
import "./Display.css"


function Dispaly({value}){
    return <>
        <div className="display">
            <input type="text" id="display  " value={value === '' ? '00' : value} readOnly />
        </div>
    </>
}

export default Dispaly