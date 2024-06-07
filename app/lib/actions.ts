'use server';

export async function createInvoice(formData: FormData){

    //use .get(name) to extract values from formData
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };
    console.log(rawFormData);
}