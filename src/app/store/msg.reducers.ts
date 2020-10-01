import {createReducer,on, Action} from '@ngrx/store';
import { addmsg } from '../store/msg.actions';
import { msgtype } from '../msgtype';

const initialState :msgtype={
    body:'Waiting For message',
    icon: '',
    title :'Waiting title'
}

export const msgReducers= createReducer< msgtype> (initialState,
    on(addmsg ,(state,action)=> ({...state, 
         body:action.body,
        icon: action.icon,
        title :action.title,

            })
      )

    );

    // export function reducer(state: msgtype | undefined, action:Action) {
    //     console.log("Reducer called")
    //     return createReducer(state, action);
    //   }

