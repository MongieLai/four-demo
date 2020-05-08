import $ from 'jquery'
import './app4.css'

$('#circular').on('mouseover',(e)=>{
    $('#circular').addClass('active')
})


$('#circular').on('mouseout',(e)=>{
    $('#circular').removeClass('active')
})