export const TAKEINPUT = 'takeinput'

export const takeInput = (value) =>{
    return{
        type:TAKEINPUT,
        payload:value
    }
}