
export interface ICustomButton {
    title: string,
    callBack: () => void,
    isActive?: boolean
}

export interface ITimeContainer {
    time: string,
    intervalId: any,
    delay:number
}
