/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

class Date_{
    dayOfWeek_ = null;
    dayOfMonth_ = null;
    month_ = null;
    year_ = null;
    
    set(){
        document.write("<h3>Set() Method</h3>");
        const dateobject = new Date();
        this.dayOfWeek_ = dateobject.getDay();
        this.dayOfMonth_ = dateobject.getDate();
        this.month_ = dateobject.getMonth()+1;
        this.year_ = dateobject.getFullYear();
    }
    
    get(){
        document.write("<h3>Get() Method</h3>");
        let language = navigator.language;
        language = language.slice(0,2);
        let daysOfWeek_ = null;
        let months_ = null;
        let labelDayOfWeek = null;
        let labelDayOfMonth = null;
        let labelMonth = null;
        let labelYear = null;
        switch(language){
            case "pt":
                daysOfWeek_ = new Array("Domingo", "Segunda-Feira", "Terça-Feira","Quarta-Feira","Quinta-Feira", "Sexta-Feira", "Sábado");
                months_ = new Array("","Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
                labelDayOfWeek = "Dia da semana";
                labelDayOfMonth = "Dia do mês";
                labelMonth = "Mês";
                labelYear = "Ano";
                break;
            case "en":
                daysOfWeek_ = new Array("Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday");
                months_ = new Array("","January","February","March","April","May","June","July","August","Setember","October","November","December");
                labelDayOfWeek = "Day of week";
                labelDayOfMonth = "Day of month";
                labelMonth = "Month";
                labelYear = "Year";
                break;
            case "es":
                daysOfWeek_ = new Array("Domingo", "Lunes", "Martes","Miércoles","Jueves", "Viernes", "Sábado");
                months_ = new Array("","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
                labelDayOfWeek = "Día de la semana";
                labelDayOfMonth = "Día del mes";
                labelMonth = "Mes";
                labelYear = "Ano";
                break;
            case "fr":
                daysOfWeek_ = new Array("Dimanche", "Lundi", "Mardi","Mercredi","Jeudi", "Vendredi", "Samedi");
                months_ = new Array("","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre");
                labelDayOfWeek = "Jour de la semaine";
                labelDayOfMonth = "Jour du mois";
                labelMonth = "Mois";
                labelYear = "Année";
                break;
            default:
                daysOfWeek_ = new Array("Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday");
                months_ = new Array("","January","February","March","April","May","June","July","August","Setember","October","November","December");
                labelDayOfWeek = "Day of week";
                labelDayOfMonth = "Day of month";
                labelMonth = "Month";
                labelYear = "Year";
                break;
        }
        document.write("<br/>"+labelDayOfWeek+":"+daysOfWeek_[this.dayOfWeek_]);
        document.write("<br/>"+labelDayOfMonth+":"+this.dayOfMonth_);
        document.write("<br/>"+labelMonth+":"+this.month_+" ("+months_[this.month_]+")");
        document.write("<br/>"+labelYear+":"+this.year_);
    }
    
    dateDate(){
        document.write("<h3>dateDate() Method</h3>");
        let language = navigator.language;
        language = language.slice(0,2);
        document.write("<br/>");
        if((language == "es")||(language=="pt"))
            document.write("Data: "+this.dayOfMonth_+"/"+this.month_+"/"+this.year_);
        else if(language == "fr")
            document.write("Date: "+this.dayOfMonth_+"/"+this.month_+"/"+this.year_);
        else
            document.write("Date: "+this.year_+"/"+this.dayOfMonth_+"/"+this.month_);
    }
    
    constructor(){
        document.write("<h2>Date_ Class !</h2>");
    }
}