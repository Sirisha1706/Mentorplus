import './PlanList.css';
import { AiOutlineCheck } from "react-icons/ai";
import {CircularProgressbar} from 'react-circular-progressbar';
import CounterTime from '../Timer/CounterTime';

const Planlist = props=>{
    const plans = props.PlanData; 
    return(
        <div key={Math.random()} style={{backgroundColor:plans.backgroundColor}} className='plans'>
            <h1>FLAT 30% OFF</h1>
            <p className='offers'>Offer ends in</p>
            <CounterTime timer={props.time}/>
            <div className='circular'><CircularProgressbar value={props.per} text={`${props.per}%`}/></div><br/>
            <label style={{backgroundColor:plans.offerColor}} className='saver'>{plans.saver}</label><br/><br/>
            <label className='heading'>{plans.heading}</label>
            <ul className="cnt_list">{plans.content.map(c =>
                    <li key={Math.random()}><AiOutlineCheck/>  {c}</li>
                )}</ul>
            <label className='suit'>{props.suit}</label><br/>
            <label className='offer'>Flat 30% OFF for being referred by Saurabh</label><br/><br/>
            <label className='Oprice'>&#8377;{plans.originalPrice}</label>
            <label className='Save'>Save{plans.save}</label>
            <label className='price'>&#8377;{plans.price}</label><br/><br/>
            <button className='button'>Buy Now</button>

        </div>
    );
}

export default Planlist;