const key = 'us2x25rbWYAYsRM9KD2RBfvyY8WwjUsx';
//get city climate
const getweather = async(id)=>{

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;

    const res= await fetch(base+query);
    const info= await res.json();

    return info[0];
}

//get city info
const getcity = async(city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
};

/*getcity('Hinganghat').then(data=>{
    return getweather(data.Key);
}).then(final_data=>{
    console.log(final_data);
}).catch(err=>{
    console.log(err);
});*/