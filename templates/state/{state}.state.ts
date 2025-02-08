import { Store, State, Selector, StateContext, Action } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { I{Name_pascalized}StateModel } from './{Name_file}.model';
import { {Name_pascalized}Actions } from './{Name_file}.actions';

@State<I{Name_pascalized}StateModel>({
    name: '{Name_original}',
    defaults: <I{Name_pascalized}StateModel>{
    loading: false,
    busy: false,
      }
})
export class {Name_pascalized}State {

    constructor(
        private readonly httpClient: HttpClient
    ){
    }

    get basePath(){
        return 'path';
    }

    @Selector()
    static IsLoading(state: I{Name_pascalized}StateModel): boolean {
            return state.loading;
        }

    @Selector()
    static IsWorking(state: I{Name_pascalized}StateModel): boolean {
            return state.busy;
        }

    @Action({Name_pascalized}Actions.Done)
        on{entry_name}Done(ctx: StateContext<I{Name_pascalized}StateModel>) {
            ctx.patchState({
                loading: false,
                busy: false
            });
        }

    @Action({Name_pascalized}Actions.Loading)
        on{entry_name}Loading(ctx: StateContext<I{Name_pascalized}StateModel>) {
            ctx.patchState({
                loading: true
            });
        }

    @Action({Name_pascalized}Actions.Working)
        onWorking(ctx: StateContext<I{Name_pascalized}StateModel>) {
            ctx.patchState({
                busy: true
            });
        }

}