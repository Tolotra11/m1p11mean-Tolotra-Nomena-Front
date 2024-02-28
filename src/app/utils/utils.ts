export const formatDateString = (date:Date, options:any)=>{
    const formatter = new Intl.DateTimeFormat('fr-FR', options);
    const formatted = formatter.format(new Date(date));
    return formatted;
}