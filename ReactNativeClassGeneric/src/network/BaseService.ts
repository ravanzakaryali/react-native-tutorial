export default class BaseService<T> {
    endPoint: string;
    constructor(endP:string){
        this.endPoint = endP;
    }
    get = async (id: number): Promise<T> => {
        let res = await fetch(this.endPoint);
        let data = await res.json();
        return data;
    }
}