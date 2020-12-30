// 按需全局引入 vant组件
import Vue from 'vue'
import { 
    Button,
    Search,
    Tabbar, 
    TabbarItem,
    Swipe, SwipeItem,
    Icon,
    DropdownMenu,
    DropdownItem,
    Tab,
    Tabs
} from 'vant'
Vue.use(Button)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Search )
Vue.use(Swipe).use(SwipeItem)
Vue.use(Icon)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tab);
Vue.use(Tabs);