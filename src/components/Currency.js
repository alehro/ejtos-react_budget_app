
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { TiArrowDown } from 'react-icons/ti';
import { FaCaretDown } from 'react-icons/fa';


const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [expanded, setExpanded] = useState(false);
    const cs = [["$","$ Dollar"], ["£","£ Pound"], ["€","€ Euro"], ["₹","₹ Ruppee"]];
    const getLongName = (shortName)=>{
        return cs.find(i=>{
            return i[0]===shortName;
        })[1];
    }

    const handleChange = (cur) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: cur,
        });
        setExpanded(!expanded);
    }
    return (
        <React.Fragment>
            <div className="alert alert-success" style={{ cursor: 'default', color:'black', userSelect:'none' }}   onClick={event=> setExpanded(!expanded)}>
                <span>Currency: {currency}</span>
                <FaCaretDown/>
                {/* <TiArrowDown size='1.5em'  style={{ color: 'blue', fontSize: '24px' }}  onClick={event=> setExpanded(!expanded)}></TiArrowDown> */}
            </div>
            {expanded && 
            <div className="alert alert-success" style={{ position: 'absolute', marginTop: '-10px' , paddingLeft:0,paddingRight:0, color:'black', userSelect:'none', zIndex: '100' }}>
                {cs.map(i=>{
                    return <div key={i[0]}  onClick={event=> handleChange(i[0])} className='dropdown-div'  style={{ cursor: 'default',  paddingLeft:'16px',paddingRight:'16px',}}>{i[1]}</div>
                })}                
            </div>}
        </React.Fragment>
    );
};
export default Currency;