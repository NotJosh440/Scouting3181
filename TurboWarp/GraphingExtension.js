class GraphingExtension {
    constructor(a, b) {
    /*
    Complex.js v2.1.1 12/05/2020
    Copyright (c) 2022, Robert Eisele (robert@xarg.org)
    Dual licensed under the MIT or GPL Version 2 licenses.
    */
    (function(q){function n(){throw SyntaxError("Invalid Param");}function p(a,b){var c=Math.abs(a),e=Math.abs(b);if(0===a)return Math.log(e);if(0===b)return Math.log(c);if(3E3>c&&3E3>e)return.5*Math.log(a*a+b*b);a/=2;b/=2;return.5*Math.log(a*a+b*b)+Math.LN2}function d(a,b){if(!(this instanceof d))return new d(a,b);var c={re:0,im:0};if(void 0===a||null===a)c.re=c.im=0;else if(void 0!==b)c.re=a,c.im=b;else switch(typeof a){case "object":"im"in a&&"re"in a?(c.re=a.re,c.im=a.im):"abs"in a&&"arg"in a?!Number.isFinite(a.abs)&&
    Number.isFinite(a.arg)?c=d.INFINITY:(c.re=a.abs*Math.cos(a.arg),c.im=a.abs*Math.sin(a.arg)):"r"in a&&"phi"in a?!Number.isFinite(a.r)&&Number.isFinite(a.phi)?c=d.INFINITY:(c.re=a.r*Math.cos(a.phi),c.im=a.r*Math.sin(a.phi)):2===a.length?(c.re=a[0],c.im=a[1]):n();break;case "string":c.im=c.re=0;var e=a.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),f=1,h=0;null===e&&n();for(var l=0;l<e.length;l++){var m=e[l];" "!==m&&"\t"!==m&&"\n"!==m&&("+"===m?f++:"-"===m?h++:("i"===m||"I"===m?(0===f+h&&n()," "===
    e[l+1]||isNaN(e[l+1])?c.im+=parseFloat((h%2?"-":"")+"1"):(c.im+=parseFloat((h%2?"-":"")+e[l+1]),l++)):((0===f+h||isNaN(m))&&n(),"i"===e[l+1]||"I"===e[l+1]?(c.im+=parseFloat((h%2?"-":"")+m),l++):c.re+=parseFloat((h%2?"-":"")+m)),f=h=0))}0<f+h&&n();break;case "number":c.im=0;c.re=a;break;default:n()}this.re=c.re;this.im=c.im}var g=Math.cosh||function(a){return 1E-9>Math.abs(a)?1-a:.5*(Math.exp(a)+Math.exp(-a))},k=Math.sinh||function(a){return 1E-9>Math.abs(a)?a:.5*(Math.exp(a)-Math.exp(-a))};d.prototype=
    {re:0,im:0,sign:function(){var a=this.abs();return new d(this.re/a,this.im/a)},add:function(a,b){var c=new d(a,b);return this.isInfinite()&&c.isInfinite()?d.NAN:this.isInfinite()||c.isInfinite()?d.INFINITY:new d(this.re+c.re,this.im+c.im)},sub:function(a,b){var c=new d(a,b);return this.isInfinite()&&c.isInfinite()?d.NAN:this.isInfinite()||c.isInfinite()?d.INFINITY:new d(this.re-c.re,this.im-c.im)},mul:function(a,b){var c=new d(a,b);return this.isInfinite()&&c.isZero()||this.isZero()&&c.isInfinite()?
    d.NAN:this.isInfinite()||c.isInfinite()?d.INFINITY:0===c.im&&0===this.im?new d(this.re*c.re,0):new d(this.re*c.re-this.im*c.im,this.re*c.im+this.im*c.re)},div:function(a,b){var c=new d(a,b);if(this.isZero()&&c.isZero()||this.isInfinite()&&c.isInfinite())return d.NAN;if(this.isInfinite()||c.isZero())return d.INFINITY;if(this.isZero()||c.isInfinite())return d.ZERO;a=this.re;b=this.im;var e=c.re,f=c.im;if(0===f)return new d(a/e,b/e);if(Math.abs(e)<Math.abs(f))return c=e/f,e=e*c+f,new d((a*c+b)/e,(b*
    c-a)/e);c=f/e;e=f*c+e;return new d((a+b*c)/e,(b-a*c)/e)},pow:function(a,b){var c=new d(a,b);a=this.re;b=this.im;if(c.isZero())return d.ONE;if(0===c.im){if(0===b&&0<a)return new d(Math.pow(a,c.re),0);if(0===a)switch((c.re%4+4)%4){case 0:return new d(Math.pow(b,c.re),0);case 1:return new d(0,Math.pow(b,c.re));case 2:return new d(-Math.pow(b,c.re),0);case 3:return new d(0,-Math.pow(b,c.re))}}if(0===a&&0===b&&0<c.re&&0<=c.im)return d.ZERO;var e=Math.atan2(b,a),f=p(a,b);a=Math.exp(c.re*f-c.im*e);b=c.im*
    f+c.re*e;return new d(a*Math.cos(b),a*Math.sin(b))},sqrt:function(){var a=this.re,b=this.im,c=this.abs();if(0<=a){if(0===b)return new d(Math.sqrt(a),0);var e=.5*Math.sqrt(2*(c+a))}else e=Math.abs(b)/Math.sqrt(2*(c-a));a=0>=a?.5*Math.sqrt(2*(c-a)):Math.abs(b)/Math.sqrt(2*(c+a));return new d(e,0>b?-a:a)},exp:function(){var a=Math.exp(this.re);return new d(a*Math.cos(this.im),a*Math.sin(this.im))},expm1:function(){var a=this.re,b=this.im,c=Math.expm1(a)*Math.cos(b);var e=Math.PI/4;-e>b||b>e?e=Math.cos(b)-
    1:(e=b*b,e*=e*(e*(e*(e*(e*(e*(e/20922789888E3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-.5);return new d(c+e,Math.exp(a)*Math.sin(b))},log:function(){var a=this.re,b=this.im;return new d(p(a,b),Math.atan2(b,a))},abs:function(){var a=this.re;var b=this.im,c=Math.abs(a),e=Math.abs(b);3E3>c&&3E3>e?a=Math.sqrt(c*c+e*e):(c<e?(c=e,e=a/b):e=b/a,a=c*Math.sqrt(1+e*e));return a},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){var a=this.re,b=this.im;return new d(Math.sin(a)*
    g(b),Math.cos(a)*k(b))},cos:function(){var a=this.re,b=this.im;return new d(Math.cos(a)*g(b),-Math.sin(a)*k(b))},tan:function(){var a=2*this.re,b=2*this.im,c=Math.cos(a)+g(b);return new d(Math.sin(a)/c,k(b)/c)},cot:function(){var a=2*this.re,b=2*this.im,c=Math.cos(a)-g(b);return new d(-Math.sin(a)/c,k(b)/c)},sec:function(){var a=this.re,b=this.im,c=.5*g(2*b)+.5*Math.cos(2*a);return new d(Math.cos(a)*g(b)/c,Math.sin(a)*k(b)/c)},csc:function(){var a=this.re,b=this.im,c=.5*g(2*b)-.5*Math.cos(2*a);return new d(Math.sin(a)*
    g(b)/c,-Math.cos(a)*k(b)/c)},asin:function(){var a=this.re,b=this.im,c=(new d(b*b-a*a+1,-2*a*b)).sqrt();a=(new d(c.re-b,c.im+a)).log();return new d(a.im,-a.re)},acos:function(){var a=this.re,b=this.im,c=(new d(b*b-a*a+1,-2*a*b)).sqrt();a=(new d(c.re-b,c.im+a)).log();return new d(Math.PI/2-a.im,a.re)},atan:function(){var a=this.re,b=this.im;if(0===a){if(1===b)return new d(0,Infinity);if(-1===b)return new d(0,-Infinity)}var c=a*a+(1-b)*(1-b);a=(new d((1-b*b-a*a)/c,-2*a/c)).log();return new d(-.5*a.im,
    .5*a.re)},acot:function(){var a=this.re,b=this.im;if(0===b)return new d(Math.atan2(1,a),0);var c=a*a+b*b;return 0!==c?(new d(a/c,-b/c)).atan():(new d(0!==a?a/0:0,0!==b?-b/0:0)).atan()},asec:function(){var a=this.re,b=this.im;if(0===a&&0===b)return new d(0,Infinity);var c=a*a+b*b;return 0!==c?(new d(a/c,-b/c)).acos():(new d(0!==a?a/0:0,0!==b?-b/0:0)).acos()},acsc:function(){var a=this.re,b=this.im;if(0===a&&0===b)return new d(Math.PI/2,Infinity);var c=a*a+b*b;return 0!==c?(new d(a/c,-b/c)).asin():
    (new d(0!==a?a/0:0,0!==b?-b/0:0)).asin()},sinh:function(){var a=this.re,b=this.im;return new d(k(a)*Math.cos(b),g(a)*Math.sin(b))},cosh:function(){var a=this.re,b=this.im;return new d(g(a)*Math.cos(b),k(a)*Math.sin(b))},tanh:function(){var a=2*this.re,b=2*this.im,c=g(a)+Math.cos(b);return new d(k(a)/c,Math.sin(b)/c)},coth:function(){var a=2*this.re,b=2*this.im,c=g(a)-Math.cos(b);return new d(k(a)/c,-Math.sin(b)/c)},csch:function(){var a=this.re,b=this.im,c=Math.cos(2*b)-g(2*a);return new d(-2*k(a)*
    Math.cos(b)/c,2*g(a)*Math.sin(b)/c)},sech:function(){var a=this.re,b=this.im,c=Math.cos(2*b)+g(2*a);return new d(2*g(a)*Math.cos(b)/c,-2*k(a)*Math.sin(b)/c)},asinh:function(){var a=this.im;this.im=-this.re;this.re=a;var b=this.asin();this.re=-this.im;this.im=a;a=b.re;b.re=-b.im;b.im=a;return b},acosh:function(){var a=this.acos();if(0>=a.im){var b=a.re;a.re=-a.im;a.im=b}else b=a.im,a.im=-a.re,a.re=b;return a},atanh:function(){var a=this.re,b=this.im,c=1<a&&0===b,e=1-a,f=1+a,h=e*e+b*b;a=0!==h?new d((f*
    e-b*b)/h,(b*e+f*b)/h):new d(-1!==a?a/0:0,0!==b?b/0:0);b=a.re;a.re=p(a.re,a.im)/2;a.im=Math.atan2(a.im,b)/2;c&&(a.im=-a.im);return a},acoth:function(){var a=this.re,b=this.im;if(0===a&&0===b)return new d(0,Math.PI/2);var c=a*a+b*b;return 0!==c?(new d(a/c,-b/c)).atanh():(new d(0!==a?a/0:0,0!==b?-b/0:0)).atanh()},acsch:function(){var a=this.re,b=this.im;if(0===b)return new d(0!==a?Math.log(a+Math.sqrt(a*a+1)):Infinity,0);var c=a*a+b*b;return 0!==c?(new d(a/c,-b/c)).asinh():(new d(0!==a?a/0:0,0!==b?-b/
    0:0)).asinh()},asech:function(){var a=this.re,b=this.im;if(this.isZero())return d.INFINITY;var c=a*a+b*b;return 0!==c?(new d(a/c,-b/c)).acosh():(new d(0!==a?a/0:0,0!==b?-b/0:0)).acosh()},inverse:function(){if(this.isZero())return d.INFINITY;if(this.isInfinite())return d.ZERO;var a=this.re,b=this.im,c=a*a+b*b;return new d(a/c,-b/c)},conjugate:function(){return new d(this.re,-this.im)},neg:function(){return new d(-this.re,-this.im)},ceil:function(a){a=Math.pow(10,a||0);return new d(Math.ceil(this.re*
    a)/a,Math.ceil(this.im*a)/a)},floor:function(a){a=Math.pow(10,a||0);return new d(Math.floor(this.re*a)/a,Math.floor(this.im*a)/a)},round:function(a){a=Math.pow(10,a||0);return new d(Math.round(this.re*a)/a,Math.round(this.im*a)/a)},equals:function(a,b){var c=new d(a,b);return Math.abs(c.re-this.re)<=d.EPSILON&&Math.abs(c.im-this.im)<=d.EPSILON},clone:function(){return new d(this.re,this.im)},toString:function(){var a=this.re,b=this.im,c="";if(this.isNaN())return"NaN";if(this.isInfinite())return"Infinity";
    Math.abs(a)<d.EPSILON&&(a=0);Math.abs(b)<d.EPSILON&&(b=0);if(0===b)return c+a;0!==a?(c=c+a+" ",0>b?(b=-b,c+="-"):c+="+",c+=" "):0>b&&(b=-b,c+="-");1!==b&&(c+=b);return c+"i"},toVector:function(){return[this.re,this.im]},valueOf:function(){return 0===this.im?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return 0===this.im&&0===this.re},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!(this.isNaN()||this.isFinite())}};
    d.ZERO=new d(0,0);d.ONE=new d(1,0);d.I=new d(0,1);d.PI=new d(Math.PI,0);d.E=new d(Math.E,0);d.INFINITY=new d(Infinity,Infinity);d.NAN=new d(NaN,NaN);d.EPSILON=1E-15;"function"===typeof define&&define.amd?define([],function(){return d}):"object"===typeof exports?(Object.defineProperty(d,"__esModule",{value:!0}),d["default"]=d,d.Complex=d,module.exports=d):q.Complex=d})(this);}
    static ZERO = new Complex(0, 0);
    static ONE = new Complex(1, 0);
    static I = new Complex(0, 1);
    static PI = new Complex(Math.PI, 0);
    static E = new Complex(Math.E, 0);
    static INFINITY = new Complex(Infinity, Infinity);
    static NAN = new Complex(NaN, NaN);
    static EPSILON = 1E-15;
    
    getInfo() {
        return {
        id: 'findamount',
        name: 'Graphing Extension',
        blocks: [
            {
                opcode: 'FindAmount',
                blockType: Scratch.BlockType.REPORTER,
                text: 'find amount of [CHAR] in [VAR]',
                arguments: {
                    CHAR: {
                    type: Scratch.ArgumentType.STRING
                    },
                    VAR: {
                    type: Scratch.ArgumentType.STRING
                    }
                }    
            },
            {
                opcode: 'Power',
                blockType: Scratch.BlockType.REPORTER,
                text: '[ONE] ^ [TWO]',
                arguments:{
                    ONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    TWO: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                }
            },
            {
                opcode: 'FloatToFraction',
                blockType: Scratch.BlockType.REPORTER,
                text: 'float to fraction [NUM]',
                arguments:{
                    NUM: {
                        type: Scratch.ArgumentType.NUMBER
                    }
                }
            },
            {
                opcode: 'ComplexPow',
                blockType: Scratch.BlockType.REPORTER,
                text: 'complex [RONE][IONE] ^ [RTWO][ITWO]',
                arguments:{
                    RONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    IONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    RTWO: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    ITWO: {
                        type: Scratch.ArgumentType.NUMBER
                    }
                }
            },
            {
                opcode: 'ComplexAdd',
                blockType: Scratch.BlockType.REPORTER,
                text: 'complex [RONE][IONE] + [RTWO][ITWO]',
                arguments:{
                    RONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    IONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    RTWO: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    ITWO: {
                        type: Scratch.ArgumentType.NUMBER
                    }
                }
            }
        ]
        };
    }

    FindAmount(args) {
        return args.VAR.match(/args.CHAR/g);
    }

    Power(args){
        return Math.pow(args.ONE, args.TWO);
    }

    FloatToFraction(args) {
        x = args.NUM;
        const tolerance = 1.0E-9;
        let sign = '';
        if (x < 0) {
            sign = '-';
            x = Math.abs(x);
        }
    
        let h1 = 1;
        let h2 = 0;
        let k1 = 0;
        let k2 = 1;
        let b = x;
        
        do {
            const a = Math.floor(b);
            let temp = h1;
            h1 = a * h1 + h2;
            h2 = temp;
            temp = k1;
            k1 = a * k1 + k2;
            k2 = temp;
            b = 1 / (b - a);
        } while (Math.abs(x - h1 / k1) > x * tolerance);
    
        return `${sign}${h1}/${k1}`;
    }

    ComplexPow(args){
        const result = new GraphingExtension(args.RONE, args.IONE).pow(args.RTWO, args.ITWO);
        const formattedResult = `${result.re} + ${result.im}i`;
        return formattedResult;
    }

    ComplexAdd(args){
        const result = new GraphingExtension.Complex(args.RONE, args.IONE).add(args.RTWO, args.ITWO);
        const formattedResult = `${result.re} + ${result.im}i`;
        return formattedResult;
    }

}

Scratch.extensions.register(new GraphingExtension());  