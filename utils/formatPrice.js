export default function (price) {
  return new Intl.NumberFormat("ru-RU").format(price) + ' ₽'
}
