const Skeleton = ({styleCard, amount}) => {
    return (
        <>
            {
                [...Array(amount)].map((_, index) =>
                    <div key={index} className={`${styleCard || 'css.movies__skeleton'} ${'css.card'}`}>Loading...</div>
                )
            }
        </>
    );
};

export {Skeleton};