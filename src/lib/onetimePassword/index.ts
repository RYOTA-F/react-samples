/**
 * ランダム整数を生成
 */
export const createRandomNumber = (max: number, min: number) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min
}
