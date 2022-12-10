/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

class Date_{
    boolDebug = false;
    dateobject = new Date();
    dayOfWeek_ = null;
    daysOfWeek_ = null;
    dayOfMonth_ = null;
    months_ = null;
    monthNumber_ = null;
    monthName_ = null;
    year_ = null;
    
    set(){
        if(this.boolDebug == true)
            document.write("<h3>Set() Method!</h3>");
        switch(this.auxiliaryMethod_navigatorLanguage()){
            case "pt":
                this.daysOfWeek_ = new Array("Domingo", "Segunda-Feira", "Terça-Feira","Quarta-Feira","Quinta-Feira", "Sexta-Feira", "Sábado");
                this.months_ = new Array("","Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
                break;
            case "en":
                this.daysOfWeek_ = new Array("Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday");
                this.months_ = new Array("","January","February","March","April","May","June","July","August","Setember","October","November","December");
                break;
            case "es":
                this.daysOfWeek_ = new Array("Domingo", "Lunes", "Martes","Miércoles","Jueves", "Viernes", "Sábado");
                this.months_ = new Array("","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
                break;
            case "fr":
                this.daysOfWeek_ = new Array("Dimanche", "Lundi", "Mardi","Mercredi","Jeudi", "Vendredi", "Samedi");
                this.months_ = new Array("","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre");
                break;
            default:
                this.daysOfWeek_ = new Array("Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday");
                this.months_ = new Array("","January","February","March","April","May","June","July","August","Setember","October","November","December");
                break;
        }
        this.dayOfWeek_ = this.daysOfWeek_[this.dateobject.getDay()];
        this.dayOfMonth_ = this.dateobject.getDate();
        this.monthNumber_ = this.dateobject.getMonth()+1;
        this.monthName_ = this.months_[this.monthNumber_];
        this.year_ = this.dateobject.getFullYear();
    }
    
    get(){
        if(this.boolDebug == true)
            document.write("<h3>Get() Method!</h3>");
        let labelDayOfWeek = null;
        let labelDayOfMonth = null;
        let labelMonth = null;
        let labelYear = null;
        switch(this.auxiliaryMethod_navigatorLanguage()){
            case "pt":
                labelDayOfWeek = "Dia da semana";
                labelDayOfMonth = "Dia do mês";
                labelMonth = "Mês";
                labelYear = "Ano";
                break;
            case "en":
                labelDayOfWeek = "Day of week";
                labelDayOfMonth = "Day of month";
                labelMonth = "Month";
                labelYear = "Year";
                break;
            case "es":
                labelDayOfWeek = "Día de la semana";
                labelDayOfMonth = "Día del mes";
                labelMonth = "Mes";
                labelYear = "Ano";
                break;
            case "fr":
                labelDayOfWeek = "Jour de la semaine";
                labelDayOfMonth = "Jour du mois";
                labelMonth = "Mois";
                labelYear = "Année";
                break;
            default:
                labelDayOfWeek = "Day of week";
                labelDayOfMonth = "Day of month";
                labelMonth = "Month";
                labelYear = "Year";
                break;
        }
        document.write("<br/>"+labelDayOfWeek+":"+this.dayOfWeek_);
        document.write("<br/>"+labelDayOfMonth+":"+this.dayOfMonth_);
        document.write("<br/>"+labelMonth+":"+this.monthNumber_+" ("+this.monthName_+")");
        document.write("<br/>"+labelYear+":"+this.year_); 
    }
    
    getDayOfWeek(boolReturn){
        if(this.boolDebug == true)
            document.write("<h3>getDayOfWeek() Method!</h3>");
        if(boolReturn  == 0)
            this.auxiliaryMethod_renderize(boolReturn,this.dayOfWeek_,"dayofweekobj");
        else
            this.auxiliaryMethod_renderize(boolReturn,this.dayOfWeek_);
    }
    
    getDayOfMonth(boolReturn){
        if(this.boolDebug == true)
            document.write("<h3>getDayOfMonth() Method!</h3>");
        if(boolReturn  == 0)
            this.auxiliaryMethod_renderize(boolReturn,this.dayOfMonth_,"dayofmonthobj");
        else
            this.auxiliaryMethod_renderize(boolReturn,dayOfMonth_);
    }
    
    getMonthNumber(boolReturn){
        if(this.boolDebug == true)
            document.write("<h3>getMonthNumber() Method!</h3>");
        if(boolReturn  == 0)
            this.auxiliaryMethod_renderize(boolReturn,this.monthNumber_,"monthNumberobj");
        else
            this.auxiliaryMethod_renderize(boolReturn,monthNumber_);
    }
    
    getMonthName(boolReturn){
        if(this.boolDebug == true)
            document.write("<h3>getMonthName() Method!</h3>");
        if(boolReturn  == 0)
            this.auxiliaryMethod_renderize(boolReturn,this.monthName_,"monthNameobj");
        else
            this.auxiliaryMethod_renderize(boolReturn,monthName_);
    }
    
    getYear(boolReturn){
        if(this.boolDebug == true)
            document.write("<h3>getYear() Method!</h3>");
        if(boolReturn  == 0)
            this.auxiliaryMethod_renderize(boolReturn,this.year_,"yearobj");
        else
            this.auxiliaryMethod_renderize(boolReturn,year_);
    }
    
    setOtherDate(dayMonth,month,year){
        if(this.boolDebug == true)
            document.write("<h3>setOtherDate() Method!</h3>");
        month--;
        if((dayMonth != null)||(dayMonth != undefined))
            this.dateobject.setDate(dayMonth);
        if((month != null)||(month != undefined))
            this.dateobject.setMonth(month);
        if((year != null)||(year != undefined))
            this.dateobject.setFullYear(year);
        this.set();
        this.get();
    }
    
    auxiliaryMethod_renderize(boolReturn,objText,objId){
        if((boolReturn == true)||(boolReturn == 1))
            return objText;
        else{
            if((objId == null)||(objId != undefined))
                document.write("<br/>"+objText);
            else{
                var objHTML = document.getElementById(objId);
                if((objHTML != null)||(objHTML != undefined)){
                    objHTML.innerHTML += objText;
                    if(objHTML.hasAttribute("value") == true)
                        objHTML.setAttribute("value",objText);
                }else
                    document.write("<br/>"+objText);
            }
        }
    }
    
    auxiliaryMethod_navigatorLanguage(){
        let language = navigator.language;
        language = language.slice(0,2);
        return language;
    }
    
    constructor(boolDebug){
        this.boolDebug = boolDebug;
        if((boolDebug == true)||(boolDebug == 1)){
            document.write("<h2>Date_ Class !</h2>");
        }
    }
}