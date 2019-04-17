import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminHomePage from '../pages/Admin/Home';
import AdminMeusChamados from '../pages/Admin/MeusChamados';
import Atendimento from '../pages/Admin/Atendimento';
import NotFound from '../pages/NotFound';

const AdminRoutes = () => (
  <Switch>
    <Route exact path="/admin" component={AdminHomePage} />
    <Route path="/admin/meus-chamados" component={AdminMeusChamados} />
    <Route path="/admin/atendimento/:id" component={Atendimento} />
    <Route component={NotFound} />
  </Switch>
);

export default AdminRoutes;
