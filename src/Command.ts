export interface Command<T, R > {
  execute(arg: T): R;
}

export class SaveCommand implements Command<string, void> {
  private history: string[];


  constructor(
    history: string[],
  ) {
    this.history = history;
  }

  execute(arg: string): void {
    this.history.push(arg)
    console.log(this.history)
  }
}

export class UndoCommand implements Command<void, void> {
  private history: string[];
  private setHistory: (value: string[]) => void;
  private setContent: (value: string) => void;

  constructor(
    history: string[],
    setHistory: (value: string[]) => void,
    setContent: (value: string) => void
  ) {
    this.history = history;
    this.setHistory = setHistory;
    this.setContent = setContent;
  }

  execute(): void {
    if (this.history.length > 0) {
      const newHistory = [...this.history];
      newHistory.pop(); // Eliminar el último guardado
      this.setHistory(newHistory);

      const lastSaved = newHistory[newHistory.length - 1] || "";
      this.setContent(lastSaved); // Restaurar el último valor
      console.log(this.history)
    }
  }
}
