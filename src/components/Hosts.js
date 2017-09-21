import {getHosts} from '../actions/host-actions';
import io from 'socket.io-client';
 
export default function (store) {
    const socket = io.connect('http://localhost:3002');
    
    socket.on('hosts', hosts => {
        store.dispatch(getHosts(hosts));
    });
}