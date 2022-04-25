import Planlist from './Planlist';
import './Home.css';

const Home = (props) =>{
    let times = [3, 1, 1, 1]
    let plans=[];
    let i=0;
    plans=props.data;
    return (
        <div className='data'>
           {plans.map(plan=> <Planlist PlanData={plan} key={Math.random()} suit={plans[3]['suit']} time={times[i++]}/>)}
        </div>
    );  
}

export default Home;