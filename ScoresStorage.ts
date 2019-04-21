class ScoresStorage {

  private scores: number[];
  private initData: number[];
  private storageName: string;
  private changeIndex: number | null;

  constructor(initData: number[], storageName: string) {
    this.scores = [];
    this.initData = initData;
    this.storageName = storageName;
    this.changeIndex = null;
    this.setInitData();
  }

  public setInitData(): void {
    this.changeIndex = null;
    const localScores: string | null = localStorage.getItem(this.storageName);

    if (localScores !== null) {
      this.scores = JSON.parse(localScores);
    } else {
      (Object as any).assign(this.scores, this.initData) ;
    }
  }

  public setScore(score: number): void {
    this.changeIndex = null;
    this.scores.some((value, index) => {
      if (value < score) {
        this.scores.splice(index, 0, score);
        this.scores.pop();
        this.changeIndex = index;
        return true;
      } else {
        return false;
      }
    });
    localStorage.setItem(this.storageName, JSON.stringify(this.scores));
  }

  public getChangeIndex(): number | null {
    return this.changeIndex;
  }

  public getScores(): number[] {
    return this.scores;
  }

  public clearScores(): void {
    localStorage.clear();
    this.setInitData();
  }
}

export default ScoresStorage;
