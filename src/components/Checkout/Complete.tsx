import Button from "../shared/Button";
import check from "../../assets/images/check.png";

export default function Complete(props:{ close:(type:string)=>void}) {
    return <>
        <div style={{marginTop: "30px"}}>
            <img style={{height: "70px", width: "70px"}} src={check} alt="check img" />
            <p style={{width: "200px", color: "rgba(0, 0, 0, 0.7)", fontSize: "13px", margin: "auto", marginTop: "5px"}}>Success! Your loan request has been accepted.</p>
        </div>
        <Button id="close" text="Done" style={{marginTop: "20px"}} callback={() => props.close("success")} />
    </>
}