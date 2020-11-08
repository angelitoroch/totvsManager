import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { MakeCategoryComponent } from './components/make-category/make-category.component';
import { ModifyCategoryComponent } from './components/modify-category/modify-category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
  {
    path: 'makeCategory',
    component: MakeCategoryComponent,
  },
  {
    path: 'modifyCategory',
    component: ModifyCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
