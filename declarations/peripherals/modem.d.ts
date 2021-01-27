/** @noSelfInFile */
declare class modemPeripheral{
    open(channel: number): void;

    isOpen(channel: number): boolean;

    close(channel: number): void;

    closeAll(): void;

    transmit(channel: number, replyChannel: number, payload: any): void;

    isWireless(): boolean;

    getNamesRemote(): string[];

    isPresentRemote(name:string): boolean;

    getTypeRemote(name:string): string | null;

    getMethodsRemote(name:string): string[] | null;

    callRemote(name:string, method:string, ...args: any[]): any[];

    getNameLocal(): string | null;
}