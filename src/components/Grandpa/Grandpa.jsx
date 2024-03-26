import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money,setMoney]=useState(1000);
    const asset = 'Dimond';
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <MoneyContext.Provider value={[money,setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Aunty></Aunty>
                        <Uncle asset={asset}></Uncle>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;
/**
 * 
 * 1. create a context and export it.
 * 
 * 2. add provider for the context with a value. value could be anything.
 * 
 * 3. useContext to access value in the context API.
*/