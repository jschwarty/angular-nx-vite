export class AbstractWithCustomDecorator {
    message: string;

    constructor() {
        this.message = (this as any).title;
    }
}

export const CustomDecorator = ({ title }: { title: string }) => {
    return (constructor: any) => {
        constructor.prototype.title = title;
    };
};
