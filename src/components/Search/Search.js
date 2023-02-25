import {useRef, useState} from "react";
import {useDispatch} from "react-redux";

import {searchActions} from "../../redux";

const Search = () => {
    const dispatch = useDispatch();

    const [valueIn, setValueIn] = useState('');
    const inputRef = useRef(null);

    const onClickClear = () => {
        dispatch(searchActions.setSearchValue(''));
        setValueIn('');
        inputRef.current.focus();
    };

    const onChangeInput = (event) => {
        setValueIn(event.target.value);
        dispatch(searchActions.setSearchValue(event.target.value));
    };

    return (
        <label className={'css.search'} style={{display: "flex"}}>
            <input className={'css.search__input'}
                   type="text"
                   ref={inputRef}
                   value={valueIn} onChange={onChangeInput}
                   placeholder={'Search...'}/>
            {
                valueIn && (
                    <button className={'css.search__btn'} onClick={onClickClear}>
                        <svg width={10} height={10}
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path
                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                        </svg>
                    </button>
                )
            }
        </label>
    );
};

export {Search};