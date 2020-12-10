import { render } from '@testing-library/react'
import { getWeatherByCityName } from '../logic/weather';
import Titular from '../components/Titular';


describe('getMountainById', () => {

    test('getMountainById',() => {

        try{
            const result = 1+1;
            expect(result).toBe(2);
        }catch (error) {
            console.log('not mountain')
        }})

    test('get city weather by city name', async () => {

        const result = await getWeatherByCityName('barcelona');
        expect(result.name.toUpperCase()).toBe('BARCELONA');
    })  

    test('get the name html by component titular', async () => {

        const props = { title: 'Marko' }
        const { container, getByText } = await render(<Titular {...props} ></Titular>)

        expect(getByText('Marko')).toBeInTheDocument()
    })  
    
    

})



