export const getGift = async category => {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=LY2el8kqDGun5Db7jYfLsiogIuekCV1x&q=${category}&limit=20`;
      try {
        const resp = await fetch(url);
        const { data } = await resp.json();
        const newGifts = data.map(img => ({
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url,
        }));
        return newGifts;
      } catch (error) {
        console.log(error);
    }
};
