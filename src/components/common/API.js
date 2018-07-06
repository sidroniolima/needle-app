import axios from 'axios';
import { AsyncStorage } from 'react-native';

import { BASE_URL } from '../../actions/types';

const getToken = async () => {
    try 
    {        
        let value = await AsyncStorage.getItem('@MV-CASH:token');
        
        if (value !== null)
        {
            return value;
        }
    } catch (error) {
        console.log('GETTOKEN ERRROR:', error);
    }
};

const instance = axios.create({
    baseURL: BASE_URL,
})

const setDefaults = async () =>
{
    try
    {
        const storagedToken = '';
        storagedToken = await getToken();        

        instance.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`;
        instance.defaults.headers.post['Content-Type'] = 'application/json';
    }catch (error) {
        console.log('GETTOKEN ERRROR:', error);
    }
}

setDefaults();

export default instance;