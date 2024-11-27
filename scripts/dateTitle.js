function dateTitle () {
    const calendar = Calendarium.getAPI("Nomad");
    const curDate = calendar.getCurrentDate();

    console.log(curDate);
    const format = "DD of MMMM, Y";

    const outStr = calendar.toDisplayDate(date=curDate, end=null, dateFormat=format);
    return outStr;
}

module.exports = dateTitle;