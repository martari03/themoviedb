const Skeleton = ({styleCard, amount}) => {
    return (
        <>
            {
                [...Array(amount)].map((_, index) =>
                    <div key={index} className={`${styleCard}`}>Loading...</div>
                )
            }
        </>
    );
};

export {Skeleton};