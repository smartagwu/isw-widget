import "./loader.css";

export default function Loader({ color, top }: { color:string, top:string }) {
    return <div className="lds-ellipsis" style={{top}}>
        <div style={{background: color}}></div>
        <div style={{background: color}}></div>
        <div style={{background: color}}></div>
        <div style={{background: color}}></div>
    </div>
}

Loader.defaultProps = {
    top: "unset",
    color: "#ffffff"
}