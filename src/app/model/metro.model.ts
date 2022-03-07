export class Metro {
    constructor(
        public idt: string,
        public linea: string,
        public direzione: string,
        public stazione: string,
        public carrozza: string,
        public numchatting: number, //n passeggeri in chat
        public tempo: number) //orario di partenza
    { }
}