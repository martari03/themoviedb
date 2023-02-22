import {Link} from "react-router-dom";

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={css.wrapper}>
            <span className={css.error}>404</span>
            <span className={css.message}>Not Found</span>
            <div>
                <p>
                    The resource requested could not be found on this server!
                </p>
            </div>
            <Link className={css.btn} to={'/'}>Go Back</Link>
        </div>
    );
};

export {NotFoundPage};