
import { getLetter, registerUser } from '../services/firebaseConfig';
// import { user } from '../types/types';
import { AppDispatcher } from './Dispatcher';

export const users= {
  REGISTER: 'REGISTER',
  LOGIN:'LOGIN', 
  GET_NAME: 'GET_NAME',
  GET_COLOR: 'GET_COLOR', 
  GET_LETTER: 'GET_LETTLER', 
  GET_PIXEL:'GET_PIXEL',
};


export enum Screen {
  REGISTER_PAGE= 'REGISTER PAGE',
  LOGIN_PAGE ='LOGIN_PAGE', 
  COLOR_PAGE = 'COLOR_PAGE', 
  LETTER_PAGE = 'LETTER_PAGE', 
  NAME_PAGE ='NAME_PAGE', 
  GAME_PAGE = 'GAME_PAGE', 

}

export const screenActionType = {
  CHANGE_SCREEN: 'CHANGE_SCREEN',
};

export const userActions = {
  registerUser () {
    AppDispatcher.dispatch({
      type: users.REGISTER,
      payload: users
    });
  },

  loginUser: async () => {
    AppDispatcher.dispatch({
      type: users.LOGIN,
      payload: {users}
    });
  },

  getName: async () => {
    AppDispatcher.dispatch({
      type: users.GET_NAME,
      payload: {users}
    });
  },

  getLetter: async () => {
    AppDispatcher.dispatch({
      type: users.GET_LETTER,
      payload: {users}
    });
  }, 

  getColor: async () => {
    AppDispatcher.dispatch({
      type: users.GET_COLOR,
      payload: {users}
    });
  }, 

  getPixel: async () => {
    AppDispatcher.dispatch({
      type: users.GET_PIXEL,
      payload: {users}
    });
  }



}

export const screenActions = {
  changeScreen: (newScreen: Screen) => {
    AppDispatcher.dispatch({
      type: screenActionType.CHANGE_SCREEN,
      payload: newScreen
    });
  }
}

;