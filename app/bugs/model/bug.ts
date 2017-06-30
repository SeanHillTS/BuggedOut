export class Bug {
    constructor(
        public id: string,
        public title: string,
        public status: number,
        public severity: string,
        public description: string,
        public createdBy: string,
        public createdDate: number,
        public updatedBy?: string,
        public updatedDate?: number,
    ){}
}