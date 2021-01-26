declare class commandPeripheral{
    getCommand(): string;

    setCommand(command: string): void;

    runCommand(): [boolean, string | null];
}