const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Анна",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Анастасия",
            "id_5": "Екатерина"
        }
    }`,
    firstShirdNameJson: `{
        "count": 5,
        "list": {     
            "id_1": "Ивано",
            "id_2": "Максимо",
            "id_3": "Андрее",
            "id_4": "Дмитрие",
            "id_5": "Егоро"
        }
    }`,
    firstProfMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "инженер",
            "id_2": "физик",
            "id_3": "официант",
            "id_4": "пожарный",
            "id_5": "полицейский"
        }
    }`,
    firstProfFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "актриса",
            "id_2": "официантка",
            "id_3": "сотрудница службы техподдержки",
            "id_4": "акушерка",
            "id_5": "учительница"
        }
    }`,
    firstMonthJson: `{
        "count": 12,
        "list": {     
            "id_1": {
                "name": "Январь",
                "count": 31
            },
            "id_2": {
                "name": "февраль",
                "count": 28
            },
            "id_3": {
                "name": "март",
                "count": 31
            },
            "id_4": {
                "name": "апрель",
                "count": 30
            },
            "id_5": {
                "name": "май",
                "count": 31
            },
            "id_6": {
                "name": "июнь",
                "count": 30
            },
            "id_7": {
                "name": "июль",
                "count": 31
            },
            "id_8": {
                "name": "август",
                "count": 31
            },
            "id_9": {
                "name": "сентябрь",
                "count": 30
            },
            "id_10": {
                "name": "октябрь",
                "count": 31
            },
            "id_11": {
                "name": "ноябрь",
                "count": 30
            },
            "id_12": {
                "name": "декабрь",
                "count": 31
            }
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if(this.person.gender == 'Мужчина'){
            return this.randomValue(this.firstNameMaleJson);
        }else{
            return this.randomValue(this.firstNameFemaleJson);
        }

    },

    randomYear: function(){

        return Math.floor(Math.random() * 50) + 1970;

    },
    randomDay: function(){

        return Math.floor(Math.random() * this.person.month.count) + 1;

    },

    randomSurname: function() {

        return this.randomValue(this.surnameJson) + ((this.person.gender == 'Женщина') ? "a":"");

    },
    randomMonth: function() {

        return this.randomValue(this.firstMonthJson);

    },

    randomThirdName: function() {

        if(this.person.gender == 'Мужчина'){
            return this.randomValue(this.firstShirdNameJson) + "вич";
        }else{
            return this.randomValue(this.firstShirdNameJson) + "вна";
        }

    },
    
    randomProf: function() {

        if(this.person.gender == 'Мужчина'){
            return this.randomValue(this.firstProfMaleJson);
        }else{
            return this.randomValue(this.firstProfFemaleJson);
        }

    },

    randomGender: function() {

        if(Math.random() > 0.5){
            return this.GENDER_MALE;
        }else{
            return this.GENDER_FEMALE;
        }

    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.shirdname = this.randomThirdName();
        this.person.prof = this.randomProf();
        this.person.year = this.randomYear();
        this.person.month = this.randomMonth();
        this.person.day = this.randomDay();
        return this.person;
    }
};
