'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';

// schema that validates data
const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({id: true, date: true });

export async function createInvoice(formData: FormData) {

    // validate types and use .get() to extract values from formData
    const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });
    // store amount value in cents
    const amountInCents = amount * 100;
    // create new date (yyyy-mm-dd) for invoice creation date
    const date = new Date().toISOString().split('T')[0];

    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;

    
}