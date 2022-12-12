import { getGift } from "../../src/helpers/getGifs"

describe('getGifst test', ()=>{
    it('Should return array gifts', async()=>{
        const gifs = await getGift('One Punch')
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({id: expect.any(String), title:expect.any(String), url:expect.any(String)})
    })
})