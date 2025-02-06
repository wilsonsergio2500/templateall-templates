import { Store, State, Selector, StateContext, Action } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { I{Name_pascalized}StateModel, {Name_pascalized}Type } from './{Name_file}.model';
import { {Name_pascalized}Actions } from './{Name_file}.actions';
import { EMPTY, tap, mergeMap } from 'rxjs';


@State<I{Name_pascalized}StateModel>({
    name: '{Name_original}',
    defaults: <I{Name_pascalized}StateModel>{
        loading: false,
        busy: false,
        boostrapParams: null
      }
})
@Injectable()
export class {Name_pascalized}State {

  static readonly Delay = 2000;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store
  ) { }


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

  @Action({Name_pascalized}Actions.Initialize)
  onInitialize(ctx: StateContext<I{Name_pascalized}StateModel>) {
    return ctx.dispatch(new {Name_pascalized}Actions..Loading()).pipe(
      delay({Name_pascalized}State.Delay),
      mergeMap(() => ctx.dispatch(new {Name_pascalized}Actions..Done()))
    )
  }





}