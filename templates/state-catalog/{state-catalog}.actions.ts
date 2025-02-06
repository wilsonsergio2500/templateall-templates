
export namespace {Name_pascalized}Actions{
  export class Loading {
    static readonly type = '[{Name_titlelized}] Set As Loading';
  }

  export class Working {
    static readonly type = '[{Name_titlelized}] Set As Working';
  }
  
  export class Done {
    static readonly type = '[{Name_titlelized}] Set As Done';
  }
  
  export class GetByAsset {
    static readonly type = '[{Name_titlelized}] Get By Asset';
    constructor(public readonly assetId: number) { }
  }

  export class Update {
    static readonly type = '[{Name_titlelized}] Update';
  }
 
}


