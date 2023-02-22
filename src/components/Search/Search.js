import {useRef, useState} from "react";
import {useDispatch} from "react-redux";

import css from './Search.module.scss';

import {filterActions} from "../../redux";

const Search = () => {
    const dispatch = useDispatch();

    const [valueIn, setValueIn] = useState('');
    const inputRef = useRef(null);

    const onClickClear = () => {
        dispatch(filterActions.setSearchValue(''));
        setValueIn('');
        inputRef.current.focus();
    };

    const onChangeInput = (event) => {
        setValueIn(event.target.value);
        dispatch(filterActions.setSearchValue(event.target.value));
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