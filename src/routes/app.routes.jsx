import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Gerenciamento } from '../pages/Gerenciamento';
import { Profile } from '../pages/Profile';

// Rotas para usuário logado
// Routes envolve as Rotas existentes
export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/new' element={<New/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/gerenciamento' element={<Gerenciamento/>} />
        </Routes>
    )
}