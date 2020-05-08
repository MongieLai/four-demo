import $ from 'jquery'
import './app2.css'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e) => {
    $(e.currentTarget).addClass('active').siblings()
        .removeClass('active')
    let index = $(e.currentTarget).index()
    $tabContent.find('li').eq(index).addClass('active').siblings()
        .removeClass('active')
})

$tabBar.children().eq(0).trigger('click')