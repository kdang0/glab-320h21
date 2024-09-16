/* eslint-disable react/prop-types */
export default function Content(props){
    return(
        <p style={{color:props.color}}>
            {props.paragraph}
        </p>
    )
}