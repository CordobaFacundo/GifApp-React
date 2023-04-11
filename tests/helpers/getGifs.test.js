import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en el getGifs.js', () => { 
    test('Debe retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('One Punch');
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
 })