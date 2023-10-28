
export interface ICustomButton {
    title: string,
    callBack: () => void,
    isActive?: boolean
}

export interface ITimeContainer {
    time: string,
    intervalId: NodeJS.Timer | undefined,
    delay:number
}

export interface IInitialState {
    theme: 'dark'|'light'
}