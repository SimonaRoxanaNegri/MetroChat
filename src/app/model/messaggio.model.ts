export class Messaggio {
    constructor(
        public idm: number, //id del messaggio
        public idt: string, //id del treno
        public idu: string, //id dell'utente
        public testo: string, //testo messaggio
        public idd?: string) //orario del destinatario (opzionale)
    { }
}