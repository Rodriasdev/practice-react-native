import {API_URL} from '@env'

export const createUser = async (pyload) =>{
    const response = await fetch(API_URL + '/user-create',{
        method: 'POST',
        body: JSON.stringify(pyload),
        headers: {
            'content-type':'application/json'
        }
    })

    return response.json()
}