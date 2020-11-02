import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { playGroundData } from './reducer';



const persistConfig = {
    key: 'campk12',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, playGroundData)
   

  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  export { store, persistor }