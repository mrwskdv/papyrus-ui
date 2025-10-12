export type Maybe<T> = T | null | undefined;

export type FileOrUrl = File | string;

export interface FileState {
  data: Maybe<unknown>;
  file: Maybe<File>;
  invalid: boolean;
  loading: boolean;
  name: string;
  url: Maybe<FileOrUrl>;
}

export type MaybeMultiValue<
  Value,
  IsMulti extends boolean,
> = IsMulti extends true ? ReadonlyArray<Value> : Value | null;
