import {useRef, useState} from "react";
import {useDispatch} from "react-redux";

import {searchActions} from "../../redux";

import css from './Search.module.css';

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
        <label className={css.search} style={{display: "flex"}}>
            <input className={css.search__input}
                   type="text"
                   ref={inputRef}
                   value={valueIn} onChange={onChangeInput}
                   placeholder={'Search...'}/>
            {
                valueIn && (
                    <button className={css.search__btn} onClick={onClickClear}/>
                )
            }
        </label>
    );
};

export {Search};