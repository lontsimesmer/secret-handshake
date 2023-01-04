const shake = document.querySelector('.shake')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const field = document.getElementById('field')

btn2.onclick = function reset () {
  window.location.reload()
}

function action () {
  const num = field.value
  let figure = parseInt(num).toString(2)
  console.log(figure)

  const binary = [1000, 100, 10, 1]
  const exercise = ['jump', 'close your eyes', 'double blink', 'wink']

  if (num > 0) {
    const effective = figure - 10000 > 0
    console.log(effective)

    if (effective) {
      figure -= 10000
    }
    const answer = []

    for (let i = 0; i < binary.length; i++) {
      if (figure - binary[i] >= 0) {
        figure -= binary[i]
        answer.push(exercise[i])
      }
    }

    if (!effective) {
      answer.reverse()
    }
    return answer.join(',')
  } else {
    alert('It is not a valid number')
  }
}
btn1.addEventListener('click', () => {
  shake.innerHTML = action(field.value)
})
