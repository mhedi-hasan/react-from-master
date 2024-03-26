import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Brother = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <h3>Grandpa:{money}</h3>
        </div>
    );
};

export default Brother;