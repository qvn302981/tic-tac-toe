interface IReset {
    id?: string;
    label: string;
    onClick: () => void;
}
export const Reset = (props: IReset) => {
    const {id, label, onClick} = props;

    const handleClick = () => {
        console.log("handleClick", label);
        onClick()
    }
    return (
        <button id={id} onClick={handleClick}>
            {label}
        </button>
    )
}