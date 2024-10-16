export class ActDomainM {
    idAct: string;
    element: any

    constructor(
        idAct: string,
        element: Record<string, any>
    ) {
        this.idAct = idAct;
        this.element = element;
    }
}