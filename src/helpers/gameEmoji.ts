export function gameEmoji(name: string){
  switch (name.toLowerCase()) {
    case 'fps':
      return '🔫'
    case 'rogue-like':
      return '☠️'
    case 'rpg':
      return '⚔️'
    case 'horror':
      return '😱'
  }
}