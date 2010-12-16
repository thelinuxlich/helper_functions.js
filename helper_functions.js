/** Função para passar html entities dentro do JS sem problemas */
String.prototype.unescapeHtml = function () {
    var temp = document.createElement("div");
    temp.innerHTML = this;
    var result = temp.childNodes[0].nodeValue;
    temp.removeChild(temp.firstChild);
    return result;
}
/** Função para preencher zeros à esquerda*/
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}
/** Função para formatar uma data */
function format_date(date) {
    return pad(date.getDate(),2)+"/"+pad(date.getMonth() + 1,2) + "/" + date.getFullYear();
}
/** Função para converter uma string(dd/mm/yyyy) em data */
function strtodate(date) {
    var data = date.split('/');
    var str_data = data[1]+"/"+data[0]+"/"+data[2];
    return new Date(str_data);
}
/** Função para comparar datas(dd/mm/yyyy), retorna 0 se a primeira data for maior e 1 se for menor.*/
function compare_dates(date1,date2) {
    var d1 = strtodate(date1);
    var d2 = strtodate(date2);
    if(d1 > d2)
        return 0;
    else if(d1 < d2)
        return 1;
    else
        return -1;
}
/** Regex de validação de data (dd/mm/yyyy) */
var DATE_REGEX = /^(0[1-9]|(1|2)[0-9]|3[0-1]){1}\/(0[1-9]{1}|1[0-2]{1}){1}\/(19[0-9]{2}|2[0-9]{3})$/;
/** Regex de validação de hora (hh:mm) */
var TIME_REGEX = /^([0-1][0-9]|2[0-3]){1}:([0-5][0-9]){1}$/;
/**
 * Classe que segue o design pattern IdentityMap, útil para guardar um cache local de objetos.
 * @name IdentityMap
 * @class
*/
var IdentityMap = function() {
    /**
     * Comparação entre objetos pelo valor.
     * @name IdentityMap#find
     * @param id  Um id único para o objeto da request
     * @param params  Objeto contendo os parâmetros da request
     * @function
     */
    this.find = function(id,params) {
        return $.grep(this,function(d) {
            return d.id === id && ko.utils.stringifyJson(d.params) === ko.utils.stringifyJson(params);
        })[0];
    };
};
IdentityMap.prototype = new Array();

