/**
 * Created by user on 2017. 4. 18..
 */
function sayHello() {
    document.body.innerText = "Hello, World!";
}
window.onload = sayHello;

(function () {
    var validator = {
        getSpec: function () {

        },

        getTag: function () {

        },
    };
})();

function validate(dom, validator) {
    //var spec = dom.getSpec();

    //return validator(spec);
}

/**
 * Dom Tag의 상하 관계 검사
 * */
function topAndBottomValidator(dom, config) {

}

/**
 * Element에서 사용가능한 속성인지를 검사
 * */
function usableAttrValidator(dom, config) {

}

/**
 *  Element에서 사용가능한 속성값인지를 검사
 * */
function usableAttrValValidation(dom, config) {

}

/**
 * 정의되지 않은 Element 사용 검사
 * */
function undefindEleValidator(dom, config) {

}

/**
 * 사용가능한 CSS Variable인지 검사
 * */
function usableCssVarValidator(style, config) {

}

/**
 * CSS의 상하 관계 검사
 * */
function topAndBottomValidator(dom, config) {

}
