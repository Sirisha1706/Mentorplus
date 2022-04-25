import Planlist from './Planlist';
import './Home.css';

const Home = (props) =>{
    let times = [3, 1, 1, 1]
    let amt = [65, 85, 75, 100]
    let plans=[];
    let i=0;
    let j=0;
    plans=props.data;
    return (
        <div className='data'>
           {plans.map(plan=> <Planlist PlanData={plan} key={Math.random()} suit={plans[3]['suit']} time={times[i++]} per={amt[j++]}/>)}
        </div>
    );  
}

export default Home;