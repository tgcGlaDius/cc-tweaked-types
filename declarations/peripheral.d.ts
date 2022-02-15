/** @noSelfInFile */
declare namespace peripheral {
  interface Peripheral {

  }

  interface SpeakerPeripheral {
    /** @noSelf */
    playSound(sound: string, volume?: number, pitch?: number): boolean
  }

  /** @noSelf */
  function find(ty: 'speaker', filter?: (name: string, wrapped: string) => boolean): SpeakerPeripheral
  /** @noSelf */
  function find(ty: string, filter?: (name: string, wrapped: string) => boolean): Peripheral
}
