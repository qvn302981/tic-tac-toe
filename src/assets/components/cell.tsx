interface ICell {
    id?: string;
    classes?: string;
    values?: null;
    onClick: () => void;
}
export const Cell = (props: ICell) => {
    const {id, classes, values, onClick} = props
    const handleClick = () =>{
        console.log('handleClick', values);
        onClick()
    }
    return (
        <div id={id} className={classes}  onClick={handleClick}>
            {values}
        </div>

    )
}
