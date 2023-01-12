import { studentAction } from '../helper/student_helper';

export class StudentReport implements studentAction {

    constructor(
        public totalQuest : number,
        readonly correct: number
    ){}

    getResult(): void {
        console.log(this.correct);
    }

    ajustResult():void{
        console.log(`percent of correct answer is ${this.correct/this.totalQuest}`)
    }
}