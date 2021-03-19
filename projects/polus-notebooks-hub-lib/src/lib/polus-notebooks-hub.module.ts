import {NgModule} from '@angular/core';
import {PolusNotebooksHubComponent} from './polus-notebooks-hub.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [PolusNotebooksHubComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: [
          {path: '', component: PolusNotebooksHubComponent},
          {path: '', component: PolusNotebooksHubComponent, outlet: 'center'}
        ]
      }
    ])
  ],
  exports: [PolusNotebooksHubComponent]
})
export class PolusNotebooksHubModule {}
