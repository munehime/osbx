export default class Parameter {

    type: string | undefined;
    options: (number | undefined)[] = [];
    p_value: string | undefined;

    constructor(type: string, options: (number | undefined)[], p_value?: string) {
        this.type = type;
        this.options = options;
        this.p_value = p_value;
    }

    GetLine(): string {
        let line = ` ${this.type}`;
        this.options.forEach(option => {
            line += option == undefined ? "," : `,${this.GetDecimals(option) > 3 ? option.toFixed(3) : option}`;
        });
        if (this.p_value != undefined) line += `,${this.p_value}`;
        return line;
    }

    private GetDecimals(number: number): number {
        if(Math.floor(number.valueOf()) === number.valueOf()) return 0;
        return number.toString().split(".")[1].length || 0;
    }
}
