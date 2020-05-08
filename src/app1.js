import $ from 'jquery'
import './app1.css'

const $addOne = $('#addOne')
const $reduceOne = $('#reduceOne')
const $multiply = $('#multiply')
const $divided = $('#divided')

let n = parseInt(localStorage.getItem('n') || 0)
$('#result').text(n)
$addOne.on('click', (e) => {
    n += 1
    $('#result').text(n)
    localStorage.setItem('n', n)
})

$reduceOne.on('click', (e) => {
    n -= 1
    $('#result').text(n)
    localStorage.setItem('n', n)
})

$multiply.on('click', (e) => {
    n *= 2
    $('#result').text(n)
    localStorage.setItem('n', n)
})

$divided.on('click', (e) => {
    console.log('1231')
    n /= 2
    $('#result').text(n)
    localStorage.setItem('n', n)
})