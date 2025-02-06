
import { IPaginator } from '@firebase-module/types/firebase-pagination-inmemory';
import { I{Name_pascalized}FirebaseModel } from './schema/{Name_file}.schema';

export class {Name_pascalized}SetAsLoadingAction {
    static type = '[{Name_titlelized}] Set As Loading';
}

export class {Name_pascalized}SetAsDoneAction {
    static type = '[{Name_titlelized}] Set As Done';
}

export class {Name_pascalized}CreateAction{
    static type = '[{Name_titlelized}] Create';
  constructor(public request: I{Name_pascalized}FirebaseModel) { }
}

export class {Name_pascalized}UpdateAction{
  static type = '[{Name_titlelized}] Update';
  constructor(public request: I{Name_pascalized}FirebaseModel) { }
}

export class {Name_pascalized}RemoveAction{
  static type = '[{Name_titlelized}] Remove';
  constructor(public request: I{Name_pascalized}FirebaseModel) { }
}

export class {Name_pascalized}GetByIdAction{
  static type = '[{Name_titlelized}] Get By Id';
  constructor(public id: string) { }
}

export class {Name_pascalized}LoadFirstPageAction{
  static type = '[{Name_titlelized}] Load First Page';
}

export class {Name_pascalized}LoadNextPageAction{
  static type = '[{Name_titlelized}] Load Next Page';
}

export class {Name_pascalized}LoadPreviousPageAction{
  static type = '[{Name_titlelized}] Load Previous Page';
}