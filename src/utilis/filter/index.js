import formatPrice from './formatPrice';

export default{
    install(Vue){
        Vue.filter('formatPrice',formatPrice)
    }
}