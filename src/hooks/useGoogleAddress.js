import React from 'react';
import axios from 'axios';

const useGoogleAddress = (addres) => {
     const [map, setMap] = React.useState({});
     const params = {
        access_key: '89d1406de6a5b9dc1746c27da114d7db',
        query: `${addres.city} ${addres.addres} ${addres.state} ${addres.country}`
     }
    const API = 'http://api.positionstack.com/v1/forward';

    React.useEffect(async()=>{
        const response = await axios(API, {params});
        console.log(response.data.data)
        setMap(response.data.data[0]);
    },[]);
    
  return  map;
  
}

export default useGoogleAddress