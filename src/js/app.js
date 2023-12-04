export default function sortHealthPlayer(list) {
  return list.sort((a, b) => b.health - a.health)
}
