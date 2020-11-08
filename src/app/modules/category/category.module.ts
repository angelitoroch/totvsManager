import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*Componentes personalizados para el category modulo */
import { CategoryRoutingModule } from './category-routing.module';
import { MakeCategoryComponent } from './components/make-category/make-category.component';
import { CategoryComponent } from './components/category/category.component';
import { ModifyCategoryComponent } from './components/modify-category/modify-category.component';

@NgModule({
  declarations: [
    MakeCategoryComponent,
    CategoryComponent,
    ModifyCategoryComponent,
  ],
  imports: [CommonModule, CategoryRoutingModule],
})
export class CategoryModule {}
