import {Rating} from "@mui/material";

const StarsRating = ({value}) => {

    return (
        <div>
            <Rating name="read-only" value={value} readOnly precision={0.1} max={10}/>
        </div>
    );
};

export {StarsRating};