import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PortSamplingOutingHeaderComponent} from '../../forms/port-sampling-outing-header/port-sampling-outing-header.component';

const routes: Routes = [
  {path: 'form/psOutingHeader', component: PortSamplingOutingHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
