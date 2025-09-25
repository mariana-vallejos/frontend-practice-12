export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type Action =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: number }
  | { type: "DELETE"; payload: number };