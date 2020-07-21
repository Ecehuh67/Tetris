export type FieldProps = {
  field: {
    id: number;
    isBottom: boolean;
    isFrozen: boolean;
    color: string | null;
    isClear: boolean;
  }[];
};

export interface GameOverProps {
  score: number;
  cb: (flag: boolean) => {};
}

export type UserFieldProps = {
  field: {
    id: number;
    color: string | null;
    isClear: boolean;
  }[];
};
