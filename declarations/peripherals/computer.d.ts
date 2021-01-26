/** @noSelfInFile */
declare class computerPeripheral{
    turnOn(): void;

    shutdown(): void;

    reboot(): void;

    getID(): number;

    isOn(): boolean;

    getLabel(): string | null;
}