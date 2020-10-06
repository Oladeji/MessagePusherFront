import {createAction,props}  from '@ngrx/store'
import { msgtype } from '../msgtype';
import { AppState } from './appstate';

export const addmsg = createAction('[msgtype] Add Message1', props<{
    body:string;    icon: string;    title :string;    }>());


export const AddMessageOnly = createAction('[msgtype] Add Message2', props<{   msg:msgtype   } >());
       
      
    