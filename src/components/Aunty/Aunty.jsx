import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";
import './Aunty.css'

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Sohan'}></Cousin>
                <Cousin name={'Jannat'}></Cousin>
            </section>
            <p>Money:{money}</p>
            <button className="button" onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;