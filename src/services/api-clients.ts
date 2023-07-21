import axios  from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{        
        key: '669acdaba12c4b10abcdcfc55780c071'
    }
});


