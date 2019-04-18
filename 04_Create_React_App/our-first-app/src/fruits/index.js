import { choice, remove } from "./helpers";
import foods from './foods'


const pickFruit = () => {
  // 1
  let picked = choice(foods)
  // 2
  console.log(`I'd like one ${picked}, please`)
  // 3
  console.log(`Here you go: ${picked}`)
  // 4
  console.log(`Delicious! May I have another?`)
  // 5
  let remaining = remove(foods, picked)
  // 6
  console.log(`I'm sorry, we're all out.  We have ${remaining.length} left`)
}

export default pickFruit