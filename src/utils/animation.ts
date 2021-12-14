export default function Animation() {

    return {slideOutPage}
    
    function slideOutPage(id:string, callback:()=>void){
        const element = document.getElementById(id);
        if(element){
            element.style.transform = "translateX(-350px)";
        }
        setTimeout(callback, 400);
    }
} 