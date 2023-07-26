# 🚀 We are developers - **TypeScript Demo**

## 🔖  Assert unreachable

Function:
```typescript
  export const assertUnreachable = (x: never): never => {
    throw new Error(`assertUnreachable: ${x}`);
  }
```

Use Case:
```typescript
  enum UserRole {
    ScrumMaster = 'ScrumMaster',
    Developer = 'Developer',
    ProductOwner = 'ProductOwner',
  }
  
  export const getValidUserActions = (user: User): ActionType[] => {
    switch (user.role) {
      case UserRole.ProductOwner:
        return [ActionType.CreateStory, ActionType.TestStory, ActionType.ApproveStory];
      case UserRole.Developer:
        return [ActionType.CreateStory, ActionType.ImplementStory];
      case UserRole.ScrumMaster:
        return [ActionType.CreateStory];
      default:
        return assertUnreachable(user.role)
    }
  };
```


## 🔖  Typed Ids
```typescript
  export type StoryId = String & {_storyId: never;}
  export type EpicId = String & {_epicId: never;}

  // just in case id you need to create an Id by yourself
  export const asEpicId = (epicId: string): EpicId => epicId as unknown as EpicId;

  // use it in other functions
  const assignToEpic = (storyId: StoryId, epicId: EpicId): void => { }

  
  ✅ assignToEpic(action.storyId, action.epicId);
  
  💥 assignToEpic(action.epicId, action.storyId);
  ```

## 🔖 Immutable Type

```typescript
export type Primitive = undefined | null | boolean | string | number | Function;

export interface DeepImmutableArray<T> extends ReadonlyArray<Immutable<T>> {}

export interface DeepImmutableMap<K, V> extends ReadonlyMap<Immutable<K>, Immutable<V>> {}

export type DeepImmutableObject<T> = {
  readonly [K in keyof T]: Immutable<T[K]>
};

export type Immutable<T> =
  T extends Primitive ? T :
    T extends [infer X, infer Y] ? readonly [Immutable<X>, Immutable<Y>] :
      T extends [infer C, infer D, infer E] ? readonly [Immutable<C>, Immutable<D>, Immutable<E>] :
        T extends [infer F, infer G, infer H, infer I] ? readonly [Immutable<F>, Immutable<G>, Immutable<H>, Immutable<I>] :
          T extends Array<infer U> ? DeepImmutableArray<U> :
            T extends Map<infer K, infer V> ? DeepImmutableMap<K, V> :
              DeepImmutableObject<T>;
```
Use Case:
```typescript

const addMailAddressToUser = (user: Immutable<User>, newMailAddress: string): User => {
✅ return { name: user.name, emailAddresses: [newMailAddress, ...user.emailAddresses] }; // 
}


const addMailAddressToUser = (user: Immutable<User>, newMailAddress: string): User => {
  const newUser = user;
💥newUser.emailAddresses = [newMailAddress];
  return newUser;
}
```

## 🔖 NonEmptyArray

```typescript
  export type NonEmptyArray<T> = [T, ...T[]]
```
Use Case:
```typescript
interface User {
  name: string;
  emailAddresses: NonEmptyArray<string>;
}

const getFirstEMailAddress = (user: User): string => {
  return user.emailAddresses[0]; // no undefined check required
}

const createUser = (name: string, mail: string): User => {
✅ return {name, emailAddresses: [mail]};
💥 return {name, emailAddresses: []};
}
```
