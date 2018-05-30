import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PlayersComponent } from './players/players.component';
import { DraftsComponent } from './drafts/drafts.component';
import { DraftTypesComponent } from './draft-types/draft-types.component';

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'draft-types', component: DraftTypesComponent},
    {path: 'players', component: PlayersComponent},
    {path: 'drafts', component: DraftsComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule{

}