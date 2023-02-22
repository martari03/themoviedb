import {Rating} from "@mui/material";

const StarsRating = ({value}) => {

    return (
        <div className={'rating'}>
            <Rating name="read-only" value={value} readOnly precision={0.5}/>
        </div>
    );
};

export {StarsRating};