import {RevokedCredential} from "../models/revoked-credential.js";

export const fetchRevocationList = async (issuerId, revocation_url)=>{
    try{
        const response = await fetch(`${revocation_url}?issuer=${issuerId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const response_obj = await response.json()
        const data= []
        for (let obj in response_obj){
            const revokedCred = new RevokedCredential(...obj)
            data.push(revokedCred)
        }
        return data;
    }catch(e){
        console.error('Error fetching data:', e);
        throw e;
    }
}