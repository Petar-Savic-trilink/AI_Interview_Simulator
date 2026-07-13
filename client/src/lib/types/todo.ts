export const StateVal = {
    DONE: 0,
    IN_PROGRESS: 1,
    DROPPED: 2
} as const;

export type State = typeof StateVal[keyof typeof StateVal];

export interface Todo {
    id: string;
    title: string;
    description: string;
    estimatedTime?: string; // Serialized C# TimeSpan ("hh:mm:ss")
    timeLogged?: string;    // Serialized C# TimeSpan ("hh:mm:ss")
    state: State;
    userId: string;
}