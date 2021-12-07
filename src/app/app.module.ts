import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './component/shopping/shopping-list/shopping-list.component';
import { ShoppingFormComponent } from './component/shopping/shopping-form/shopping-form.component';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { RecipeBookComponent } from './component/recipe/recipe-book/recipe-book.component';
import { HeaderComponent } from './template/include/header/header.component';
import { RecipeListComponent } from './component/recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './component/recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './component/recipe/recipe-item/recipe-item.component';
import { ShoppingComponent } from './template/page/shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingFormComponent,
    IngredientComponent,
    RecipeBookComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
