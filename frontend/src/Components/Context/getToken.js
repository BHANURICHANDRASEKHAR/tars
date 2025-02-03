import Cookie from 'js-cookie'
   
export default function getCookie()
{
    return Cookie.get('tars-user-token') || null;  
}
export function RemoveToken()
{
    Cookie.remove('tars-user-token');  
    return;
}