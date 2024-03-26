import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({ asset }) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Girlfriend</h2>
            <h3>has:{asset}</h3>
            <h3>also has:{gift}</h3>
        </div>
    );
};

export default Special;