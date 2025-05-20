import './ContentContainer.sass'

export default function ContentContainer(props) {
    let variant = props['variant'] || null;
    let modifier = variant ? `content-container--${variant}` : "";

    return (
        <div className={`content-container ${modifier}`}>
            {props.children}
        </div >
    )
}