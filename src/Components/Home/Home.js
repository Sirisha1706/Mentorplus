import Planlist from './Planlist';
import './Home.css';

const Home = (props) =>{
    let plans = [];
    plans=props.data;
    return (
        <div className='data'>
           {plans.map(plan=> <Planlist PlanData={plan} key={Math.random()} suit={plans[3]['suit']}/>)}
        </div>
    );  
}

export default Home;