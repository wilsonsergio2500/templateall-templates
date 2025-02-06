import { Store, State, Selector, StateContext, Action } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { I{Name_pascalized}StateModel, {Name_pascalized}Type } from './{Name_file}.model';
import { {Name_pascalized}Actions } from './{Name_file}.actions';
import { MatXtndConfirmationDialogService, MatXtndSnackbarSuccessService } from '@ngfoxpoint/xtnd';
import { formOnStateDefaults } from '@models/index';
import { EMPTY, tap, mergeMap } from 'rxjs';


@State<I{Name_pascalized}StateModel>({
    name: '{Name_original}',
    defaults: <I{Name_pascalized}StateModel>{
        loading: false,
        busy: false,
        current: null,
        form: { ...formOnStateDefaults }
      }
})
@Injectable()
export class {Name_pascalized}State {

  static readonly NgxsFormValue = '{Name_original}.form';

    constructor(
      private readonly httpClient: HttpClient,
      private readonly snackSuccess: MatXtndSnackbarSuccessService,
      private readonly confirmationDialog: MatXtndConfirmationDialogService
    ){}

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

  @Selector()
  static getCurrent(state: I{Name_pascalized}StateModel): {Name_pascalized}Type | null {
    return state.current;
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

  @Action({Name_pascalized}Actions.GetByAsset)
  onGetByAsset(ctx: StateContext<I{Name_pascalized}StateModel>, action: {Name_pascalized}Actions.GetByAsset) {
    return ctx.dispatch(new {Name_pascalized}Actions.Loading()).pipe(
      mergeMap(() => this.httpClient.get<{Name_pascalized}Type>(`${this.basePath}/by-asset/${action.assetId}`)),
      tap(current => {
        ctx.patchState({ current });
      }),
      mergeMap(() => ctx.dispatch(new {Name_pascalized}Actions.Done()))
    );
  }


  @Action({Name_pascalized}Actions.Update)
  onUpdate(ctx: StateContext<I{Name_pascalized}StateModel>) {
    const { form: { model } } = ctx.getState();
    if (model) {
      return ctx.dispatch(new {Name_pascalized}Actions.Working()).pipe(
        mergeMap(() => this.httpClient.post<{Name_pascalized}Type>(`${this.basePath}`, model)),
        tap((current: {Name_pascalized}Type) => ctx.patchState({ current })),
        mergeMap(() => ctx.dispatch(new {Name_pascalized}Actions.Done()))
      )
    }
    return EMPTY;
  }


}