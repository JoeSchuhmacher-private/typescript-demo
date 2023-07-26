import {NonEmptyArray} from './non-empty-array';

export type Primitive = undefined | null | boolean | string | number | Function;

export interface DeepImmutableArray<T> extends ReadonlyArray<Immutable<T>> {}

export type DeepImmutableNonEmptyArray<T> = ReadonlyArray<Immutable<T>> & {0: Immutable<T>}

export interface DeepImmutableMap<K, V> extends ReadonlyMap<Immutable<K>, Immutable<V>> {}

export type DeepImmutableObject<T> = {
  readonly [K in keyof T]: Immutable<T[K]>
};

export type Immutable<T> =
  T extends Primitive ? T :
    T extends [infer X, infer Y] ? readonly [Immutable<X>, Immutable<Y>] :
      T extends [infer C, infer D, infer E] ? readonly [Immutable<C>, Immutable<D>, Immutable<E>] :
        T extends [infer F, infer G, infer H, infer I] ? readonly [Immutable<F>, Immutable<G>, Immutable<H>, Immutable<I>] :
          T extends NonEmptyArray<infer U> ? DeepImmutableNonEmptyArray<U> :
            T extends Array<infer U> ? DeepImmutableArray<U> :
              T extends Map<infer K, infer V> ? DeepImmutableMap<K, V> :
                DeepImmutableObject<T>;
