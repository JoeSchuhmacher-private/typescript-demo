export const assertUnreachable = (x: never): never => {
  throw new Error(`assertUnreachable: ${x}`);
}
