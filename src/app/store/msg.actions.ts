import {createAction,props}  from '@ngrx/store'
import { msgtype } from '../msgtype';

export const addmsg = createAction('[msgtype] Add Message', props<{
    body:string;
    icon: string;
    title :string;
    }>());
