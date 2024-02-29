export const formatDateString = (date:string)=>{
    var dateParts = date.split('T')[0].split('-');
    var year = dateParts[0];
    var month = parseInt(dateParts[1], 10);
    var day = parseInt(dateParts[2], 10);

    // Tableau des noms des mois en français
    var mois_fr = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    // Récupérer le nom du mois en français
    var month_fr = mois_fr[month - 1];

    // Récupérer l'heure
    var timeParts = date.split('T')[1].split(':');

    // Formater la date
    var dateFormatted = day + ' ' + month_fr + ' ' + year ;

    return dateFormatted;
}


export const formatHeure = (date:string) =>{
    var timeParts = date.split('T')[1].split(':');
    var hour = parseInt(timeParts[0], 10);
    var minute = parseInt(timeParts[1], 10);
    var dateFormatted = hour + ':' + (minute < 10 ? '0' : '') + minute;
    return dateFormatted;
}

export const formatDateHeureString = (date:string) => {
    var dateParts = date.split('T')[0].split('-');
    var year = dateParts[0];
    var month = parseInt(dateParts[1], 10);
    var day = parseInt(dateParts[2], 10);

    // Tableau des noms des mois en français
    var mois_fr = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    // Récupérer le nom du mois en français
    var month_fr = mois_fr[month - 1];

    // Récupérer l'heure
    var timeParts = date.split('T')[1].split(':');
    var hour = parseInt(timeParts[0], 10);
    var minute = parseInt(timeParts[1], 10);

    // Formater la date
    var dateFormatted = day + ' ' + month_fr + ' ' + year+' à '+hour+':'+minute ;

    return dateFormatted;
}