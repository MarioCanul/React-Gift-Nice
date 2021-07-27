export const giftSearch =async(categoria)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=VHIcexYRax83xWD6W8mEifppW0J3L7f0&q=${encodeURI(categoria)}&limit=10`
    // const url='api.giphy.com/v1/gifs/search?api_key=VHIcexYRax83xWD6W8mEifppW0J3L7f0&q='+categoria+'&limit=10';
    const resp =await fetch(url);
    const {data}= await resp.json() ;
  const gifs = data.map(img=>{
      return {
        url:img.images?.downsized_medium.url,
          title:img.title,
          id:img.id,
          
      }
    });
    
    return gifs;
}