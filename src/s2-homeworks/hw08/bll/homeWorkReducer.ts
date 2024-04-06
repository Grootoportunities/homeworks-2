import { UserType } from "../HW8";

type SortActionType = { type: "sort"; payload: "up" | "down" };
type CheckActionType = { type: "check"; payload: number };

type ActionType = SortActionType | CheckActionType;

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType,
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name

      return [...state].sort((a, b) =>
        action.payload === "up"
          ? a.name > b.name
            ? 1
            : -1
          : a.name < b.name
            ? 1
            : -1,
      );
    }
    case "check": {
      return [...state].filter((u) => u.age >= action.payload);
    }
    default:
      return state;
  }
};

export const sortAC = (payload: "up" | "down"): SortActionType => ({
  type: "sort",
  payload,
});

export const checkAC = (payload: number): CheckActionType => ({
  type: "check",
  payload,
});
