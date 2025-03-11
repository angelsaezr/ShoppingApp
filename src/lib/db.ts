interface Table1 {
    id: number;
    Product: string;
    Quantity: number;
    Done: string;
}

const table1: Table1[] = [];
export const db = {
    findAllTable1: (): Table1[] => {
        return table1;
    },
    createTable1: (obj: any) => {
        obj.id = table1.length > 0 ? table1[table1.length - 1].id + 1 : 1;
        table1.push(obj);
    },
    deleteTable1: (id: number) => {
        const index = table1.findIndex(item => item.id === id);
        if (index !== -1) {
            table1.splice(index, 1);
        }
    }
};