export default function Request(){
    return { get, post };
    
    async function get(url){
        var response = (await fetch(url)).json();
        return response;
    }

    async function post(url, body){
        var options = {
            method: "post",
            header: {
                "timeout": 60000,
                "accept": "application/json",
                "content-type": "application/json",
            }
        }
        var response = (await fetch(url, options, body)).json();
        return response;
    }
}