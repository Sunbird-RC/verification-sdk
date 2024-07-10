import {RevokedCredential} from "../models/revoked-credential.js";

export const fetchRevocationList = async (issuerId, revocation_url)=>{
    try{
        let revocationURL;
        if (!issuerId) {
            revocationURL = revocation_url
        } else {
            revocationURL = `${revocation_url}?issuerId=${issuerId}`
        }
        const response = await fetch( revocationURL , {
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
        response_obj.forEach(obj => {
            const revokedCred = new RevokedCredential(obj)
            data.push(revokedCred)
        })
        return data;
    }catch(e){
        console.error('Error fetching data:', e);
        throw e;
    }
}