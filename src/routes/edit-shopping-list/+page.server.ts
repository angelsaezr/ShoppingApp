import { db } from '$lib/db';
import { toNumber } from '$lib/validation';

export function load() {
    return {
        table1: db.findAllTable1(),
        error: null
    };
}

export const actions = {
    addTable: async ({ request }: { request: Request }) => {
        const data = await request.formData();
        const product = data.get('Product') as string;
        const quantity = Number(data.get('Quantity'));
        const done = data.get('Done') ? "true" : "false";

        // Check if the product name is valid
        const productRegex = /^[A-Za-zÀ-ÿ\s]+$/;
        if (!product || !productRegex.test(product)) {
            return { error: 'The product name must contain only letters and not be empty.' };
        }

        // Check if the quantity is valid
        if (isNaN(quantity) || quantity < 1) {
            return { error: 'Quantity must be a number greater than or equal to 1.' };
        }

        const obj = { Product: product, Quantity: quantity, Done: done };
        db.createTable1(obj);

        return { success: true };
    },
    deleteTable: async ({ request }: { request: Request }) => {
        const data = await request.formData();
        const id = Number(data.get('id'));
        db.deleteTable1(id);
    }
};
