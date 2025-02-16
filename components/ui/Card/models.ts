export enum EType {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

export type TComponentProps = {
  type: EType;
}

export type TEmits = {
 (e: 'click', params: EType): void
}
