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
  cb: (flag: boolean) => void;
}

export interface StartScreenProps {
  cb: (flag: boolean) => void;
}

export type UserFieldProps = {
  field: {
    id: number;
    color: string | null;
    isClear: boolean;
  }[];
};

export type UserDashboardProps = {
  score: number;
  nextFigure: {
    figure: number[][];
    color: string;
    tetramino: number[];
  };
};

export type FieldSize = {
  wide: number;
  height: number;
};

export type KeyboadrKeys = {
  right: string;
  left: string;
  down: string;
  up: string;
};

export type PlayField = {
  id: number;
  isBottom: boolean;
  isFrozen: boolean;
};
